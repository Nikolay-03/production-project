import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config} : {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        dist:'',
        html:'',
        entry:'',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config!.resolve!.modules!.unshift(paths.src)
    config!.resolve!.extensions!.push('.ts', '.tsx')
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: webpack.RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return  rule
    })
    config!.module!.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    })
    config!.module!.rules.push(buildCssLoader(true))
    config!.plugins!.push(new webpack.ProvidePlugin({
        'React': 'react',
    }));

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__:JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__:JSON.stringify('storybook')
    }))
    return config
}