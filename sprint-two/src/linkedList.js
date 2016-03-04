var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  //O(1)
  list.addToTail = function(value){
    //assign first node as head/tail once
    if(!list.head) {
      list.head = Node(value);
      list.tail = list.head;
      //assign next node as head.next and tail once
    } else if (list.head === list.tail){
      list.head.next = Node(value);
      list.tail = Node(value);
      //adds the rest to the linked list
    } else {
      var temp = Node(value);
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  //O(1)
  list.removeHead = function(){
    //use temp to hold old head and return its value
    var temp = list.head;
    //set new head to next list in line
    list.head = temp.next;
    return temp.value;
  };

  //O(n)
  list.contains = function(target){
    //start at head, iterate to the end
    var temp = list.head;
    while(temp) {
      if(temp.value ===target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
