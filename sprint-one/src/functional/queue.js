var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var backIndex = 0;
  var frontIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[backIndex] = value;
    backIndex++;
  };

  someInstance.dequeue = function(){
    var temp = storage[frontIndex];
    delete storage[frontIndex];
    frontIndex++;
    return temp;
  };

  someInstance.size = function(){
    if (backIndex - frontIndex >= 0) {
      return backIndex - frontIndex;
    }  else {
      return 0;
    }
  };

  return someInstance;
};
