"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.img = void 0;
const chalk_1 = __importDefault(require("chalk"));
const utils_1 = require("../utils");
const { grey, cyan, } = chalk_1.default;
const img = (tag) => {
    const text = (0, utils_1.getAttribute)(tag, 'alt', null)
        || (0, utils_1.getAttribute)(tag, 'title', null)
        || 'Image';
    return {
        pre: null,
        value: cyan('!') + grey('[') + cyan(text) + grey(']'),
        post: null,
        type: 'inline',
    };
};
exports.img = img;
