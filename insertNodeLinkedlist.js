class Node
{
    constructor(d)
    {
            this.data = d;
            this.next = null;
        }
    }
    // Inserts a new Node at front of the list.
function push(new_data){
     var new_node= new Node(new_data)
     new_data.next=head;
     head=new_node
}
// Inserts a new node after the given prev_node.
function insertAfter(prev_node,new_data){
    if(prev_node==null) {
        console.log("prev_node can not be null");
        return;
}
var new_node= new Node(new_data)
new_node.next=prev_node.next;
prev_node.next=new_node;
}

// add node at the end.

function appends(new_data){
    var new_node=new Node(new_data);
    if(head== null){
        head=new Node(new_data)
        return;
    }
    new_node.next=null;

    var last =head;
    while(last.next!=null){
        last=last.next
        last.next=new_node
        return;
    }
}