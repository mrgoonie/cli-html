"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockquote = void 0;
const chalk_1 = __importDefault(require("chalk"));
const compose_function_1 = __importDefault(require("compose-function"));
const block_tag_1 = require("../tag-helpers/block-tag");
const utils_1 = require("../utils");
const blockquote = (tag, context) => (0, block_tag_1.blockTag)((0, compose_function_1.default)((value) => (0, utils_1.indentify)(chalk_1.default.black('│ '))(value), (value) => (value)), { marginTop: 1, marginBottom: 1 })(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 2 }));
exports.blockquote = blockquote;
