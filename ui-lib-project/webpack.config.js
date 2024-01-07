const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/assets/'),
        publicPath: '/assets/',
        filename: './bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        devMiddleware: {
          publicPath: '/assets/'
        },
        port: 8080,
        hot: "only"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};