"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetaTags = void 0;
const getMetaTags = (document) => {
    const metaTags = [];
    if (document.nodeName === 'meta') {
        metaTags.push(document);
    }
    if (document.childNodes) {
        document.childNodes.map((childNode) => {
            metaTags.push(...(0, exports.getMetaTags)(childNode));
        });
    }
    return metaTags;
};
exports.getMetaTags = getMetaTags;
