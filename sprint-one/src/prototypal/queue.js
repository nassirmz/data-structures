var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.backIndex = 0;
  someInstance.frontIndex = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(data) {
    this.storage[this.backIndex] = data;
    this.backIndex++;
  },
  dequeue: function() {
    var temp = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    return temp;
  },
  size: function() {
    var numElements = this.backIndex - this.frontIndex;
    if(numElements > 0) {
      return numElements;
    }
    else {
      return 0;
    }
  }
};


