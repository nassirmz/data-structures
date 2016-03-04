  var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
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
