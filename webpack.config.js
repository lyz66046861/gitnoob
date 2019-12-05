var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'src/main.js'),
    output: {
        path: path.join(__dirname,'dist'),
        filename: "bundle.js"
    }
}