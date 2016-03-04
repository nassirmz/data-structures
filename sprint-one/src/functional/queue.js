var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Two indexes, one to add to the back, one to take from front.
  var backIndex = 0;
  var frontIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    //add value to back of storage
    storage[backIndex] = value;
    backIndex++;
  };

  someInstance.dequeue = function(){
    //remove first elements from storage and return it
    var temp = storage[frontIndex];
    delete storage[frontIndex];
    frontIndex++;
    return temp;
  };

  someInstance.size = function(){
    //compare index sizes to get current number of elements in storage
    if (backIndex - frontIndex >= 0) {
      return backIndex - frontIndex;
    }  else {
      return 0;
    }
  };

  return someInstance;
};
