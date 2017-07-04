package ctci6.chpt7;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

/**
 * Created by hao on 10/14/16.
 */
public class Q10 {
    public enum CellType {
        Blank, Number, Bomb;
    }
    public enum CellStatus {
        Exposed, Hidden;
    }

    public class Cell {
        public CellType type;
        public CellStatus status = CellStatus.Hidden;
        public int row;
        public int col;
        public int num = 0;
        public Cell(CellType type) {
            this.type = type;
        }

        public String toString() {
            if (status == CellStatus.Hidden) {
                return "?";
            } else if (type == CellType.Number) {
                return num + "";
            } else {
                return " ";
            }
        }

        public String toRealString() {
            if (type == CellType.Bomb) {
                return "x";
            } else {
                return num + "";
            }
        }
    }

    public class Board {
        private Cell[][] cells;
        private ArrayList<Cell> bombs;
        private int N;
        public Board(int N) {
            this.N = N;
            init();
        }
        private void init() {
            // create empty board
            cells = new Cell[N][N];
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    cells[i][j] = new Cell(CellType.Blank);
                    cells[i][j].row = i;
                    cells[i][j].col = j;
                }
            }

            // drop bombs
            bombs = new ArrayList<>();

            int bombNum = N * N / 10;
            int currentBombNum = 0;
            while (currentBombNum < bombNum) {
                Random rand = new Random();
                int i = rand.nextInt(N - 1);
                int j = rand.nextInt(N - 1);
                if (cells[i][j].type != CellType.Bomb) {
                    cells[i][j].type = CellType.Bomb;
                    bombs.add(cells[i][j]);
                    currentBombNum++;
                }
            }

            // mark
            for (Cell b : bombs) {
                for (Cell c : adj(b)) {
                    if (c.type != CellType.Bomb) {
                        c.type = CellType.Number;
                        c.num++;
                    }
                }
            }
        }

        private Iterable<Cell> adj(Cell cell) {
            ArrayList<Cell> list = new ArrayList<>();
            int i = cell.row;
            int j = cell.col;
            if (i > 0) {
                list.add(cells[i - 1][j]);
                if (j > 0) {
                    list.add(cells[i - 1][j - 1]);
                }
                if (j < N - 1) {
                    list.add(cells[i - 1][j + 1]);
                }
            }
            if (j > 0) {
                list.add(cells[i][j - 1]);
            }
            if (j < N - 1) {
                list.add(cells[i][j + 1]);
            }
            if (i < N - 1) {
                list.add(cells[i + 1][j]);
                if (j > 0) {
                    list.add(cells[i + 1][j - 1]);
                }
                if (j < N - 1) {
                    list.add(cells[i + 1][j + 1]);
                }
            }

//            System.out.println(cell.row + " " + cell.col + " " + list.size());

            return list;
        }

        public void print(boolean reveal) {
            // table head
            System.out.print("  ");
            for (int i = 0; i < N; i++) {
                System.out.print(i + " ");
            }
            System.out.print('\n');
            for (int i = 0; i < N; i++) {
                System.out.print(i + " ");
                for (int j = 0; j < N; j++) {
                    System.out.print((reveal ? cells[i][j].toRealString() : cells[i][j].toString()) + " ");
                    if (j == N - 1) {
                        System.out.print('\n');
                    }
                }

            }
        }

        public boolean click(int row, int col) {
            Cell cell = cells[row][col];
            if (cell.type == CellType.Bomb) {
                return false;
            } else {
                expose(cell);
                return true;
            }
        }

        private void expose(Cell cell) {
            if (cell.type == CellType.Bomb || cell.status == CellStatus.Exposed) {
                return;
            }

            cell.status = CellStatus.Exposed;
            if (cell.type == CellType.Blank) {
                for (Cell c : adj(cell)) {
                    expose(c);
                }
            }
        }

        public boolean check() {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    if ((cells[i][j].status == CellStatus.Exposed && cells[i][j].type == CellType.Bomb)
                            || (cells[i][j].status == CellStatus.Hidden && cells[i][j].type != CellType.Bomb)) {
                        return false;
                    }
                }
            }
            return true;
        }
    }

    public class Mineweeper {
        private boolean over;
        public Mineweeper() {
            System.out.println("Welcome to Mineweeper. Please choose a play mode: 1 - Easy, 2 - Normal, 3 - Hard.");
            Scanner scanner = new Scanner(System.in);
            int mode = scanner.nextInt();
            int N = mode == 1 ? 7 : mode == 2 ? 20 : 30;
            Board board = new Board(N);

            while (!over) {
                board.print(false);
                System.out.println("What's your next click? Enter something like \"1 2\"");
                int i = scanner.nextInt();
                int j = scanner.nextInt();
                boolean cont = board.click(i, j);
                if (!cont) {
                    over = true;
                    System.out.println("Game over: you hit a bomb!");
                } else {
                    over = board.check();
                    if (over) {
                        System.out.println("You win!");
                    }
                }
            }
        }
    }

    // test
    public Q10() {
        Mineweeper game = new Mineweeper();

    }
    public static void main(String[] args) {
        Q10 q = new Q10();
    }
}