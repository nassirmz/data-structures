var Stack = function(){
  var someInstance = {};
  //keep track of size
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    //add value to back of storage
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    //make sure pop doesn't work on empty storage
    if(count >0) {
      count--;
    }
    //delete last element from stack and return it
    var temp = storage[count];
    delete storage[count];
    return temp;
  };

  someInstance.size = function(){
    //return total count
    return count;
  };

  return someInstance;
};
