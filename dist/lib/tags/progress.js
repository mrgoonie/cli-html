"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.progress = void 0;
const chalk_1 = __importDefault(require("chalk"));
const inline_tag_1 = __importDefault(require("../tag-helpers/inline-tag"));
const utils_1 = require("../utils");
const { bgBlack, bgWhite } = chalk_1.default;
exports.progress = (0, inline_tag_1.default)((value, tag) => {
    const value2 = (0, utils_1.getAttribute)(tag, "value", "0");
    const max = (0, utils_1.getAttribute)(tag, "max", "0");
    const pads = Math.round((Number.parseFloat(value2) / (Number.parseFloat(max) - 0.0001)) * 20);
    const progressstart = "".padStart(pads, "█");
    const progressEnd = "".padStart(20 - pads, "█");
    return ` ${bgWhite.green(progressstart)}${bgBlack.grey(progressEnd)}`;
});
