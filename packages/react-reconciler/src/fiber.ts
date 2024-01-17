import { Props, Key, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
	tag: WorkTag;
	type: any;
	key: Key;
	pendingProps: Props;
	stateNode: any;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;

	ref: Ref;
	memoizedProps: Props | null;

	alternate: FiberNode | null;
	flags: Flags;
	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		// HostComponent div
		this.stateNode = null;
		// FunctionComponent () => {}
		this.type = null;

		// 表示节点关系
		// 指向父fiberNode
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps; // 刚工作
		this.memoizedProps = null; // 工作完

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
