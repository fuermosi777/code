package ctci6.chpt10;

/**
 * Created by hao on 10/20/16.
 */
public class Q5 {
    public static int bs(String[] words, String s) {
        int lo = 0, hi = words.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            mid = nearestMid(words, mid);
            if (words[mid] == s) return mid;
            else if (words[mid].compareTo(s) > 0) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return -1;
    }
    public static int nearestMid(String[] words, int mid) {
        if (words[mid] != "") return mid;
        int i = mid - 1, j = mid + 1;
        while (i >= 0 || j < words.length) {
            if (i >= 0 && words[i] != "") return i;
            if (j < words.length && words[j] != "") return j;
            i--; j++;
        }
        return -1;
    }
    public static void main(String[] args) {
        String[] words = {"a", "", "", "b", "", "", "c", "" ,"", "", "", "d", "", ""};
        System.out.println(bs(words, "d"));
//        System.out.println(nearestMid(words, 1));
    }
}
