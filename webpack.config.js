const path = require('path');


module.exports = {
    /*inline-source-map: souce map will be written in bundle.js
    souce-map: souce map will be written in bundle.js.map
    */
    devtool: "source-map", 
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                    }
                }
            }
        ]
    }
}