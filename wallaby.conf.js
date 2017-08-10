module.exports = function(wallaby) {
  return {
    files: ["./*.js", "!tests/*.spec.js"],
    tests: ["tests/**/*.spec.js"],
    env: {
      type: "node"
    },
    testFramework: "mocha",
    workers: {
      recycle: true
    }
  };
};
