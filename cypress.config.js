const {defineConfig}                = require("cypress");
const createBundler                 = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin           = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
    reporter: "cypress-multi-reporters",
    reporterOptions: {
        configFile: "reporter-config.json",
    },
  projectId: "8joopz",
  e2e: {
    async setupNodeEvents(on, config) {
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });
        on("file:preprocessor", bundler);
        await addCucumberPreprocessorPlugin(on, config);
        return config;
    },
    specPattern      : "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    viewportWidth    :1920,
    viewportHeight   :1080,
    },
});
