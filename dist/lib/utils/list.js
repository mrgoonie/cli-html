"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListItemNumber = exports.getListSymbol = exports.getListType = void 0;
const number_to_alphabet_1 = require("number-to-alphabet");
const romanize_1 = __importDefault(require("romanize"));
const getListType = (tagType, contextType) => {
    const types = ['disc', 'square', 'circle'];
    if (tagType) {
        return tagType;
    }
    if (!contextType || !types.includes(contextType)) {
        return 'disc';
    }
    while (types[0] !== contextType) {
        const symbol = types.shift();
        types.push(symbol);
    }
    return types[1];
};
exports.getListType = getListType;
const getListSymbol = (symbolType) => {
    const symbolsChar = {
        disc: '•',
        square: '-',
        circle: '‣',
    };
    if (!symbolType) {
        return symbolsChar.disc;
    }
    return symbolsChar[symbolType] || symbolsChar.disc;
};
exports.getListSymbol = getListSymbol;
const getListItemNumber = (number = 1, type = '1') => {
    const defaultAlphabet = new number_to_alphabet_1.NumberToAlphabet();
    const types = {
        1: `${number}`,
        A: defaultAlphabet.numberToString(number).toUpperCase(),
        a: defaultAlphabet.numberToString(number),
        I: (0, romanize_1.default)(number).toUpperCase(),
        i: (0, romanize_1.default)(number),
    };
    return types[type];
};
exports.getListItemNumber = getListItemNumber;
