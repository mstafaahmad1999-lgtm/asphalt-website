import en from './dictionaries/en.json';
import tr from './dictionaries/tr.json';

const dictionaries = {
  en: en,
  tr: tr,
};

export const getDictionary = async (locale: 'en' | 'tr') => {
  return dictionaries[locale] || dictionaries.en;
};
