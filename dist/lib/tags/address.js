"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.address = void 0;
const chalk_1 = __importDefault(require("chalk"));
const block_tag_1 = require("../tag-helpers/block-tag");
const { italic } = chalk_1.default;
exports.address = (0, block_tag_1.blockTag)((value) => italic(value));
