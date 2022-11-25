"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTag = void 0;
const tags_1 = __importDefault(require("../tags"));
const renderTag = (node, context, defaultTag = tags_1.default.div) => {
    const tagFunction = tags_1.default[node.nodeName || '#text'] || defaultTag;
    const nodeTag = tagFunction(node, context);
    return nodeTag;
};
exports.renderTag = renderTag;
