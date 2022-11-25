"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = exports.caption = void 0;
const ansi_align_1 = __importDefault(require("ansi-align"));
const chalk_1 = __importDefault(require("chalk"));
const cli_table3_1 = __importDefault(require("cli-table3"));
const inline_style_parser_1 = __importDefault(require("inline-style-parser"));
const longest_line_1 = __importDefault(require("longest-line"));
const block_tag_1 = require("../tag-helpers/block-tag");
const utils_1 = require("../utils");
const concat_block_tags_1 = require("../utils/concat-block-tags");
const { bold, } = chalk_1.default;
const td = (0, block_tag_1.blockTag)();
const th = (0, block_tag_1.blockTag)((value) => bold.red(value));
exports.caption = (0, block_tag_1.blockTag)();
const captions = (tag, context) => (0, block_tag_1.blockTag)((value) => bold.blue(value))(tag, context);
const trVals = (tr) => {
    const theadTds = !tr || !tr.childNodes
        ? null
        : tr.childNodes.filter((tag) => ['td', 'th'].includes(tag.nodeName));
    const theadTdsValue = !theadTds
        ? null
        : theadTds.map((tag, context) => {
            var _a, _b;
            const det = tag.nodeName === 'td' ? td(tag, context) : th(tag, context);
            const parsedStyle = (0, inline_style_parser_1.default)((0, utils_1.getAttribute)(tag, 'style', ''));
            const hAlign = (0, utils_1.getAttribute)(tag, 'align')
                || ((_a = parsedStyle.find((element) => element.property === 'text-align')) === null || _a === void 0 ? void 0 : _a.value);
            const vAlign = (0, utils_1.getAttribute)(tag, 'valign')
                || ((_b = parsedStyle.find((element) => element.property === 'vertical-align')) === null || _b === void 0 ? void 0 : _b.value);
            const colSpan = Number.parseInt((0, utils_1.getAttribute)(tag, 'colspan', '1'), 10);
            const rowSpan = Number.parseInt((0, utils_1.getAttribute)(tag, 'rowspan', '1'), 10);
            return {
                content: det && det.value ? det.value : '',
                hAlign,
                vAlign,
                colSpan,
                rowSpan,
            };
        });
    return theadTdsValue;
};
const tbodyVals = (tbody) => {
    const theadTrs = !tbody
        ? null
        : tbody.childNodes.filter((tag) => ['tr'].includes(tag.nodeName));
    const theadTrsVals = theadTrs.map(trVals);
    return theadTrsVals;
};
const table = (tag, context) => {
    if (!tag.childNodes) {
        return null;
    }
    const captionTag = Object.assign(Object.assign({}, tag), { childNodes: tag.childNodes.filter((child) => child.nodeName === 'caption') });
    const captionsValue = captions(captionTag, context);
    const tableArray = [];
    const thead = tag.childNodes.find((child) => child.nodeName === 'thead');
    const theadTr = !thead || !thead.childNodes
        ? null
        : thead.childNodes.find((child) => child.nodeName === 'tr');
    const theadsValue = !theadTr ? null : trVals(theadTr);
    if (theadsValue && theadsValue[0]) {
        tableArray.push(theadsValue);
    }
    const trs = tag.childNodes.filter((child) => ['tbody'].includes(child.nodeName));
    trs.map(tbodyVals).map((value) => tableArray.push(...value));
    const tfoot = tag.childNodes.find((child) => child.nodeName === 'tfoot');
    const tfootTr = !tfoot || !tfoot.childNodes
        ? null
        : tfoot.childNodes.find((child) => child.nodeName === 'tr');
    const tfootdsValue = !tfootTr ? null : trVals(tfootTr);
    if (tfootdsValue && tfootdsValue[0]) {
        tableArray.push(tfootdsValue);
    }
    const tableRender = new cli_table3_1.default({});
    tableRender.push(...tableArray);
    const tableString = tableRender.toString();
    const longestLineInTable = (0, longest_line_1.default)(tableString);
    if (captionsValue && captionsValue.value) {
        captionsValue.value = `${captionsValue.value}\n${' '.repeat(longestLineInTable)}`;
        captionsValue.value = (0, ansi_align_1.default)(captionsValue.value);
    }
    return {
        marginTop: 1,
        value: (0, concat_block_tags_1.concatTwoBlockTags)(captionsValue, { value: tableString }).value,
        marginBottom: 1,
        type: 'block',
    };
};
exports.table = table;
