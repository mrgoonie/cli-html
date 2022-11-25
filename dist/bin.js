#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concat_stream_1 = __importDefault(require("concat-stream"));
const node_fs_1 = require("node:fs");
const index_1 = __importDefault(require("./index"));
const input = process.argv.length > 2 ? (0, node_fs_1.createReadStream)(process.argv[2]) : process.stdin;
input.pipe((0, concat_stream_1.default)((html) => {
    process.stdout.write((0, index_1.default)(html.toString()));
}));
