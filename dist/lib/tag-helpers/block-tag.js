"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockTag = void 0;
const utils_1 = require("../utils");
const concat_block_tags_1 = require("../utils/concat-block-tags");
const concat_inline_tags_1 = require("../utils/concat-inline-tags");
const inline_to_block_tag_1 = require("../utils/inline-to-block-tag");
const render_tag_1 = require("../utils/render-tag");
const wrap_line_width_1 = __importDefault(require("../wrap-line-width"));
/**
 * @param wrapper - {Function}.
 * @param localContext - {object}.
 * @returns {Function}
 */
function blockTag(wrapper, localContext) {
    return (tag, context) => {
        const wrapFunction = wrapper || ((argument) => argument);
        if (!tag || !tag.childNodes) {
            return null;
        }
        let liItemNumber = Number.parseInt((0, utils_1.getAttribute)(tag, 'start', '1'), 10);
        const value = tag.childNodes.reduce((accumulator, node) => {
            const nodeTag = (0, render_tag_1.renderTag)(node, Object.assign(Object.assign({}, context), { liItemNumber }));
            if (!nodeTag) {
                return accumulator;
            }
            if (nodeTag.nodeName === 'li') {
                liItemNumber += 1;
            }
            if (nodeTag.type === 'inline') {
                return {
                    block: accumulator.block,
                    inline: (0, concat_inline_tags_1.concatTwoInlineTags)(accumulator.inline, nodeTag),
                };
            }
            if (accumulator.inline && accumulator.inline.value != undefined) {
                accumulator.inline.value = (0, wrap_line_width_1.default)(accumulator.inline.value, context);
            }
            accumulator.block = (0, concat_block_tags_1.concatTwoBlockTags)(accumulator.block, (0, inline_to_block_tag_1.inlineToBlockTag)(accumulator.inline));
            accumulator.block = (0, concat_block_tags_1.concatTwoBlockTags)(accumulator.block, nodeTag);
            return {
                block: accumulator.block,
                inline: null,
            };
        }, {
            block: null,
            inline: null,
        });
        if (value.inline != undefined && value.inline.value != undefined) {
            value.inline.value = (0, wrap_line_width_1.default)(value.inline.value, context);
        }
        value.block = (0, concat_block_tags_1.concatTwoBlockTags)(value.block, (0, inline_to_block_tag_1.inlineToBlockTag)(value.inline));
        if (!value.block || !value.block.value) {
            return null;
        }
        let topBlock = (localContext && localContext.marginTop) || 0;
        topBlock = !context || !context.pre ? topBlock + 1 : topBlock;
        let bottomBlock = (localContext && localContext.marginBottom) || 0;
        bottomBlock = !context || !context.pre ? bottomBlock + 1 : bottomBlock;
        return {
            marginTop: value.block.marginTop && value.block.marginTop > topBlock
                ? value.block.marginTop
                : topBlock,
            value: wrapFunction(value.block.value, tag),
            marginBottom: value.block.marginBottom && value.block.marginBottom > bottomBlock
                ? value.block.marginBottom
                : bottomBlock,
            type: 'block',
            nodeName: tag.nodeName,
        };
    };
}
exports.blockTag = blockTag;
