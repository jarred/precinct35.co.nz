module.exports = {
  entry: "./assets/js/main.js",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: "./assets/app.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  }
};
