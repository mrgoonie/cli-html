"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.font = void 0;
const chalk_1 = require("chalk");
const color_namer_1 = __importDefault(require("color-namer"));
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const customChalk = new chalk_1.Chalk({ level: 1 });
exports.font = (0, inline_tag_1.default)((value, tag, context) => {
    const color = (0, utils_1.getAttribute)(tag, 'color', 'white');
    const names = (0, color_namer_1.default)(color, {
        pick: ['basic'],
    });
    if (context.fontAttrs) {
        return customChalk.hex(names.basic[0].hex)(value);
    }
    return (value);
});
