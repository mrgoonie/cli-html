import chalk from "chalk";

import inlineTag from "../tag-helpers/inline-tag";
import { getAttribute } from "../utils";

const { bgBlack, bgWhite } = chalk;

export const progress = inlineTag((value, tag) => {
	const value2 = getAttribute(tag, "value", "0");
	const max = getAttribute(tag, "max", "0");

	const pads = Math.round((Number.parseFloat(value2) / (Number.parseFloat(max) - 0.0001)) * 20);

	const progressstart = "".padStart(pads, "█");
	const progressEnd = "".padStart(20 - pads, "█");

	return ` ${bgWhite.green(progressstart)}${bgBlack.grey(progressEnd)}`;
});
