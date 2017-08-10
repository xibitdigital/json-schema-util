module.exports = function(wallaby) {
  return {
    files: ["./*.js", "!test/*.spec.js"],
    tests: ["test/**/*.spec.js"],
    env: {
      type: "node"
    },
    testFramework: "mocha",
    workers: {
      recycle: true
    }
  };
};
