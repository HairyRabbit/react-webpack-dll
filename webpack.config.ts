import path from 'path'
import webpack from 'webpack'
import { Context, GlobalName, ManifestFileName, VendorFileName, Libraries } from './index'

export default function ConfigureWebpack(): webpack.Configuration {
  return {
    mode: 'development',
    entry: Libraries,
    output: {
      path: Context,
      filename: VendorFileName,
      library: GlobalName,
    },
    plugins: [
      new webpack.DllPlugin({
        context: Context,
        name: GlobalName,
        path: path.resolve(ManifestFileName),
      }),
    ]
  }
}