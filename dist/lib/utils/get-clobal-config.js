"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalConfig = void 0;
const change_case_1 = require("change-case");
const term_size_1 = __importDefault(require("term-size"));
const utils_js_1 = require("../utils.js");
const get_meta_tags_js_1 = require("./get-meta-tags.js");
const getGlobalConfig = (document) => {
    const config = {
        pre: false,
        lineWidth: Math.min(120, (0, term_size_1.default)().columns - 2),
        fontAttrs: true,
    };
    const metaTags = (0, get_meta_tags_js_1.getMetaTags)(document).map((metatag) => (0, utils_js_1.filterAst)(metatag));
    // eslint-disable-next-line unicorn/no-array-for-each
    metaTags.forEach((metaTag) => {
        let metaAttributeName = (0, utils_js_1.getAttribute)(metaTag, 'name');
        if (metaAttributeName && metaAttributeName.startsWith('cli-render-')) {
            const metaAttributeValue = (0, utils_js_1.getAttribute)(metaTag, 'content', 'false');
            metaAttributeName = (0, change_case_1.camelCase)(metaAttributeName.replace('cli-render-', ''));
            config[metaAttributeName] = metaAttributeValue === 'true';
        }
    });
    return config;
};
exports.getGlobalConfig = getGlobalConfig;
