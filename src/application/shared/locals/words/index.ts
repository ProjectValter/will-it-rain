import { Resources } from "resources-tsk";
import brLocal from "./pt-br.local";
import enLocal from "./en.local";

import localKeys from "./keys";

const locals = {
  br: brLocal,
  en: enLocal,
};

const wordKeys = localKeys;

const words = new Resources(locals, localKeys);

export { wordKeys, Resources };

export default words;
