package ctci6.chpt8;

/**
 * Created by hao on 10/18/16.
 */
public class Q10 {
    private static final int Black = 1;
    private static final int White = 0;

    public static void fill(int[][] board, int row, int col, int newColor) {
        int oldColor = board[row][col];
        board[row][col] = newColor;

        if (row - 1 >= 0 && board[row - 1][col] == oldColor) {
            fill(board, row - 1, col, newColor);
        }
        if (row + 1 < board.length && board[row + 1][col] == oldColor) {
            fill(board, row + 1, col, newColor);
        }
        if (col - 1 >= 0 && board[row][col - 1] == oldColor) {
            fill(board, row, col - 1, newColor);
        }
        if (col + 1 < board.length && board[row][col + 1] == oldColor) {
            fill(board, row, col + 1, newColor);
        }
    }

    public static void print(int[][] board) {
        for (int i = 0; i < board[0].length; i++) {
            for (int j = 0; j < board.length; j++) {
                System.out.print(board[i][j] + " ");
                if (j == board.length - 1) System.out.print('\n');
            }
        }
        System.out.print('\n');
    }

    public static void fillRow(int[][] board, int row, int start, int end, int newColor) {
        for (int j = start; j <= end; j++) {
            board[row][j] = newColor;
        }
    }

    public static void main(String[] args) {
        int[][] board = new int[10][10];
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                board[i][j] = White;
            }
        }
        fillRow(board, 1, 1, 2, Black);
        fillRow(board, 2, 2, 4, Black);
        fillRow(board, 3, 2, 4, Black);
        fillRow(board, 4, 3, 6, Black);
        print(board);
        fill(board, 9, 9, Black);
        print(board);
    }
}
