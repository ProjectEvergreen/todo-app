import { defaultReporter } from '@web/test-runner';
import { greenwoodPluginImportJsx } from './greenwood-plugin-import-jsx.js';
import { junitReporter } from '@web/test-runner-junit-reporter';
import path from 'path';

// create a direct instance of ImportJsxResource
const importJsxResource = greenwoodPluginImportJsx()[0].provider({});

export default {
  files: './src/**/*.spec.js',
  nodeResolve: true,
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    junitReporter({
      outputPath: './reports/test-results.xml'
    })
  ],
  coverage: true,
  coverageConfig: {
    reportDir: './reports'
  },
  plugins: [{
    name: 'import-jsx',
    async transform(context) {
      const { url } = context.request;
      const shouldServe = await importJsxResource.shouldServe(url);

      if (shouldServe) {
        const jsxResource = await importJsxResource.serve(path.join(process.cwd(), url));
        const { body, contentType } = jsxResource;

        return {
          body,
          headers: {
            'content-type': contentType
          }
        };
      }
    }
  }],
  middleware: [
    function rewriteIndex(context, next) {
      const { url } = context.request;

      if (url.indexOf('/assets') === 0) {
        context.request.url = path.join(process.cwd(), 'src', url);
      }

      return next();
    }
  ]
};