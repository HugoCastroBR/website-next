// translation.ts
import ptBr  from './pt-br';
import  enUs  from './en-us';



export interface SupportedLanguagesProps {
  key: string;
  value: string;
}



export const supportedLanguages:SupportedLanguagesProps[] = [
  {
    key: 'en',
    value: 'English',
  },
  {
    key: 'pt',
    value: 'Português',
  },
]



export const $t = (text: string, lang: string = 'en'): string => {
  const dictionary = lang === 'pt' ? ptBr : enUs;

  const keys = text.split('.');

  let translation: any = dictionary;

  for (const key of keys) {
    if (translation[key]) {
      translation = translation[key];
    } else {
      translation = text;
      break;
    }
  }

  return translation;
};


export default $t;