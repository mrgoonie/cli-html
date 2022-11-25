"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tags_js_1 = __importDefault(require("../tags.js"));
const concat_inline_tags_1 = require("../utils/concat-inline-tags");
const render_tag_1 = require("../utils/render-tag");
const inlineTag = (wrapper) => (tag, context) => {
    const wrapFunction = wrapper || ((argument) => argument);
    if (!tag || !tag.childNodes) {
        return null;
    }
    const value = tag.childNodes.reduce((accumulator, node) => {
        const nodeTag = (0, render_tag_1.renderTag)(node, context, tags_js_1.default.span);
        if (!nodeTag) {
            return accumulator;
        }
        return Object.assign(Object.assign({}, (0, concat_inline_tags_1.concatTwoInlineTags)(accumulator, nodeTag)), { type: "inline", nodeName: tag.nodeName });
    }, null);
    return {
        pre: (value === null || value === void 0 ? void 0 : value.pre) ? wrapFunction(value.pre, tag, context) : null,
        value: wrapFunction(value === null || value === void 0 ? void 0 : value.value, tag, context),
        post: (value === null || value === void 0 ? void 0 : value.post) ? wrapFunction(value.post, tag, context) : null,
        type: "inline",
        nodeName: tag.nodeName,
    };
};
exports.default = inlineTag;
