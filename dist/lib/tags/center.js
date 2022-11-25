"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.center = void 0;
const ansi_align_1 = __importDefault(require("ansi-align"));
const block_tag_1 = require("../tag-helpers/block-tag");
exports.center = (0, block_tag_1.blockTag)((value) => (0, ansi_align_1.default)(value, { align: 'center' }));
