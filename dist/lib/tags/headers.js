"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = void 0;
const chalk_1 = __importDefault(require("chalk"));
const block_tag_1 = require("../tag-helpers/block-tag");
exports.h1 = (0, block_tag_1.blockTag)((value) => chalk_1.default.bgBlue.bold(` § ${value} `), {
    marginTop: 2,
    marginBottom: 1,
});
exports.h2 = (0, block_tag_1.blockTag)((value) => chalk_1.default.bgBlueBright.bold(` § ${value} `), {
    marginTop: 1,
    marginBottom: 1,
});
exports.h3 = (0, block_tag_1.blockTag)((value) => chalk_1.default.bgCyan.bold(` § ${value} `), {
    marginTop: 1,
    marginBottom: 1,
});
exports.h4 = (0, block_tag_1.blockTag)((value) => ` ${chalk_1.default.blue.bold(`§ ${value}`)}`, {
    marginTop: 1,
    marginBottom: 1,
});
exports.h5 = (0, block_tag_1.blockTag)((value) => ` ${chalk_1.default.blueBright(`§ ${value}`)}`, {
    marginTop: 1,
    marginBottom: 1,
});
exports.h6 = (0, block_tag_1.blockTag)((value) => ` ${chalk_1.default.cyan(`§ ${value}`)}`, {
    marginTop: 1,
    marginBottom: 1,
});
