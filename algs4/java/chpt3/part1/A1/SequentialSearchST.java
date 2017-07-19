package algs4.chpt3.part1.A1;

/**
 * Created by hao on 7/13/16.
 */
public class SequentialSearchST<Key, Value> {
    private class Node {
        Key key;
        Value value;
        Node next;
        public Node(Key key, Value value, Node next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }
    private Node first;
    private int N = 0;
    public SequentialSearchST() {

    }
    public Value get(Key key) {
        Node flag = first;
        while (flag != null) {
            if (flag.key.equals(key)) return flag.value;
            flag = flag.next;
        }
        return null;
    }
    public void put(Key key, Value value) {
        Node flag = first;
        while (flag != null) {
            if (flag.key.equals(key)) flag.value = value;
            flag = flag.next;

        }
        Node node = new Node(key, value, first);
        first = node;
    }
    public static void main(String[] args) {
        SequentialSearchST<String, Integer> st = new SequentialSearchST<>();
        st.put("A", 1);
        st.put("B", 2);
        st.put("A", 3);
        System.out.println(st.get("B"));
        System.out.println(st.get("A"));
    }
}
