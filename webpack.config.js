const path = require('path');

module.exports = {
  entry: './javascript/script.js', // Entry point of your JavaScript files
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle name
  }, 
}; 