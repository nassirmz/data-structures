var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};
//O(n)
setPrototype.add = function(item){
  if (!this.contains(item)) {
    this[item] = item;
  }
};
//O(n)
setPrototype.contains = function(item){
  //check all objects
  for (var key in this) {
    if (this[key] === item) {
      return true;
    }
  }
  return false;

};
//O(1)
setPrototype.remove = function(item){
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
