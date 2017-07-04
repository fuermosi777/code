package ctci6.chpt7;

/**
 * Created by hao on 10/9/16.
 */
public class Q8 {
    public enum PieceColor {
        BLACK(0), WHITE(1);
        private int value;
        private PieceColor(int i) {
            value = i;
        }
    }
    public class Board {
        private Piece[][] pieces;
        private int N;
        private int size;
        public Board(int N) {
            if (N < 4) return;
            pieces = new Piece[N][N];
            this.N = N;
            size = 0;
            putPiece(new Piece(PieceColor.WHITE), (N - 1) / 2, (N - 1) / 2);
            putPiece(new Piece(PieceColor.WHITE), (N - 1) / 2 + 1, (N - 1) / 2 + 1);
            putPiece(new Piece(PieceColor.BLACK), (N - 1) / 2, (N - 1) / 2 + 1);
            putPiece(new Piece(PieceColor.BLACK), (N - 1) / 2 + 1, (N - 1) / 2);
        }
        private void putPiece(Piece piece, int x, int y) {
            pieces[y][x] = piece;
            size++;
        }
        public void dropPiece(Piece piece, int x, int y) {

        }
        public void print() {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    if (pieces[i][j] == null) {
                        System.out.print("\u25cc ");
                    } else if (pieces[i][j].color == PieceColor.BLACK) {
                        System.out.print("\u25c9 ");
                    } else {
                        System.out.print("\u25ce ");
                    }
                    if (j == N - 1) {
                        System.out.print('\n');
                    }
                }
            }
        }
    }
    public class Piece {
        private PieceColor color;
        public Piece(PieceColor color) {
            this.color = color;
        }
        public void flip() {
            color = color == PieceColor.WHITE ? PieceColor.BLACK : PieceColor.WHITE;
        }
    }
    public class Game {

    }
    public Q8() {
        Board b = new Board(10);
        b.print();
    }
    public static void main(String[] args) {
        Q8 q = new Q8();
    }
}
