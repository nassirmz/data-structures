var BinarySearchTree = function(value){
  var root = Object.create(binarySearchTreeMethods);
  root.value = value;
  root.left = null;
  root.right = null;
  return root;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
var binarySearchTreeMethods = {
  //O(log n)
  insert: function(value) {
  //create node object for each tree
    var node = {
      value: value,
      left: null,
      right: null
    };
    //start with root
    var current = this;
    while(current) {
      //go down to left branch
      if(value < current.value) {
        if(current.left == null) {
          current.left = node;
          //break out of set
          break;
        } else {
          current = current.left;
        }
        //go down to right branch
      } else if(value > current.value) {
        if(current.right == null) {
          current.right = node;
          //break out of set
          break;
        } else {
          current = current.right;
        }
        //in case value is the same
      } else {
        break;
      }
    }
  },
  //O(log n)
  contains: function(value) {
    //start with root
    var current = this;
    while(current) {
      //check value
      if(current.value === value) {
        return true;
        //check left or right
      } else {
        if(value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    return false;
  },
  depthFirstLog: function(cb) {
    //O(n)
    //inner function to recursively call
    var innerFunction = function(node, callback) {
      //base case
      if (node === null) {
        return false;
      } else {
        //run callback on value
        callback(node.value);
        //recursively call both sides of node
        innerFunction(node.left, callback);
        innerFunction(node.right, callback);
      }
    };
    //start with root
    innerFunction(this, cb);
  }
};


