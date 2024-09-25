import { ResolveOptions } from "webpack";
import {BuildOptions} from "./types/config";
import path from "path";
const SRC_DIR: string = path.join(__dirname, "../src");
const ALIAS: Record<string, string> = {
    "@server": `${SRC_DIR}/server`,
    "@src": `${SRC_DIR}`,
    "@shared": `${SRC_DIR}/shared`,
    "@app": `${SRC_DIR}/app`,
    "@entities": `${SRC_DIR}/entities`,
    "@pages": `${SRC_DIR}/pages`,
    "@features": `${SRC_DIR}/features`,
    "@widgets": `${SRC_DIR}/widgets`,
    "@styles": `${SRC_DIR}/shared/styles/index.scss`,
    _webpack: path.join(__dirname, "../webpack"),
};
export function buildResolvers(options:BuildOptions):ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute:true,
        modules:[options.paths.src, 'node_modules'],
        mainFiles:['index'],
        alias:ALIAS
    }
}