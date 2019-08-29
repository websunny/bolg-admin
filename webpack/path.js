import { resolve } from 'path'

const resolveApp = relativePath => resolve(process.cwd(), relativePath)  //拼接path

const BUILD_DIR = resolveApp('build/static')

export const viewHtml = BUILD_DIR
export const viewHtmlFile = resolveApp('build/static/index.html')
export const appHtml = resolveApp('src/view/index.html')
export const appFavicon = resolveApp('src/client/images/favicon.ico')
export const appIndexJs = resolveApp('build/client/index.js')
export const appNodeModules = resolveApp('node_modules')
