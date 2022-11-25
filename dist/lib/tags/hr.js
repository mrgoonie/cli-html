"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hr = void 0;
const chalk_1 = __importDefault(require("chalk"));
const { grey, } = chalk_1.default;
const hrLine = (inputHrString, length) => {
    const lengthHr = length || process.stdout.columns;
    return Array.from({ length: lengthHr }).join(inputHrString);
};
const hr = (tag, context) => ({
    marginTop: 1,
    value: grey(hrLine('─', context.lineWidth)),
    marginBottom: 1,
    type: 'block',
});
exports.hr = hr;
