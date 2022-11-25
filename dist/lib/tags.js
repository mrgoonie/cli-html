"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_tag_1 = require("./tag-helpers/block-tag");
const text_node_1 = require("./tag-helpers/text-node");
const a_1 = require("./tags/a");
const abbr_1 = require("./tags/abbr");
const address_1 = require("./tags/address");
const base_tags_1 = require("./tags/base-tags");
const blockquote_1 = require("./tags/blockquote");
const br_1 = require("./tags/br");
const center_1 = require("./tags/center");
const code_1 = require("./tags/code");
const definitions_1 = require("./tags/definitions");
const details_1 = require("./tags/details");
const document_1 = require("./tags/document");
const fieldset_1 = require("./tags/fieldset");
const figure_1 = require("./tags/figure");
const font_1 = require("./tags/font");
const headers_1 = require("./tags/headers");
const hr_1 = require("./tags/hr");
const img_1 = require("./tags/img");
const inputs_1 = require("./tags/inputs");
const list_1 = require("./tags/list");
const progress_1 = require("./tags/progress");
const table_1 = require("./tags/table");
const text_styles_1 = require("./tags/text-styles");
const void_1 = require("./tags/void");
const __text = text_node_1.textNode;
//
exports.default = {
    "#text": __text,
    a: a_1.a,
    abbr: abbr_1.abbr,
    acronym: abbr_1.acronym,
    address: address_1.address,
    applet: void_1.applet,
    area: void_1.area,
    article: base_tags_1.article,
    aside: base_tags_1.aside,
    audio: void_1.audio,
    b: text_styles_1.b,
    base: void_1.base,
    bgsound: void_1.bgsound,
    big: text_styles_1.big,
    blockquote: blockquote_1.blockquote,
    blockTag: block_tag_1.blockTag,
    body: document_1.body,
    bold: text_styles_1.bold,
    br: br_1.br,
    button: inputs_1.button,
    caption: table_1.caption,
    center: center_1.center,
    cite: text_styles_1.cite,
    code: code_1.code,
    data: text_styles_1.data,
    dd: definitions_1.dd,
    del: text_styles_1.del,
    details: details_1.details,
    dfn: abbr_1.dfn,
    div: base_tags_1.div,
    dl: definitions_1.dl,
    dt: definitions_1.dt,
    em: text_styles_1.em,
    embed: void_1.embed,
    fieldset: fieldset_1.fieldset,
    figcaption: base_tags_1.figcaption,
    figure: figure_1.figure,
    font: font_1.font,
    footer: base_tags_1.footer,
    form: base_tags_1.form,
    h1: headers_1.h1,
    h2: headers_1.h2,
    h3: headers_1.h3,
    h4: headers_1.h4,
    h5: headers_1.h5,
    h6: headers_1.h6,
    head: void_1.head,
    header: base_tags_1.header,
    hgroup: base_tags_1.hgroup,
    hr: hr_1.hr,
    html: document_1.html,
    i: text_styles_1.i,
    img: img_1.img,
    input: inputs_1.input,
    ins: text_styles_1.ins,
    italic: text_styles_1.italic,
    kbd: text_styles_1.kbd,
    keygen: void_1.keygen,
    label: base_tags_1.label,
    li: list_1.li,
    link: void_1.link,
    main: base_tags_1.main,
    map: void_1.map,
    mark: text_styles_1.mark,
    meta: void_1.meta,
    nav: base_tags_1.nav,
    noscript: void_1.noscript,
    ol: list_1.ol,
    optgroup: void_1.optgroup,
    option: void_1.option,
    output: inputs_1.output,
    p: base_tags_1.p,
    param: void_1.param,
    picture: base_tags_1.picture,
    pre: code_1.pre,
    progress: progress_1.progress,
    q: text_styles_1.q,
    s: text_styles_1.s,
    samp: text_styles_1.samp,
    script: void_1.script,
    section: base_tags_1.section,
    small: text_styles_1.small,
    select: void_1.select,
    source: void_1.source,
    span: base_tags_1.span,
    blink: base_tags_1.blink,
    strike: text_styles_1.strike,
    strikethrough: text_styles_1.strikethrough,
    strong: text_styles_1.strong,
    style: void_1.style,
    sub: text_styles_1.sub,
    summary: void_1.summary,
    sup: text_styles_1.sup,
    table: table_1.table,
    template: void_1.template,
    time: text_styles_1.time,
    track: void_1.track,
    tt: text_styles_1.tt,
    u: text_styles_1.u,
    ul: list_1.ul,
    underline: text_styles_1.underline,
    var: text_styles_1.variableTag,
    video: void_1.video,
    wbr: text_styles_1.wbr,
    basefont: void_1.basefont,
};
