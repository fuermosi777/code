package algs4.chpt2.part3.Q20;

import algs4.chpt2.part3.A5.Quick;
import algs4.helper.RandomArrayOfInts;
import edu.princeton.cs.algs4.StdRandom;

import java.util.Arrays;
import java.util.Stack;

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//

/**
 * Created by hao on 6/29/16.
 */
public class QuickWithoutRecursion {
    private static class Component {
        int lo;
        int hi;
        public int size() {
            return hi - lo;
        }
    }
    public static void sort(Comparable[] a) {
        StdRandom.shuffle(a);
        Stack<Component> stack = new Stack<>();
        Component start = new Component();
        start.hi = a.length - 1;
        start.lo = 0;
        stack.push(start);
        while (stack.size() > 0) {
            Component c = stack.pop();
            if (c.size() > 1) {
                int j = partition(a, c.lo, c.hi);
                Component big = new Component();
                big.lo = j + 1; big.hi = c.hi;
                stack.push(big);

                Component small = new Component();
                small.lo = c.lo; small.hi = j - 1;
                stack.push(small);
            }
        }
    }
    private static int partition(Comparable[] a, int lo, int hi) {
        Comparable v = a[lo];
        int i = lo, j = hi + 1;
        //System.out.println(lo + " " + hi);
        while (true) {
            while (a[++i].compareTo(v) < 0) {
                if (i == hi) break;
            }
            while (a[--j].compareTo(v) > 0) {

            }
            if (i >= j) break;
            Quick.exch(a, i, j);
        }
        Quick.exch(a, lo, j);
        return j;
    }

    public static void main(String[] args) {
        int[] a = RandomArrayOfInts.generate(40, 1, 100);
        Integer[] b = RandomArrayOfInts.toInteger(a);
        sort(b);
        System.out.println(Arrays.toString(b));
    }
}
