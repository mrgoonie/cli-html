import chalk from 'chalk';
import compose from 'compose-function';

import { blockTag } from '../tag-helpers/block-tag';
import { indentify } from '../utils';

export const blockquote = (tag, context) => blockTag(
  compose(
    (value) => indentify(chalk.black('│ '))(value),
    (value) => (value),
  ),
  { marginTop: 1, marginBottom: 1 },
)(tag, { ...context, lineWidth: context.lineWidth - 2 });
