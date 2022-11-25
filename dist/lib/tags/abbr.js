"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acronym = exports.dfn = exports.abbr = void 0;
const chalk_1 = __importDefault(require("chalk"));
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const { underline, grey, cyan, italic, } = chalk_1.default;
exports.abbr = (0, inline_tag_1.default)((value, tag) => {
    const title = (0, utils_1.getAttribute)(tag, 'title', null);
    let abbrValue = underline(value);
    abbrValue = title
        ? `${abbrValue} ${grey('(')}${cyan(title)}${grey(')')}`
        : abbrValue;
    return abbrValue;
});
exports.dfn = (0, inline_tag_1.default)((value, tag) => {
    const title = (0, utils_1.getAttribute)(tag, 'title', null);
    let abbrValue = italic.underline(value);
    abbrValue = title
        ? `${abbrValue} ${grey('(')}${cyan(title)}${grey(')')}`
        : abbrValue;
    return abbrValue;
});
exports.acronym = exports.abbr;
