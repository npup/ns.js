var module
  , config = module.exports;

config["My tests"] = {
  env: "browser" // or "node"
  , "rootPath": "../"
  , "sources": [ // Paths are relative to config file
    "src/ns.js"
  ]
  , "tests": [
    "test/ns-test.js"
  ]
};
