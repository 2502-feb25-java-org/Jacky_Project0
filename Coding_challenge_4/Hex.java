import java.io.*; 
public class Hex {

 public static void main(String[] args) {

   System.out.println("Int to Hex");
   Scanner keyboard = new Scanner(System.in);
   int num = keyboard.nextInt();
   int remainer = 0;
   char value[] = new char[127];
   int i = 0;
   while(num>0){
   	remainder = num%16;
   	switch(remainder){
   		case 1: value[i]=(char)(49);
   		i++;
   		case 2: value[i]=(char)(50);
   		i++;
   		case 3: value[i]=(char)(51);
   		i++;
   		case 4: value[i]=(char)(52);
   		i++;
   		case 5: value[i]=(char)(53);
   		i++;
   		case 6: value[i]=(char)(54);
   		i++;
   		case 7: value[i]=(char)(55);
   		i++;
   		case 8: value[i]=(char)(56);
   		i++;
   		case 9: value[i]=(char)(57);
   		i++;
   		case 10: value[i]=(char)(65);
   		i++;
   		case 11: value[i]=(char)(66);
   		i++;
   		case 12: value[i]=(char)(67);
   		i++;
   		case 13: value[i]=(char)(68);
   		i++;
   		case 14: value[i]=(char)(69);
   		i++;
   		case 15: value[i]=(char)(70);
   		i++;
   	}
   num=num/16;
   }
        for(int j=i-1; j>=0; j--){
            System.out.print(value[j]); 
        }
 }
}