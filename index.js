// export {default} from "./37da3ac6ee3eeacc@265.js";
// index.js

export { default } from "./37da3ac6ee3eeacc@265.js";

/**
 * Registry de tous les notebooks (fichiers .js) présents dans le même dossier.
 * Requiert un bundler compatible `import.meta.glob` (ex: Vite).
 */
const modules = import.meta.glob("./*.js", { eager: true });

/**
 * Map: key = nom du fichier sans extension (ex: "37da3ac6ee3eeacc@265")
 *      value = export default du module (le notebook)
 */
export const notebooks = new Map(
  Object.entries(modules)
    .filter(([path]) => !path.endsWith("/index.js"))
    .map(([path, mod]) => [path.replace("./", "").replace(".js", ""), mod.default ?? mod])
);

/**
 * Même registry mais en objet (accès direct par clé).
 */
export const notebookById = Object.fromEntries(notebooks);

/**
 * Helpers optionnels
 */
export function getNotebook(id) {
  return notebookById[id] ?? notebooks.get(id) ?? null;
}

export function listNotebooks() {
  return Array.from(notebooks.keys());
}
```
