var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    backIndex: 0,
    frontIndex: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function (data) {
    this.storage[this.backIndex] = data;
    this.backIndex++;
  },
  dequeue: function () {
    var temp = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    return temp;
  },
  size: function() {
    var numElements = this.backIndex - this.frontIndex;
    return numElements > 0 ? numElements : 0;
  }
};


