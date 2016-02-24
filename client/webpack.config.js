var config = {
  entry: "./src/index.js",
  output:{
    filename: "bundle.js",
    path: "./build"
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query:{
          presets:['react', 'es2015']
        }
      }
    ]
  },
  devtool: "source-map"
}

module.exports = config;