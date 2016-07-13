package algs4.chpt2.part5.Q32;

import java.util.LinkedList;

/**
 * Created by hao on 7/12/16.
 */
public class Board {
    /* turn "1 2 3 4 5 6 7 8 0" to Board

    1 | 2 | 3
    ----------
    4 | 5 | 6
    ----------
    7 | 8 |

    */


    private class Point {
        private int x;
        private int y;
        private int value;

        public Point(int x, int y, int value) {
            this.x = x;
            this.y = y;
            this.value = value;
        }

        public boolean isEmpty() {
            return value == 0;
        }
    }

    private Point[] points = new Point[9];
    private int[] pos = new int[9];
    private Point empty;

    public Board(String a) {
        String[] temp = a.split(" ");
        for (int i = 0; i < temp.length; i++) {
            Point p = new Point((i + 3) % 3 + 1, i / 3 + 1, Integer.parseInt(temp[i]));
            if (p.value == 0) empty = p;
            pos[p.value] = i;
            points[i] = p;
        }
    }

    public boolean done() {
        for (int i = 0; i < points.length - 1; i++) {
            if (i + 1 != points.length - 1 && points[i].value > points[i + 1].value) {
                return false;
            }
        }
        return true;
    }

    public Board move(Point p) {
        if (p.value == 0) return null;

        int[] newPos = new int[pos.length];
        for (int i = 0; i < pos.length; i++) {
            newPos[i] = pos[i];
        }
        newPos[p.value] = pos[0];
        newPos[0] = pos[p.value];
        String s = "";
        for (int i = 0; i < newPos.length; i++) {
            s += points[newPos[points[i].value]].value;
            if (i != points.length - 1) {
                s += " ";
            }
        }

        Board newBoard = new Board(s);
        return newBoard;
    }

    public Board[] nextMoves() {
        if (done()) return null;
        LinkedList<Point> moveable = new LinkedList<>();

        if (empty.x - 1 > 0) {
            moveable.add(points[pos[0] - 1]);
        }
        if (empty.x + 1 < 4) {
            moveable.add(points[pos[0] + 1]);
        }
        if (empty.y - 1 > 0) {
            moveable.add(points[pos[0] - 3]);
        }
        if (empty.y + 1 < 4) {
            moveable.add(points[pos[0] + 3]);
        }
        Board[] boards = new Board[moveable.size()];
        for (int i = 0; i < boards.length; i++) {
            boards[i] = move(moveable.get(i));
        }
        return boards;
    }

    public String toString() {
        String s = "";
        for (int i = 0; i < points.length; i++) {
            s += points[i].value;
            if (i != points.length - 1) {
                s += " ";
            }
        }
        return s;
    }

    public void print() {
        System.out.print("----------\n");
        for (int i = 0; i < points.length; i++) {
            System.out.print(points[i].value);
            if ((i + 1) % 3 == 0) {
                System.out.print("\n----------\n");
            } else {
                System.out.print(" | ");
            }
        }
    }

    public int priority() {
        // position
        int count = 0;
        for (int i = 1; i < pos.length; i++) {
            if (points[i - 1].value != i) {
                System.out.println(i);
                count++;
            }
        }
        Point[] missplacedPoints = new Point[count];

        return 0;
    }

    public static void main(String[] args) {
        Board b = new Board("1 3 6 4 8 5 0 7 2");
        b.print();
        b.priority();
    }

}
