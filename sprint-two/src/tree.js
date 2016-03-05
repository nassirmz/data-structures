  var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};
//O(1)
treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};
//O(n)
treeMethods.contains = function(target){
  var result = false;
  //recursive function to walk through the tree
  function walkTree(tree) {
    if(tree.value === target) {
      result = true;
    }
    for(var i = 0; i < tree.children.length; i +=1) {
      walkTree(tree.children[i]);
    }
    return result;
  }
  return walkTree(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
