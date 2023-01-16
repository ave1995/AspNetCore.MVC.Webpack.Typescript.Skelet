var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        site: './src/ts/site.ts',
        bootstrap_js: './src/ts/bootstrap_ts.ts',
        validation: './src/ts/validation.ts',
        index: './src/ts/index.ts'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].entry.js',
        path: path.resolve(__dirname, '..', 'wwwroot', 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
            },
            {
                test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
                type: 'asset'
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
};
//# sourceMappingURL=webpack.config.js.map