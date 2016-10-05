package ctci6.chpt5;

/**
 * Created by hao on 10/5/16.
 */
public class Q4 {

    public static int nextS(int N) {
        int a = N;
        int flag = 0;
        int find1 = -1, find0 = -1;
        while (a != 0 && flag <= Integer.BYTES * 8) {
//            System.out.println(Integer.toBinaryString(a));
            if ((a & 1) == 1 && find0 == -1) {
                find1 = flag;
            } else if ((a & 1) == 0 && find1 != -1) {
                find0 = flag;
                break;
            }
//            System.out.println(find1 + " " + find0);
            a = a >>> 1;
            flag++;
        }
//        System.out.println(find1 + " " + find0);
        int b = N;
        b = setBit1(b, find0);
        b = setBit0(b, find1);

        // TODO
        // rearrange ones and zeros to the right of find1

        return b;
    }

    public static int setBit1(int N, int i) {
        return N | (1 << i);
    }

    public static int setBit0(int N, int i) {
        return N ^ (1 << i);
    }

//    public static int nextL(int N) {
//        return -1;
//    }

    public static void main(String[] args) {
        System.out.println(nextS(0b1010) == 0b1100);
    }
}
