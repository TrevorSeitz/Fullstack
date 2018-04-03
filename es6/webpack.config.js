// following code is what is given in course:
// const path = require('path');

// module.export = {
//   entry: ['./app/index.js'],
//   output: {
//     filename: 'bundle.js'
//     path:'./build',
//   }
// }

// This code was given by a student in the Q&A
const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};