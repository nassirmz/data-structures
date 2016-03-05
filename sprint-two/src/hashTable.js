var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //set bucket if storage already exists
  var bucket = this._storage.get(i);
  var contains = false;
  //create bucket if no storage exists
  if (!bucket) {
    bucket = [];
    bucket.push([k,v]);
  } else {
    //checks for existing keys value pairs
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        contains = true;
      } else if (!contains) {
        bucket.push([k,v]);
      }
    }
  }
  //set bucket to storage i
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //go through bucket and make sure key matches
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //go through bucket, remove correct key value pair.
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
