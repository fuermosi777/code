package algs4.chpt3.part5.Q4;

/**
 * Created by hao on 8/12/16.
 */
public class HashSTint<Value> {
    private int[] keys;
    private Value[] vals;
    private int N = 0;
    private int M = 10;

    public HashSTint() {
        keys = new int[M];
        for (int i = 0; i < M; i++) {
            keys[i] = -1;
        }
        vals = (Value[]) new Object[M];
    }

    private int hash(int key) {
        return key & 0x7fffffff % M;
    }

    public void put(int key, Value val) {
        int i = hash(key);
        while (keys[i] != -1) {
            if (keys[i] == key) {
                vals[i] = val;
                return;
            }
            i = (i + 1) % M;
        }
        keys[i] = key;
        vals[i] = val;
        N++;
    }

    public Value get(int key) {
        int i = hash(key);
        while (keys[i] != -1) {
            if (keys[i] == key) {
                return vals[i];
            }
            i = (i + 1) % M;
        }
        return null;
    }

    public static void main(String[] args) {

    }
}
