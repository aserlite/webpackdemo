const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
console.log('test');
module.exports = {
    watchOptions: {
        ignored: /node_modules/
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            clean:true,

        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};
