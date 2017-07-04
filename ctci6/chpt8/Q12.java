package ctci6.chpt8;

/**
 * Created by hao on 10/18/16.
 */
public class Q12 {

    public static final int QUEEN = 7;
    public static final int EMPTY = 0;

    public static boolean placeQueen(int[][] board, int row, int col) {
        if (!isValid(board, row, col)) return false;
        board[row][col] = QUEEN;
        for (int c = 0; c < 8; c++) {
            if (placeQueen(board, row + 1, c)) {
                return true;
            }
//            print(board);
        }
        if (row == 7) return true;
        board[row][col] = EMPTY;
        return false;
    }

    public static boolean isValid(int[][] board, int row, int col) {
        for (int r = 0; r < 8; r++) {
            if (board[r][col] == QUEEN) return false;
        }
        for (int c = 0; c < 8; c++) {
            if (board[row][c] == QUEEN) return false;
        }
        int r = row, c = col;
        while (r >= 0 && c >= 0) {
            if (board[r][c] == QUEEN) return false;
            r--; c--;
        }
        r = row; c = col;
        while (r < 8 && c < 8) {
            if (board[r][c] == QUEEN) return false;
            r++; c++;
        }
        r = row; c = col;
        while (r >= 0 && c < 8) {
            if (board[r][c] == QUEEN) return false;
            r--; c++;
        }
        r = row; c = col;
        while (r < 8 && c >= 0) {
            if (board[r][c] == QUEEN) return false;
            r++; c--;
        }
        return true;
    }

    public static void print(int[][] board) {
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                System.out.print(board[i][j] + "\t");
                if (j == 7) System.out.print('\n');
            }
        }
        System.out.print('\n');
    }

    public static void clean(int[][] board) {
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                board[j][i] = EMPTY;
            }
        }
    }

    public static void main(String[] args) {
        int[][] board = new int[8][8];

        for (int i = 0; i < 8; i++) {
            clean(board);
            if (placeQueen(board, 0, i)) {
                print(board);
            }
        }
//        board[1][2] = QUEEN;
//        System.out.println(isValid(board, 2, 0));
//        clean(board);
    }
}
