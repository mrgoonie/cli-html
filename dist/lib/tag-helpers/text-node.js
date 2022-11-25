"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.textNode = void 0;
const he_1 = __importDefault(require("he"));
const normalize_html_whitespace_1 = __importDefault(require("normalize-html-whitespace"));
const textNode = (tag, context) => {
    if (context.pre) {
        return {
            pre: null,
            value: he_1.default.decode(tag.value),
            post: null,
            type: 'inline',
            nodeName: '#text',
        };
    }
    const normalized = [...(0, normalize_html_whitespace_1.default)(tag.value).replace(/\n/g, ' ')];
    const pre = [' ', '\n'].includes(normalized[0]) ? normalized.shift() : null;
    const post = [' ', '\n'].includes(normalized[normalized.length - 1]) ? normalized.pop() : null;
    return {
        pre,
        value: normalized.length > 0 ? `${he_1.default.decode(normalized.join(''))}` : null,
        post,
        type: 'inline',
        nodeName: '#text',
    };
};
exports.textNode = textNode;
