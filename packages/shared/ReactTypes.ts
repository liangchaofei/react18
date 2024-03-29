export type Type = any;
export type Props = any;
export type Key = any;
export type Ref = any;
export type ElementType = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: Type;
	props: Props;
	key: Key | null;
	ref: Ref | null;
}

export type Action<State> = State | ((prevState: State) => State);
