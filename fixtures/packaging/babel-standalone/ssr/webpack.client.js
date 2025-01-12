const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json'
    })
  ]
};