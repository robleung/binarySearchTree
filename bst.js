const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function compareFn(a, b) {
  if (a <= b) {
    return -1;
  } else {
    return 0;
  }
}
const uniqueAndSorted = (arr) => [...new Set(arr)].sort(compareFn);

const Node = (data, left = null, right = null) => {
  return { data, left, right };
};

function buildTree(arr, start, end) {
  /* Base Case */
  if (start > end) {
    return null;
  }
  /* Get the middle element and make it root */
  var mid = parseInt((start + end) / 2);
  var node = Node(arr[mid]);
  /* Recursively construct the left subtree and make it 
   left child of root */
  node.left = buildTree(arr, start, mid - 1);
  /* Recursively construct the right subtree and make it 
   right child of root */
  node.right = buildTree(arr, mid + 1, end);
  return node;
}

const Tree = (arr) => {
  const sortedArr = uniqueAndSorted(arr);
  // console.log(sortedArr);
  let root = buildTree(sortedArr, 0, sortedArr.length - 1);
  // console.log(root);
  // console.log(root.left.left);
  return { root };
};

testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
prettyPrint(Tree(testArr).root);
