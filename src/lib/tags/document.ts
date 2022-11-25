import { blockTag } from "../tag-helpers/block-tag";

const document = blockTag();

/**
 * @param {...any} arguments_
 */
export function html(...arguments_) {
	// const args = [...arguments_] as const;
	return document(arguments_[0], arguments_[1]);
}

/**
 * @param {...any} arguments_
 */
export function body(...arguments_) {
	return document(arguments_[0], arguments_[1]);
}
