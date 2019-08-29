import { resolve as _resolve } from 'path'
import { viewHtml,appIndexJs, appNodeModules, appHtml, appFavicon, viewHtmlFile } from './paths'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'

let webpack_config ={
    entry:{
        app: [appIndexJs]
    },
    output: {
        path: viewHtml,
        filename: `js/[name].[chunkhash:8].js`,
        chunkFilename: `js/[name].[chunkhash:8].js`,
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s[x]?$/,
                exclude: appNodeModules,
                use: 'babel-loader'
            },
            {
                test: WebpackIsomorphicToolsPlugin.regularExpression('css'),
                use: ['style-loader','css-loader']
            },
            {
                test: WebpackIsomorphicToolsPlugin.regularExpression('less'),
                use: ['style-loader','css-loader','less-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.ts','tsx','.js', '.json', '.less', '.css'],
        alias: {
            '~': _resolve('src/'),
            '@': _resolve('src/client/'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appHtml,
            favicon: appFavicon,
            title: 'Blog',
            filename: viewHtmlFile
        })
    ]
}

export default webpack_config
