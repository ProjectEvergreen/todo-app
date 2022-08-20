import { greenwoodPluginImportCss } from '@greenwood/plugin-import-css';
import { greenwoodPluginPostCss } from '@greenwood/plugin-postcss';

export default {
  plugins: [
    greenwoodPluginPostCss(),
    ...greenwoodPluginImportCss()
  ]
};