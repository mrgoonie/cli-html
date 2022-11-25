"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineToBlockTag = void 0;
const inlineToBlockTag = (value) => {
    if (!value) {
        return null;
    }
    return Object.assign(Object.assign({}, value), { marginTop: 0, marginBottom: 0, type: 'block', nodeName: '#blockTag' });
};
exports.inlineToBlockTag = inlineToBlockTag;
