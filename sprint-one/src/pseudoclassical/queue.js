var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.backIndex = 0;
  this.frontIndex = 0;
};

Queue.prototype.enqueue = function(data) {
  this.storage[this.backIndex] = data;
  this.backIndex++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.frontIndex];
  delete this.storage[this.frontIndex];
  this.frontIndex++;
  return temp;
};

Queue.prototype.size = function() {
  var numElements = this.backIndex - this.frontIndex;
  if(numElements > 0) {
    return numElements;
  }
  else {
    return 0;
  }
};
