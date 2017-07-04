package algs4.chpt3.part5.Q27;

import java.util.HashMap;

/**
 * Created by hao on 8/16/16.
 */
public class List<Item> {
    private HashMap<Item, Integer> st;
    private HashMap<Integer, Item> ts;
    private int head = 0;
    private int tail = 0;
    private int N = 0;

    public void addFront(Item item) {
        st.put(item, --head);
        ts.put(head, item);
        N++;
    }

    public void addBack(Item item) {
        st.put(item, ++tail);
        ts.put(tail, item);
        N++;
    }

    public Item deleteFront() {
        Item item = ts.get(head);
        ts.remove(head);
        st.remove(item);

        int fakeHead = head + 1;
        head = tail;
        for (int i = fakeHead; i < tail; i++) {
            if (ts.containsKey(i)) {
                head = i;
                break;
            }
        }
        N--;
        return item;
    }

    public void add(int i, Item item) {
        st.put(item, i);
        ts.put(i, item);
        if (!st.containsKey(item)) {
            if (i > tail) {
                tail = i;
            }
            if (i < head) {
                head = i;
            }
            N++;
        }
    }

    public boolean contains(Item item) {
        return st.containsKey(item);
    }

    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    public Item deleteBack() {
        return null;
    }

    public void delete(Item item) {

    }



    public List() {
        st = new HashMap<>();
        ts = new HashMap<>();
    }


}
