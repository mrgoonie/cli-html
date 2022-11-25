"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.figcaption = exports.hgroup = exports.picture = exports.form = exports.aside = exports.nav = exports.main = exports.section = exports.footer = exports.article = exports.header = exports.div = exports.p = exports.blink = exports.label = exports.span = void 0;
const chalk_1 = __importDefault(require("chalk"));
const block_tag_1 = require("../tag-helpers/block-tag");
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const block = (0, block_tag_1.blockTag)();
const inline = (0, inline_tag_1.default)();
const blockWithNewlines = (0, block_tag_1.blockTag)((value) => value, { marginTop: 1, marginBottom: 1 });
exports.span = inline;
exports.label = inline;
exports.blink = inline;
exports.p = blockWithNewlines;
exports.div = block;
exports.header = block;
exports.article = block;
exports.footer = block;
exports.section = block;
exports.main = block;
exports.nav = block;
exports.aside = block;
exports.form = block;
exports.picture = block;
exports.hgroup = block;
exports.figcaption = (0, block_tag_1.blockTag)((value) => chalk_1.default.bgGreen.bold(` § ${value} `), {
    marginTop: 1,
    marginBottom: 1,
});
