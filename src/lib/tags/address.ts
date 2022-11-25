import chalk from 'chalk';

import { blockTag } from '../tag-helpers/block-tag';

const { italic } = chalk;

export const address = blockTag((value) => italic(value));
