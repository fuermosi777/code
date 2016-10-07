package ctci6.chpt5;

/**
 * Created by hao on 10/7/16.
 */
public class Q8 {
    public static void drawLine(byte[] screen, int width, int x1, int x2, int y) {
        if (x2 < x1) return;
        int h = screen.length * 8 / width;
        int i = x1 / 8 + y * h;
        int j = x2 / 8 + y * h;

        // i
        screen[i] = drawLeft(screen[i], x1 % 8);
        screen[j] = drawRight(screen[j], x2 % 8);
        for (int x = i + 1; x < j; x++) {
            screen[x] = (byte) 0xff;
        }
    }

    public static void printScreen(byte[] screen, int w) {
        int h = screen.length * 8 / w;
        for (int i = 0; i < screen.length; i++) {
            printByte(screen[i]);
            if (((i + 1) % (w/8)) == 0) {
                System.out.print('\n');
            }
        }
    }

    public static byte drawLeft(byte a, int i) {
        int flag = 0;
        while (flag <= 7 - i) {
            a = (byte) (a | (1 << flag));
            flag++;
        }
        return a;
    }

    public static byte drawRight(byte a, int i) {
        int flag = 7 - i;
        while (flag <= 8) {
            a = (byte) (a | (1 << flag));
            flag++;
        }
        return a;
    }

    public static void printByte(byte a) {
        System.out.print(String.format("%8s", Integer.toBinaryString((a + 256) % 256)).replace(' ', '0'));
    }

    public static void main(String[] args) {
        int M = 9;
        byte[] screen = new byte[M];
        for (int i = 0; i < M; i++) {
            byte a = 0;
            screen[i] = a;
        }
        printScreen(screen, 24);
        drawLine(screen, 24, 3, 19, 1);
        printScreen(screen, 24);

// ---    test drawLeft() and drawRight()
//        byte a = 0;
//        a = drawRight(a, 3);
//        printByte(a);
    }
}
