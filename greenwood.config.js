import { greenwoodPluginImportJsx } from './greenwood-plugin-import-jsx.js';

export default {
  prerender: true,
  plugins: [
    ...greenwoodPluginImportJsx()
  ]
};