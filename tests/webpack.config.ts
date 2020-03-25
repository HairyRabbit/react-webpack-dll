import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { createDllReferencePluginOptions, getVendorRelativePath } from 'react-webpack-dll'

export default function ConfigureWebpack(): webpack.Configuration {
  return {
    mode: 'development',
    plugins: [
      new webpack.DllReferencePlugin(createDllReferencePluginOptions(__dirname)),
      new HTMLWebpackPlugin({
        template: require('html-webpack-template'),
        scripts: [
          getVendorRelativePath('node_modules')
        ]
      })
    ]
  }
}