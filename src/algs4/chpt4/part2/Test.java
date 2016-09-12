package algs4.chpt4.part2;

import java.util.*;

class Solution {
    private final String PUSH = "push";
    private final String POP = "pop";
    private final int maxN = 100000;
    private int[] data;
    private int N = 0;
    private Stack<Transaction> ts;
    private boolean isTransaction = false;

    private class History {
        private String name;
        private int value;
        public History(String name, int value) {
            this.name = name;
            this.value = value;
        }
    }

    private class Transaction {
        private Stack<History> histories;
        public Transaction() {
            histories = new Stack<>();
        }
        public void addHistory(String name, int value) {
            History h = new History(name, value);
            histories.push(h);
        }
        public Stack<History> histories() {
            return histories;
        }
    }

    private boolean isTransaction() {
        return isTransaction;
    }

    private boolean hasTransaction() {
        return ts.size() > 0;
    }

    private boolean isEmpty() {
        return N == 0;
    }

    public Solution() {
        data = new int[maxN];
        ts = new Stack<>();
    }

    public void push(int value) {
        data[N++] = value;
        if (isTransaction()) {
            Transaction current = ts.peek();
            current.addHistory(PUSH, value);
        }
    }

    public int top() {
        if (isEmpty()) return 0;
        return data[N - 1];
    }

    public void pop() {
        if (isEmpty()) return;
        int top = top();
        N--;
        if (isTransaction()) {
            Transaction current = ts.peek();
            current.addHistory(POP, top);
        }
    }

    public void begin() {
        Transaction t = new Transaction();
        ts.push(t);
        isTransaction = true;
    }

    public boolean rollback() {
        isTransaction = false;
        if (!hasTransaction()) {
            return false;
        }
        Transaction current = ts.pop();
        Stack<History> histories = current.histories;

        while (!histories.isEmpty()) {
            History h = histories.pop();
            if (h.name == PUSH) {
                pop();
            } else if (h.name == POP) {
                push(h.value);
            }
        }

        isTransaction = hasTransaction();
        return true;
    }

    public boolean commit() {
        isTransaction = false;
        if (!hasTransaction()) {
            return false;
        }
        Transaction delete = ts.pop();
        Stack<History> old = delete.histories;
        if (!ts.isEmpty()) {
            Transaction current = ts.peek();
            while (!old.isEmpty()) {
                History h = old.pop();
                current.addHistory(h.name, h.value);
            }
        }

        isTransaction = hasTransaction();
        return true;
    }

    public static void main(String[] args) {
        // Define your tests here
        Solution sol = new Solution();
        sol.push(4);
        sol.begin();
        sol.push(7);
        sol.begin();
        sol.push(2);
        System.out.println(sol.ts.size()); // 2
        System.out.println(sol.top()); // 2
        System.out.println(sol.rollback()); // true
        System.out.println(sol.top()); // 7
        sol.begin();
        sol.push(10);
        System.out.println(sol.commit()); // true
        System.out.println(sol.top()); // 10
        System.out.println(sol.rollback()); // true
        System.out.println(sol.top()); // 4
    }
};