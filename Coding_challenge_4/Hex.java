import java.io.*; 
import java.util.Scanner;
public class Hex {

 public static void main(String[] args) {

   System.out.println("Int to Hex");
   Scanner keyboard = new Scanner(System.in);
   int num = keyboard.nextInt();
   int remainer = 0;
   char value[] = new char[127];
   int i = 0;
   while(num!=0){
   	int remainder = num%16;
   	switch(remainder){
   		case 1: value[i]=(char)(49);
   		i++;
   		break;
   		case 2: value[i]=(char)(50);
   		i++;
   		break;
   		case 3: value[i]=(char)(51);
   		i++;
   		break;
   		case 4: value[i]=(char)(52);
   		i++;
   		break;
   		case 5: value[i]=(char)(53);
   		i++;
   		break;
   		case 6: value[i]=(char)(54);
   		i++;
   		break;
   		case 7: value[i]=(char)(55);
   		i++;
   		break;
   		case 8: value[i]=(char)(56);
   		i++;
   		break;
   		case 9: value[i]=(char)(57);
   		i++;
   		break;
   		case 10: value[i]=(char)(65);
   		i++;
   		break;
   		case 11: value[i]=(char)(66);
   		i++;
   		break;
   		case 12: value[i]=(char)(67);
   		i++;
   		break;
   		case 13: value[i]=(char)(68);
   		i++;
   		break;
   		case 14: value[i]=(char)(69);
   		i++;
   		break;
   		case 15: value[i]=(char)(70);
   		i++;
   		break;
   	}
   num=num/16;
   }
        for(int j=i-1; j>=0; j--){
            System.out.print(value[j]); 
        }
 }
}