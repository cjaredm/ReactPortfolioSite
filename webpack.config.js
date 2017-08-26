module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-0"]
            }
        }]
    }
};