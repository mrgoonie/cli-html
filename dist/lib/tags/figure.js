"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.figure = void 0;
const ansi_align_1 = __importDefault(require("ansi-align"));
const boxen_1 = __importDefault(require("boxen"));
const block_tag_1 = require("../tag-helpers/block-tag");
const figure = (tag, context) => (0, block_tag_1.blockTag)((value, tag) => {
    const valueInBox = (0, boxen_1.default)((0, ansi_align_1.default)(value, { align: 'center' }), {
        padding: {
            top: 0,
            bottom: 0,
            left: 1,
            right: 1,
        },
        borderColor: 'gray',
        dimBorder: false,
        borderStyle: 'round',
        titleColor: 'red',
        dimTitle: true,
    });
    return valueInBox;
}, { marginTop: 1, marginBottom: 1 })(tag, Object.assign(Object.assign({}, context), { lineWidth: context.lineWidth - 4 }));
exports.figure = figure;
