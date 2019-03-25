import java.util.Scanner;
public class Main {

 public static void main(String[] args) {

   System.out.println("Number");
   Scanner keyboard = new Scanner(System.in);
   int num = keyboard.nextInt();
   SinglyLinkedList list = new SinglyLinkedList();
   list.insert(num);
   list.iterate();
   System.out.println("Length : "+list.size());
/*   list.insert(1);
   list.insert(2);
   System.out.println("Length : "+list.size());
   list.remove(1);
   System.out.println("Length : "+list.size());
   list.remove(2);
   System.out.println("Length : "+list.size());
   list.insert(0);
   list.insert(1);
   list.iterate();
   list.insert(2);
   System.out.println("Length : "+list.size());
   list.iterate();
   list.editNode(1,num);
   list.iterate();
   keyboard.close();*/
 }
}

