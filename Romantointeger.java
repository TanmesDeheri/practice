import java.util.HashMap;
import java.util.Scanner;
public class Romantointeger{
    public static int conversion(String s) {
        s.trim().toUpperCase();
        int sum=0;
        HashMap<Character,Integer> roman=new HashMap<>();
        roman.put('I',1);
        roman.put('V',5);
        roman.put('X',10);
        roman.put('L',50);
        roman.put('C',100);
        roman.put('D',500);
        roman.put('M',1000);
        for(int i=0;i<s.length();i++)
        {
            if(i<s.length()-1 && roman.get(s.charAt(i))<roman.get(s.charAt(i+1)))
           {
              sum+=roman.get(s.charAt(i+1))-roman.get(s.charAt(i));  
              i++;
           }
           else
           sum+=roman.get(s.charAt(i));
        }
        return sum;

    }
    public static void main(String[] args) {
        Romantointeger mm=new Romantointeger();
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the Roman String");
        String s=sc.next();
        System.out.println("The given roman number is "+s);
        System.out.println("it's equivalent integer number is "+conversion(s));
    }
}