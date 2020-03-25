import path from 'path'
import { name } from './package.json'
import webpack from 'webpack'

export const Context = __dirname
export const GlobalName = '__VENDOR__'
export const ManifestFileName = 'manifest.json'
export const VendorFileName = 'vendor.js'
export const Libraries = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'react-router-dom',
  '@reduxjs/toolkit',
]

export function getManifestPath(): string {
  return path.resolve(Context, ManifestFileName)
}

export function getVendorRelativePath(prefix: string = ''): string {
  const file_name = `${name}/${VendorFileName}`
  if(!prefix) return file_name
  return `${prefix}/${file_name}`
}

export const DllReferencePluginOptions = {
  context: Context,
  manifest: getManifestPath()
}