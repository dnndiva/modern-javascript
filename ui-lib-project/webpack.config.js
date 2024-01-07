const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/assets/'),
        filename: './bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        devMiddleware: {
          publicPath: 'http://localhost:8080/assets/'
        },
        port: 8080,
        hot: "only"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};