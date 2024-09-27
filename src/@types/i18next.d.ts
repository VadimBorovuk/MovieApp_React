import translateEnJson from "../assets/langs/en.json";
import translateUkJson from "../assets/langs/uk.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources:  {
      en: typeof translateEnJson,
      uk: typeof translateUkJson,
    },
  }
}
