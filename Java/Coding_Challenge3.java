import java.util.*;
import java.io.*;

public class Coding_Challenge3{
   public static void main(String args[]) {

/*      String [] original = { "karan", "madam", "tom", "civic", "radar", "sexes", "jimmy", "kayak", "john", "refer", "billy", "did"};
      List<String> aL = new ArrayList<String>(original);
      char[] aL = original.toCharArray();
      int size = aL.length;
      System.println(aL);

      for (int i = 0; i < size / 2; i++) {
         char temp = aL[i];
         aL[i] = aL[size-i-1];
         aL[size-i-1] = temp;
      }

      if(Arrays.equals(aL, original)) {
         //System.out.println("Entered string is a palindrome");
         ArrayList<Character> chars = new ArrayList<Character>(aL);
      } else {
         ArrayList<String> StringList = new ArrayList<String>();
         //System.out.println("Entered string is not a palindrome");
      }*/

    String[] thisIsAStringArray = {"karan", "madam", "tom", "civic", "radar", "sexes", "jimmy", "kayak", "john", "refer", "billy", "did"};
    ArrayList<Character> chars = new ArrayList<Character>();
    Arrays.sort(thisIsAStringArray );
    for ( String element : thisIsAStringArray ) {
        //System.out.println( element );
         char[] chararray = element.toCharArray();
/*         for(char output:chararray){
            System.out.println(output);
         }*/
         for(int i=0;i<2;i++){
            System.out.println(chararray[i]);
            chars.add();
         }
         

    }
   }
}