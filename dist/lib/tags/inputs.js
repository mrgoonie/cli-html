"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.output = exports.input = exports.button = void 0;
const chalk_1 = __importDefault(require("chalk"));
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const { grey, red, bgBlack, } = chalk_1.default;
exports.button = (0, inline_tag_1.default)((value) => `${bgBlack.grey('[ ')}${bgBlack.bold(value)}${bgBlack.grey(' ]')}`);
const input = (tag) => {
    if ((0, utils_1.getAttribute)(tag, 'type', 'text') === 'checkbox') {
        return {
            pre: null,
            value: `${grey('[')}${(0, utils_1.getAttribute)(tag, 'checked', ' ') === ''
                ? red.bold('☓')
                : red.bold(' ')}${grey(']')}`,
            post: null,
            type: 'inline',
            nodeName: tag.nodeName,
        };
    }
    if ((0, utils_1.getAttribute)(tag, 'type', 'text') === 'radio') {
        return {
            pre: null,
            value: `${grey('(')}${(0, utils_1.getAttribute)(tag, 'checked', ' ') === ''
                ? red.bold('☓')
                : red.bold(' ')}${grey(')')}`,
            post: null,
            type: 'inline',
            nodeName: tag.nodeName,
        };
    }
    if ((0, utils_1.getAttribute)(tag, 'type', 'text') === 'button') {
        return {
            pre: null,
            value: `${bgBlack.grey('[ ')}${bgBlack.bold((0, utils_1.getAttribute)(tag, 'value', ''))}${bgBlack.grey(' ]')}`,
            post: null,
            type: 'inline',
            nodeName: tag.nodeName,
        };
    }
    if ((0, utils_1.getAttribute)(tag, 'type', 'text') === 'hidden') {
        return null;
    }
    return {
        pre: null,
        value: (0, utils_1.getAttribute)(tag, 'value', ''),
        post: null,
        type: 'inline',
        nodeName: tag.nodeName,
    };
};
exports.input = input;
exports.output = (0, inline_tag_1.default)();
