import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";
export default (env:BuildEnv) => {
    const paths: BuildPaths = {
        entry:path.resolve(__dirname,'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        dist: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src')
    }
    const mode = env.mode || 'development'
    const PORT = env.port ||  3000
    const API = env.apiUrl || "http://localhost:8000/"
    const isDev = mode === 'development'

    const config: webpack.Configuration =  buildWebpackConfig({
        mode,
        paths: paths,
        isDev,
        port: PORT,
        apiUrl:API,
        project: 'frontend',
    })
    return config
}