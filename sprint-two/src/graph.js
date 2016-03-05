
// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
//O(1)
Graph.prototype.addNode = function(node){
  var nodeObj = {};
  nodeObj.value = node;
  nodeObj.edges = [];
  this.nodes[node] = nodeObj;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
//O(1)
Graph.prototype.contains = function(node){
  if (this.nodes[node].value) {
    return true;
  }
  else {
    return false;
  }
};
// ------------------------
// Removes a node from the graph.
//O(1)
Graph.prototype.removeNode = function(node){
  delete this.nodes[node].value;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//O(n)
Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodes[fromNode].edges.length; i ++) {
    if(this.nodes[fromNode].edges[i] === this.nodes[toNode].value) {
      return true;
    }
  }
  return false;
};
// Connects two nodes in a graph by adding an edge between them.
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges.push(this.nodes[toNode].value);
  this.nodes[toNode].edges.push(this.nodes[fromNode].value);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
//O(n)
Graph.prototype.removeEdge = function(fromNode, toNode){
  var frN = this.nodes[fromNode];
  var toN = this.nodes[toNode];
  //splice out the edge of the array
  frN.edges.splice(frN.edges.indexOf(toN.value),1);
  toN.edges.splice(toN.edges.indexOf(frN.value),1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
//O(n)
Graph.prototype.forEachNode = function(cb){
  for(node in this.nodes) {
    cb(this.nodes[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
