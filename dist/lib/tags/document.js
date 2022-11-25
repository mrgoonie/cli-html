"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.body = exports.html = void 0;
const block_tag_1 = require("../tag-helpers/block-tag");
const document = (0, block_tag_1.blockTag)();
/**
 * @param {...any} arguments_
 */
function html(...arguments_) {
    // const args = [...arguments_] as const;
    return document(arguments_[0], arguments_[1]);
}
exports.html = html;
/**
 * @param {...any} arguments_
 */
function body(...arguments_) {
    return document(arguments_[0], arguments_[1]);
}
exports.body = body;
