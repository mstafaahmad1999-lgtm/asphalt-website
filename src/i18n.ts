import en from './dictionaries/en.json';
import tr from './dictionaries/tr.json';
import ar from './dictionaries/ar.json';

const dictionaries = {
  en: en,
  tr: tr,
  ar: ar,
};

export const getDictionary = async (locale: 'en' | 'tr' | 'ar') => {
  return dictionaries[locale] || dictionaries.en;
};
