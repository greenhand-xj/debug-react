const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
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
              ['@babel/preset-env', {
                targets: {
                  node: 'current'
                }
              }],
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
  externals: [nodeExternals()],
  node: {
    __dirname: false
  }
};