const { override } = require("customize-cra");

module.exports = override((config) => {
  config.module.rules.push({
    test: /\.(glb|gltf)$/,
    use: {
      loader: "file-loader",
    },
  });
  return config;
});
