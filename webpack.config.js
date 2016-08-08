var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        context: path.join(__dirname, 'src'),
        entry: './app/app.js',
        resolve: {
            root: [path.join(__dirname, 'src')]
        },
        module: {
            loaders: [
                { 
                    test: /\.js$/, 
                    exclude: /node_modules/, 
                    loader: 'babel' 
                },
                { test: /\.css$/, loader: "css" },
                { test: /\.html$/, exclude: /node_modules/, loader:"raw" },
                { test: /\.json$/, loader: "json" },
                {
                    test: /\.less$/, 
                    loader: 'style!css!less'
                },
                {
                     test: /\.(ttf|eot|svg|otf)$/,
                     loader: "file" 
                },
                // { test: /\.woff(2)?$/, loader: "url?limit=10000&minetype=application/font-woff"}
                { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
                
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject: 'body',
                hash: true
            })
        ],
        devtool: "#inline-source-map"

};