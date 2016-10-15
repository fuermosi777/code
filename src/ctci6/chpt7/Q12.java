package ctci6.chpt7;

import java.util.LinkedList;

/**
 * Created by hao on 10/15/16.
 */
public class Q12<Key, Value> {
    private int M;
    private LinkedList<Value>[] table;
    public Q12() {
        int M = 10;
        this.M = M;
        table = new LinkedList[M];
        for (int i = 0; i < M; i++) {
            table[i] = new LinkedList<>();
        }
    }

    private int hash(Key key) {
        return key.hashCode() % M;
    }

    public void put(Key key, Value val) {
        int index = hash(key);
        LinkedList<Value> ll = table[index];
        ll.add(val);
    }

    public Value get(Key key) {
        int index = hash(key);
        LinkedList<Value> ll = table[index];
        return null;
    }

    public String toString() {
        String res = "";
        for (int i = 0; i < M; i++) {
            res += table[i].toString() + '\n';
        }
        return res;
    }

    public static void main(String[] args) {
        Q12<Integer, String> ht = new Q12<>();
        ht.put(3, "c");
        ht.put(4, "b");
        System.out.println(ht.toString());
    }
}
