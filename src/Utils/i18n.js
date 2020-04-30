import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

//import en from "./locales/en";
import de from "./locales/de";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import it from "./locales/it";
import ja from "./locales/ja";
import ko from "./locales/ko";
import nb from "./locales/nb";
import nl from "./locales/nl";
import ru from "./locales/ru";
import sv from "./locales/sv";
import zh from "./locales/zh-hans";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  de, //German
  en, //English
  es, //Spanish
  fr, //French
  it, //Italian
  ja, //Japanese
  ko, //Korean
  nb, //Norwegian Bokmål
  nl, //Dutch
  ru, //Russian
  sv, //Swedish
  zh, //Simplifed chinese
};

export default I18n;