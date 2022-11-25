"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_ansi_1 = __importDefault(require("wrap-ansi"));
const wrapLineWidth = (text, context) => (0, wrap_ansi_1.default)(text, context.lineWidth, { trim: !context.pre });
exports.default = wrapLineWidth;
