const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Path to your entry file
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babel loader for JavaScript files
        },
      },
    ],
  },
  plugins: [
    new Dotenv(), // Plugin to use .env variables
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000, // Port to run the dev server
  },
};
