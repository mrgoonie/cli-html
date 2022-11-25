"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
const ansi_escapes_1 = __importDefault(require("ansi-escapes"));
const chalk_1 = __importDefault(require("chalk"));
const supports_hyperlinks_1 = require("supports-hyperlinks");
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const find_parrent_tag_1 = __importDefault(require("../utils/find-parrent-tag"));
exports.a = (0, inline_tag_1.default)((value, tag) => {
    const rawHref = (0, utils_1.getAttribute)(tag, 'href', null);
    const inHeader = (0, find_parrent_tag_1.default)(tag, ['h1', 'h2', 'h3']);
    const cleeanUrls = [
        // eslint-disable-next-line no-script-url
        'javascript:',
        'vbscript:',
        'vbscript:',
        'data:',
        'mailto:',
        'tel:',
        'sms:',
        'callto:',
        'cid:',
        'xmpp:',
        'skype:',
        'sip:',
        'sips:',
        'mms:',
        'rtmp:',
        'rtmpt:',
        'rtmps:',
        'rtmpts:',
        'magnet:',
        '#',
    ];
    const href = !rawHref
        || (cleeanUrls.some((url) => rawHref.startsWith(url)))
        ? null
        : rawHref;
    const title = (0, utils_1.getAttribute)(tag, 'title', null);
    let linkText = (inHeader ? chalk_1.default.whiteBright : chalk_1.default.blue)(value);
    linkText = title ? `${linkText} - ${title}` : linkText;
    linkText = (inHeader ? chalk_1.default.whiteBright : chalk_1.default.blue)(linkText);
    const linkValue = supports_hyperlinks_1.stdout && href
        ? ansi_escapes_1.default.link(linkText, href)
        : linkText;
    return linkValue;
});
