public class CirRotation {
    public static void main(String[] args) {
        String s = "ACTGACG";
        String t = "TGACGAC";
        System.out.println((s + s).indexOf(t) > -1);
    }
}