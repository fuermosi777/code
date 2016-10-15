package ctci6.chpt8;

import ctci6.utils.Queue;

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Created by hao on 10/15/16.
 */

public class Q2 {
    private Cell[][] cells;
    private int row;
    private int col;
    private Cell root;

    public enum CellType {
        Blank, Block;
    }

    public class Cell {
        public CellType type;
        public boolean marked;
        public int row;
        public int col;
        public Cell(CellType type, int row, int col) {
            this.type = type;
            this.row = row;
            this.col = col;
        }
        public String toString() {
            return type == CellType.Blank ? "o" : "x";
        }
        public String toCoor() {
            return "(" + row + ", " + col + ")";
        }
    }

    public Q2(int r, int c) {
        cells = new Cell[r][c];
        row = r;
        col = c;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                cells[i][j] = new Cell(CellType.Blank, i, j);
            }
        }

        cells[4][0].type = CellType.Block;
        cells[1][1].type = CellType.Block;
        cells[2][2].type = CellType.Block;
        cells[4][3].type = CellType.Block;
        cells[1][4].type = CellType.Block;
        cells[3][4].type = CellType.Block;
        cells[4][4].type = CellType.Block;
        cells[6][4].type = CellType.Block;
        cells[1][5].type = CellType.Block;

        root = cells[0][0];
    }

    public ArrayList<Cell> getPath() {
        ArrayList<Cell> path = new ArrayList<>();
        getPath(root, path);
        return path;
    }

    private boolean getPath(Cell cell, ArrayList<Cell> path) {
        if (cell == null) return false;
        if (cell.row == row - 1 && cell.col == col - 1) {
            return true;
        }
        if (getPath(canMoveRight(cell), path) || getPath(canMoveBottom(cell), path)) {
            path.add(cell);
            return true;
        }
        return false;
    }

    public Cell canMoveRight(Cell cell) {
        if (cell.col + 1 > col - 1) {
            return null;
        } else if (cells[cell.row][cell.col + 1].type == CellType.Block) {
            return null;
        } else {
            return cells[cell.row][cell.col + 1];
        }
    }

    public Cell canMoveBottom(Cell cell) {
        if (cell.row + 1 > row - 1) {
            return null;
        } else if (cells[cell.row + 1][cell.col].type == CellType.Block) {
            return null;
        } else {
            return cells[cell.row + 1][cell.col];
        }
    }

    public void print() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.print(cells[i][j].toString() + " ");
                if (j == col - 1) {
                    System.out.print('\n');
                }
            }
        }
    }

    public static void main(String[] args) {
        Q2 q = new Q2(7, 6);
        q.print();
        ArrayList<Cell> path = q.getPath();
        for (Cell c : path) {
            System.out.println(c.toCoor());
        }
    }
}
