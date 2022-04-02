const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        oformlenie: path.resolve(__dirname, './src/js/oformlenie.js'),
        kabinet: path.resolve(__dirname, './src/js/kabinet.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {
          images: path.resolve(__dirname, './src/images/'),
        },
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/index.html'), // шаблон
          filename: 'index.html', // название выходного файла
          chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/zakaz.html'), // шаблон
            filename: 'zakaz.html', // название выходного файла
            chunks: ['oformlenie']
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/kabinet.html'), // шаблон
            filename: 'kabinet.html', // название выходного файла
            chunks: ['kabinet']
        }),
        new CleanWebpackPlugin(),
      ],
      module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                name: 'images/[name].[ext]',
            },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
              
        ],
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
}