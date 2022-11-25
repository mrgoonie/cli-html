"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.li = exports.ul = exports.ol = void 0;
const chalk_1 = __importDefault(require("chalk"));
const block_tag_1 = require("../tag-helpers/block-tag");
const utils_1 = require("../utils");
const list_1 = require("../utils/list");
const { blue, red } = chalk_1.default;
const ol = (tag, context) => {
    const newContext = Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 1, orderedList: true, compact: true, listType: (0, utils_1.getAttribute)(tag, "type") });
    return (0, block_tag_1.blockTag)((value) => (0, utils_1.indentify)(context.compact ? "" : " ")(value), {
        marginTop: context.compact ? 0 : 1,
        marginBottom: context.compact ? 0 : 1,
    })(tag, newContext);
};
exports.ol = ol;
const ul = (tag, context) => {
    const newContext = Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 1, orderedList: false, compact: true, listType: (0, list_1.getListType)((0, utils_1.getAttribute)(tag, "type", null), context.listType) });
    return (0, block_tag_1.blockTag)((value) => (0, utils_1.indentify)(context.compact ? "" : " ")(value), {
        marginTop: context.compact ? 0 : 1,
        marginBottom: context.compact ? 0 : 1,
    })(tag, newContext);
};
exports.ul = ul;
const li = (tag, context) => {
    if (context.orderedList) {
        return (0, block_tag_1.blockTag)((value) => `${blue(`${(0, list_1.getListItemNumber)(context.liItemNumber, context.listType)}.`)} ${(0, utils_1.indentify)("   ", true)(value)}`)(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 3 }));
    }
    return (0, block_tag_1.blockTag)((value) => `${(0, utils_1.indentify)("  ")(value)}`.replace(/ {2}/, `${red((0, list_1.getListSymbol)(context.listType))} `))(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 2 }));
};
exports.li = li;
