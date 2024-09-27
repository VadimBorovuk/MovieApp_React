import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import translateEnJson from '../assets/langs/en.json'
import translateUkJson from '../assets/langs/uk.json'

i18n
    .use(initReactI18next)
    .init({
          resources: {
            en: {
              translation: translateEnJson
            },
            uk: {
              translation: translateUkJson
            }
          },
          lng: localStorage.getItem('lang') || 'en',
          fallbackLng: "en",
          interpolation: {
            escapeValue: false
          }
        },
    )

export default i18n;
//
// i18n.use(initReactI18next)
//     .init({
//       resources: {
//             en: {
//                 translation:  translateEnJson
//             },
//             uk: {
//                 translation:   translateUkJson
//             }
//         },
//         lng: localStorage.getItem('lang'), // if you're using a language detector, do not define the lng option
//         fallbackLng: "en",
//
//         interpolation: {
//             escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//         }
//     });


