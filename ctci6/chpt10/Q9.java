package ctci6.chpt10;

/**
 * Created by hao on 10/20/16.
 */
public class Q9 {

    public static class Coor {
        public int row;
        public int col;
        public Coor(int row, int col) {
            this.row = row;
            this.col = col;
        }
        public int value(int[][] matrix) {
            return matrix[row][col];
        }
        public String toString() {
            return row + " " + col;
        }
        public boolean exists() {
            return row != -1 && col != -1;
        }
        public boolean equals(Coor coor) {
            return row == coor.row && col == coor.col;
        }
    }

    public static Coor bs(int[][] matrix, int M, int N, int s) {
        Coor topLeft = new Coor(0, 0);
        Coor bottomRight = new Coor(M - 1, N - 1);
        return bs(matrix, topLeft, bottomRight, s);
    }

    public static Coor bs(int[][] matrix, Coor topLeft, Coor bottomRight, int s) {
        Coor find = new Coor(-1, -1);

        Coor mid = mid(topLeft, bottomRight);
        Coor top = new Coor(topLeft.row, mid.col);
        Coor right = new Coor(mid.row, bottomRight.col);
        Coor bottom = new Coor(bottomRight.row, mid.col);
        Coor left = new Coor(mid.row, topLeft.col);

//        System.out.println("top left:" + topLeft.toString()
//                + " bottom right: " + bottomRight.toString()
//                + " mid: " + mid.toString()
//                + " top: " + top.toString()
//                + " right: " + right.toString()
//                + " bottom: " + bottom.toString()
//                + " left: " + left.toString());

        if (topLeft.row == bottomRight.row - 1 || (topLeft.col == bottomRight.col - 1)) {
            if (topLeft.value(matrix) == s) return topLeft;
            if (bottomRight.value(matrix) == s) return bottomRight;
            if (bottom.value(matrix) == s) return bottom;
            if (right.value(matrix) == s) return right;
            return find;
        }

        if (mid.value(matrix) == s) return mid;
        if (mid.value(matrix) > s) {
            find = bs(matrix, topLeft, mid, s);
        } else {
            find = bs(matrix, mid, bottomRight, s);
        }
        if (find.exists()) {
            return find;
        }

        if (!top.equals(bottom) || !left.equals(right)) {
            find = bs(matrix, top, right, s);
            if (find.exists()) {
                return find;
            }
            find = bs(matrix, left, bottom, s);
            if (find.exists()) {
                return find;
            }
        }
        return find;
    }

    public static Coor mid(Coor topLeft, Coor bottomRight) {
        int midRow = topLeft.row + (bottomRight.row - topLeft.row) / 2;
        int midCol = topLeft.col + (bottomRight.col - topLeft.col) / 2;
        Coor mid = new Coor(midRow, midCol);
        return mid;
    }

    public static void main(String[] args) {
        int[][] matrix = {
                {1,3,7,9,10},
                {2,4,8,10,11},
                {3,5,10,11,13},
                {4,6,11,19,20}
        };
        System.out.println(bs(matrix, 4, 5, 15).toString());
    }
}

