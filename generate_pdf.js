const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  
  // Go to the live site
  console.log("Loading website...");
  await page.goto('https://www.global-agro.net', { waitUntil: 'networkidle0' });
  
  console.log("Preparing layout for PDF...");
  // Inject CSS to format for print
  await page.evaluate(() => {
    // Hide everything we don't want in the PDF
    const elementsToHide = [
      'header',
      'section:nth-of-type(1)', // hero
      'section:nth-of-type(2)', // features
      '#contact',
      '#products > div > div.text-center' // The big title above the table
    ];
    
    elementsToHide.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.style.display = 'none';
    });
    
    // Adjust the products section padding
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.style.padding = '20px 0';
    }

    // Isolate the technical specs column
    const flexRow = document.querySelector('#products .flex-col.lg\\:flex-row');
    if (flexRow && flexRow.children.length > 1) {
      flexRow.children[1].style.display = 'none'; // Hide the photo/text column
      flexRow.children[0].style.width = '100%';   // Make table full width
    }
  });

  const outputPath = path.join(__dirname, 'Technical_Specifications.pdf');
  console.log("Saving PDF...");
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });

  await browser.close();
  console.log('PDF saved to:', outputPath);
})();
