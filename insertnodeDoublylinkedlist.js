var head;
class Node {
    // Constructor to create a new node
        // next and prev is by default initialized as null
        constructor(val) {
            this.data = val;
            this.prev = null;
            this.next = null;
        }
    }
    //1) Add a node at the front:
    function push(new_data){
        let new_Node = new Node(new_data);
        new_Node.next = head;
    new_Node.prev = null;
    if (head != null)
    head.prev = new_Node;
    head = new_Node;

    }
    //2) Add a node after a given node:

    function InsertAfter(prev_Node,new_data)
{
        /*1. check if the given prev_node is NULL */
    if (prev_Node == null) {
        document.write("The given previous node cannot be NULL <br>");
        return;
    }
    let new_node = new Node(new_data);
    new_node.next = prev_Node.next;
    prev_Node.next = new_node;
    new_node.prev = prev_Node;
    if (new_node.next != null)
    new_node.next.prev = new_node;
}

//3) Add a node at the end
function append(new_data)
{
    /* 1. allocate node
     * 2. put in the data */
    var new_node = new Node(new_data);
 
    var last = head; /* used in step 5*/
 
    /* 3. This new node is going to be the last node, so
     * make next of it as NULL*/
    new_node.next = null;
 
    /* 4. If the Linked List is empty, then make the new
     * node as head */
    if (head == null) {
        new_node.prev = null;
        head = new_node;
        return;
    }
 
    /* 5. Else traverse till the last node */
    while (last.next != null)
        last = last.next;
 
    /* 6. Change the next of last node */
    last.next = new_node;
 
    /* 7. Make last node as previous of new node */
    new_node.prev = last;
}

// reverse linkedlist 
function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }

//Detect loop in linked list(floyd algo / Tortoise and hare algo) in js
    function check_loop(node){
        var p= node;
        var q=node;
        while(p&&q.next){
          p=p.next;
          q=q.next.next;
          if(p==q){
            return p;
          }
          return null
        }
      }
      function remove_loop(p,head){
        q=head;
        while(p.next!=q){
          p=p.next;
          q=q.next;
        }
        p.next=Null
      }

      //Detect loop in linked list(floyd algo / Tortoise and hare algo) in js
      function deleteNode(del) {
        // base case
        if (head == null || del == null)
            return null;
 
        // If node to be deleted is head node
        if (head == del)
            head = del.next;
 
        // Change next only if node to be
        // deleted is NOT the last node
        if (del.next != null)
            del.next.prev = del.prev;
 
        // Change prev only if node to be
        // deleted is NOT the first node
        if (del.prev != null)
            del.prev.next = del.next;
 
        del = null;
 
        return head;
    }
 
    // Function to delete the node at the
    // given position in the doubly linked list
    function deleteNodeAtGivenPos(n) {
        /*
         * if list in NULL or invalid position is given
         */
        if (head == null || n <= 0)
            return;
    }
