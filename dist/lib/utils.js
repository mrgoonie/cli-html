"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.indentify = exports.filterAst2 = exports.filterAst = void 0;
const filterAst = (ast) => {
    const removeTheseKeys = new Set(["mode", "namespaceURI", "parentNode", "tagName"]);
    return Object.entries(ast).reduce((accumulator, [key, value]) => {
        if (removeTheseKeys.has(key)) {
            return accumulator;
        }
        if (Array.isArray(value)) {
            return Object.assign(Object.assign({}, accumulator), { [key]: value.map(exports.filterAst) });
        }
        return Object.assign(Object.assign({}, accumulator), { [key]: value });
    }, {});
};
exports.filterAst = filterAst;
const filterAst2 = (ast) => {
    const removeTheseKeys = new Set(["mode", "namespaceURI", "parentNode", "tagName", "rawAttrs", "nodeType", "id", "classList"]);
    return Object.entries(ast).reduce((accumulator, [key, value]) => {
        if (removeTheseKeys.has(key)) {
            return accumulator;
        }
        if (Array.isArray(value)) {
            return Object.assign(Object.assign({}, accumulator), { [key]: value.map(exports.filterAst2) });
        }
        return Object.assign(Object.assign({}, accumulator), { [key]: value });
    }, {});
};
exports.filterAst2 = filterAst2;
/**
 *
 * @param {*} indent
 * @param skipFirst
 */
const indentify = (indent, skipFirst) => (text) => {
    if (!text)
        return text;
    return (skipFirst ? "" : indent) + text.split("\n").join(`\n${indent}`);
};
exports.indentify = indentify;
const getAttribute = (tag, attributeName, defaultValue) => {
    if (!tag || !tag.attrs || !tag.attrs[0]) {
        return defaultValue;
    }
    const attribute = tag.attrs.find((attribute) => attribute.name === attributeName);
    if (!attribute) {
        return defaultValue;
    }
    return attribute.value;
};
exports.getAttribute = getAttribute;
