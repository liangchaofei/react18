import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';
// ReactElement
const ReactElement = (
	type: Type,
	props: Props,
	key: Key,
	ref: Ref
): ReactElementType => {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		props,
		key,
		ref
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybyChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	const maybyChildrenLength = maybyChildren.length;
	if (maybyChildrenLength) {
		// [child]
		if (maybyChildrenLength === 1) {
			props.children = maybyChildren[0];
		} else {
			// children
			props.children = maybyChildren;
		}
	}

	return ReactElement(type, props, key, ref);
};

export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}

		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, props, key, ref);
};
