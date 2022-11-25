"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse5_1 = require("parse5");
const utils_1 = require("./lib/utils");
const get_clobal_config_1 = require("./lib/utils/get-clobal-config");
const render_tag_1 = require("./lib/utils/render-tag");
const htmlToCli = (rawHTML) => {
    const doc = (0, parse5_1.parse)(rawHTML);
    // console.dir(
    //   filterAst(document),
    //   { depth: null },
    // );
    const clobalConfig = (0, get_clobal_config_1.getGlobalConfig)(doc);
    return `\n${(0, utils_1.indentify)(' ')(((0, render_tag_1.renderTag)(doc, clobalConfig) || { value: '' }).value)}\n\n`;
};
exports.default = htmlToCli;
