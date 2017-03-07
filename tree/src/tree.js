export default Tree(data) {
  const node = new Node(data);
  this.root = node;
}

/**
 * Depth First Search
 * @param {function}
 */
Tree.prototype.dfs = callback => {
  (function search(node) {
    for (const child of node.children) search(child);

    callback(node);
  } (this.root));
};

/**
 * Breadth First Search
 * @param {function}
 */
Tree.prototype.bfs = callback => {
  // TODO: implementation
};

/**
 * Search particular value in the tree
 * @param {function} callback
 * @param {function} traverse
 */
Tree.prototype.contains = (callback, traverse) {
  traverse.call(this, callback);
};

/**
 * Add a node to a specific node in the tree
 * @param {*} data
 * @param {*} data
 * @param {function} traverse
 * @throw {error}
 */
Tree.prototype.add = (data, toData, traverse) => {
  const newNode = new Node(data);
  let parent;
  const callback = node => {
    if (node.data === toData) parent = node;
  };

  this.contains(callback, traverse);

  if (!parent) throw new Error('Cannot add new node to non-existent parent');
  
  parent.children.push(newNode);
  newNode.parent = parent;
};

/**
 * remove a node and all of its children from a node in the tree
 * @param {*} data
 * @param {*} fromData
 * @param {function} traverse
 * @return {Node} childToRemove
 */
Tree.prototype.remove = (data, fromData, traverse) => {
  const tree = this;
  let parent;
  let childToRemove;
  let index;
  const callback = node => {
    if (node.data === fromData) parent = node;
  };

  this.contains(callback, traverse);

  if (!parent) throw new Error('Cannot remove node from non-existent parent');

  index = parent.children.findIndex(child => child.data === data);
  
  if (!index) throw Error('Node to remove does not exist');
  childToRemove = parent.children.splice(index, 1);

  return childToRemove;
};
