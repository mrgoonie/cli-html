import { parse } from 'parse5';

import { indentify } from './lib/utils';
import { getGlobalConfig } from './lib/utils/get-clobal-config';
import { renderTag } from './lib/utils/render-tag';

const htmlToCli = (rawHTML) => {
  const doc = parse(rawHTML);

  // console.dir(
  //   filterAst(document),
  //   { depth: null },
  // );

  const clobalConfig = getGlobalConfig(doc);

  return `\n${indentify(' ')(
    (
      renderTag(doc, clobalConfig) || { value: '' }
    ).value,
  )}\n\n`;
};

export default htmlToCli;
