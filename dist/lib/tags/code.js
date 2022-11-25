"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pre = exports.code = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cli_highlight_1 = require("cli-highlight");
const wrap_ansi_1 = __importDefault(require("wrap-ansi"));
const block_tag_1 = require("../tag-helpers/block-tag");
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const code = (tag, context) => (0, inline_tag_1.default)((value, tag) => {
    const classAttributes = (0, utils_1.getAttribute)(tag, 'class', '').split(' ');
    const content = value[value.length - 1] === '\n' ? value.slice(0, -1) : value;
    let langName = null;
    // eslint-disable-next-line unicorn/no-array-for-each
    classAttributes.forEach((classAttribute) => {
        if (classAttribute.startsWith('language-')) {
            langName = classAttribute.slice(9);
        }
        if (classAttribute.startsWith('lang-')) {
            langName = classAttribute.slice(5);
        }
    });
    const codeValue = langName
        ? ((0, cli_highlight_1.highlight)(content, {
            language: langName,
            theme: {
                comment: chalk_1.default.blackBright,
            },
        }))
        : chalk_1.default.yellow(content);
    if (tag.parentNode.nodeName !== 'pre') {
        return chalk_1.default.bgBlack(codeValue);
    }
    const codeValueLines = codeValue.split('\n');
    const codeLinesLength = `${codeValueLines.length}`.length;
    const pad = `${Array.from({ length: codeLinesLength }).join(' ')}  `;
    const codeContent = codeValueLines.map((codeLine, index) => `${chalk_1.default.black.bold(`${index + 1}`.padStart(codeLinesLength, ' '))} ${(0, utils_1.indentify)(pad, true)((0, wrap_ansi_1.default)(codeLine, context.lineWidth - pad.length - 1, { trim: false }))}`);
    return (0, utils_1.indentify)(' ')(codeContent.join('\n'));
})(tag, context);
exports.code = code;
const pre = (tag, context) => (0, block_tag_1.blockTag)((value, tag) => value, { marginTop: 2, marginBottom: 2 })(tag, Object.assign(Object.assign({}, context), { pre: true, lineWidth: context.lineWidth - 10 }));
exports.pre = pre;
