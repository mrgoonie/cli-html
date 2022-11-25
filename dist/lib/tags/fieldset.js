"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldset = void 0;
const boxen_1 = __importDefault(require("boxen"));
const block_tag_1 = require("../tag-helpers/block-tag");
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const fieldset = (tag, context) => {
    const summaryTag = tag.childNodes.find((tag) => tag.tagName === "legend");
    const summary = (0, inline_tag_1.default)()(summaryTag || null, context);
    return (0, block_tag_1.blockTag)((value) => `${(0, boxen_1.default)(value, {
        title: summary && summary.value ? summary.value.replace(/\n/g, " ") : null,
        dimTitle: false,
        titleColor: "yellow",
        padding: {
            bottom: 0,
            top: 0,
            left: 1,
            right: 1,
        },
        borderColor: "gray",
        borderStyle: "single",
    })}`, { marginTop: 1, marginBottom: 1 })(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 8 }));
};
exports.fieldset = fieldset;
