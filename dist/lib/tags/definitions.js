"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dl = exports.dd = exports.dt = void 0;
const chalk_1 = __importDefault(require("chalk"));
const compose_function_1 = __importDefault(require("compose-function"));
const block_tag_js_1 = require("../tag-helpers/block-tag.js");
const utils_js_1 = require("../utils.js");
const dt = (tag, context) => (0, block_tag_js_1.blockTag)((0, compose_function_1.default)((value) => chalk_1.default.bold.blue(value)), { marginTop: 1, marginBottom: 1 })(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 1 }));
exports.dt = dt;
const dd = (tag, context) => (0, block_tag_js_1.blockTag)((0, utils_js_1.indentify)('  '), { marginTop: 1, marginBottom: 1 })(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 3 }));
exports.dd = dd;
exports.dl = (0, block_tag_js_1.blockTag)();
