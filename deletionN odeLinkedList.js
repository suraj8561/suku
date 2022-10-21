var head; 
  
/* Linked list Node */
class Node 
{
    constructor(val) 
    {
        this.data = val;
        this.next = null;
    }
}

function push(new_data){
    var new_node= new Node(new_data)
    new_data.next=head;
    head=new_node
}

function deleteNode(position){
    if(head==null){
        return;
    }
    var temp =head;
    if(position==0){
        head=temp.next;
        return;
    }
     // Find previous node of the node to be deleted
     for(i = 0; temp != null && i < position - 1; i++){
        temp = temp.next;
        if (temp == null || temp.next == null)
    return;
     }
     // Node temp->next is the node to be deleted
    // Store pointer to the next of node to be deleted
    var next = temp.next.next;
      
    // Unlink the deleted node from list
    temp.next = next; 
}