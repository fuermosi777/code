public class BinarySearch {
    public static int rank(int key, int[] a) {
        int x = key;
        while (x >= 0) {
            if (a[x] < a[key]) {
                return x + 1;
            }
            x--;
        }
        return 0;
    }
    public static void main(String[] args) {
        int[] a = {1,1,2,2,2,2,3,4,5,5,6,6,6,6,7,7,8,9};
        System.out.println(rank(0, a));
    }
}