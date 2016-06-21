import java.util.Stack;

public class ThreeSumFaster {
    public static void main(String[] args) {
        int[] a = {-4, -3, -2, -1, 0, 1, 2, 3, 5, 6, 7, 8};
        for (int i = 0; i < a.length - 2; i++) {
            Stack<Integer> stack = new Stack<>();
            double buffer = a[i];
            //System.out.println("----- " + buffer +  " -----");
            for (int j = i + 1; j < a.length - 1; j++) {
                //System.out.print("a[j]: " + a[j] + " a[i]: " + a[i] + " ; ");
                if (a[j] < - a[i] / 2.0) {
                    stack.push(a[j]);
                    buffer = a[j];
                    //System.out.print(" push: " + a[j] + " buffer: " + buffer);
                } else if (a[j] > - a[i] / 2.0) {
                    while (-(buffer + a[i]) < a[j] && stack.size() > 0) {
                        buffer = stack.pop();
                        //System.out.print(" pop: new buffer = " + buffer);
                    }
                    if (a[j] + a[i] == -buffer) {
                        System.out.println(" ==> " + a[i] + " + " + buffer + " + " + a[j]);
                    }
                }
                //System.out.print('\n');
            }
        }
    }
}