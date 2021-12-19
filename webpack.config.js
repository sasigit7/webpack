const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = (env, argv) => {
  function isDevelopment() {
    return argv.mode === "development";
  }
  var config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    plugins: [new MiniCSSExtractPlugin({
      filename: "bundle.css",
    })],
    devtool: isDevelopment() ? "cheap-module-source-map" : "source-map",
    //mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    pragma: "React.createElement",
                    pragmaFrag: "React.Fragment",
                    development: isDevelopment(),
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
  };

  return config;
};
