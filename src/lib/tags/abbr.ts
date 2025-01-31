import chalk from 'chalk';

import inlineTag from '../tag-helpers/inline-tag';
import { getAttribute } from '../utils';

const {
  underline, grey, cyan, italic,
} = chalk;

export const abbr = inlineTag((value, tag) => {
  const title = getAttribute(tag, 'title', null);

  let abbrValue = underline(value);

  abbrValue = title
    ? `${abbrValue} ${grey('(')}${cyan(title)}${grey(')')}`
    : abbrValue;

  return abbrValue;
});

export const dfn = inlineTag((value, tag) => {
  const title = getAttribute(tag, 'title', null);

  let abbrValue = italic.underline(value);

  abbrValue = title
    ? `${abbrValue} ${grey('(')}${cyan(title)}${grey(')')}`
    : abbrValue;

  return abbrValue;
});

export const acronym = abbr;
