

public class IntToBinaryString {
    public static void main(String [] args) {
        int N = 66;
        String s = "";
        for (int i = N; i > 0; i = i / 2) {
            s = (i % 2) + s;
        }
        System.out.println(s);
    }
}