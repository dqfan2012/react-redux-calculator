module.exports = {
  verbose: true,
  "setupTestFrameworkScriptFile": "<rootDir>/tests/setup/setupEnzyme.js",
  "testPathIgnorePatterns": ["/node_modules/", "<rootDir>/tests/setup/"],
  "testMatch": ["**/tests/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
}