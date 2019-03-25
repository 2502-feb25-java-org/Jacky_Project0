public class SinglyLinkedList {
	private int size;
	private Node head;
	
	public SinglyLinkedList() {
		size = 0;
		head = null;
	}
	
	
  // adding a new node to the previous node
	public void insert(int data) {

		if (head == null) {
			Node newNode = new Node(data, null);
			head = newNode;
		}
		else {
			Node currentNode = head;
			while(currentNode.getNext()!=null){
				currentNode = currentNode.getNext();
			}
			Node newNode = new Node(data, null);
			currentNode.setNext(newNode);
		}
		size++;
	}
   //return size of SinglyLinkedList
	public int size() {
		return size;
	}
 // remove node if its in the list of existing node, if nothing is found, do nothing
	public void remove(int data) {
		if(head != null) {
			if(head.getData() ==  data) {
				if(head.getNext() == null)
					head = null;
				else
				{
					head = head.getNext();
				}
				size--;
			} else {
				Node currentNode = head;
				while(currentNode.getNext()!= null){
					Node temp = currentNode.getNext();
					if(temp.getData() == data)
					{
						Node tempsNext = temp.getNext();
						currentNode.setNext(tempsNext);
						temp = null;
					}
				}
			}
		}
	}
//iterate starting from the head till it reaches null
	public void iterate(){
		Node curr = head;
		System.out.println("Printing all list elements");
		if(curr != null) {
			System.out.println(curr.getData());
			while((curr = curr.getNext()) != null)
				System.out.println(curr.getData());
		}
	}

	public void editNode(int index, int num){
		Node curr = head;
		while(index-- != 0)
			curr =curr.getNext();
		curr.setData(num);
	}
}


