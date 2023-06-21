class Palindrome {
    public boolean isPalindrome(int x) {
        if (x<0 || (x!=0 && x%10==0)) return false;
        int rev = 0;
        while (x>rev){
            rev = rev*10 + x%10;
            x = x/10;
        }
        return (x==rev || x==rev/10);
    }
    public static void main(String[] args) {
        Palindrome a=new Palindrome();
        int b=Integer.parseInt(args[0]);
       System.out.println((a.isPalindrome(b))?"palindrome":"not palindrome");
       System.currentTimeMillis();
    }
}//runtime 8 miliseconds for ispalindrome method