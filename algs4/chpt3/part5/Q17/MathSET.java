package algs4.chpt3.part5.Q17;

import java.util.HashMap;
import java.util.Set;

/**
 * Created by hao on 8/15/16.
 */
public class MathSET<Key> {

    private HashMap<Key, Boolean> st;

    public MathSET(Key[] universe) {
        st = new HashMap<>();
        for (Key k : universe) {
            st.put(k, true);
        }
    }

    public void add(Key key) {
        st.put(key, true);
    }

    public MathSET<Key> complement() {
        return null;
    }

    public void union(MathSET<Key> a) {
        for (Key key : a.keys()) {
            if (!st.containsKey(key)) {
                st.put(key, true);
            }
        }
    }

    public void intersection(MathSET<Key> a) {
        for (Key key : keys()) {
            if (!a.contains(key)) {
                st.remove(key);
            }
        }
    }

    public void delete(Key key) {
        st.remove(key);
    }

    public boolean contains(Key key) {
        return st.containsKey(key);
    }

    public boolean isEmpty() {
        return st.size() == 0;
    }

    public int size() {
        return st.size();
    }

    private Set<Key> keys() {
        return st.keySet();
    }

    public static void main(String[] args) {

    }
}
