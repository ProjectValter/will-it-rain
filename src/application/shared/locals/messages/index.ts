import { Resources } from "resources-tsk";
import esLocal from "./pt-br.local";
import enLocal from "./en.local";

import localKeys from "./keys";

const locals = {
  es: esLocal,
  en: enLocal,
};

const resourceKeys = localKeys;

const resources = new Resources(locals, localKeys);

export { resourceKeys, Resources };

export default resources;
