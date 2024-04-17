const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["url-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: ["web", "es5"],
  devServer: {
    contentBase: "./public",
  },
};
