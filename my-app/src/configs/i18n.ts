import i18next from "i18next";

export const locales = {
  EN: "en-US",
  ES: "es-AR",
};

const DEFAULT_LOCALE = locales.ES;

i18next.init({
  initImmediate: false,
  fallbackLng: DEFAULT_LOCALE,
  lng: DEFAULT_LOCALE,
});
