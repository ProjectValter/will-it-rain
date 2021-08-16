import { Resources } from "resources-tsk";
import brLocal from "./pt-br.local";
import enLocal from "./en.local";

import localKeys from "./keys";

const locals = {
  ptbr: brLocal,
  en: enLocal,
};

const resourceKeys = localKeys;

const resources = new Resources(locals, localKeys);

export { resourceKeys, Resources };

export default resources;
