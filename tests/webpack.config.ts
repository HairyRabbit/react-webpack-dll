import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { DllReferencePluginOptions, getVendorRelativePath } from 'react-webpack-dll'

export default function ConfigureWebpack(): webpack.Configuration {
  return {
    mode: 'development',
    plugins: [
      new webpack.DllReferencePlugin(DllReferencePluginOptions),
      new HTMLWebpackPlugin({
        template: require('html-webpack-template'),
        scripts: [
          getVendorRelativePath('node_modules')
        ]
      })
    ]
  }
}