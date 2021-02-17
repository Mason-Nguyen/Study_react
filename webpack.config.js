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
    //watch: true, // No need using watch: true, it automatically, and configured in package.json
    watchOptions: {
        ignored: /node_modules/ // No watch file .js in node_modules
        // aggregateTimeout: 200 (ms) // - Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild
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