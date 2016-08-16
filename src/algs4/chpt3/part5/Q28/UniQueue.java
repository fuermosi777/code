package algs4.chpt3.part5.Q28;

import edu.princeton.cs.algs4.Queue;

import java.util.HashMap;

/**
 * Created by hao on 8/16/16.
 */
public class UniQueue<Item> {
    private HashMap<Item, Boolean> map;

    private Queue<Item> q;

    public UniQueue() {
        map = new HashMap<Item, Boolean>();
        q = new Queue<Item>();
    }

    public void enqueue(Item item) {
        if (map.containsKey(item)) return;
        q.enqueue(item);
        map.put(item, true);
    }

    public Item dequeue() {
        if (q.isEmpty()) return;
        Item item = q.dequeue();
        map.remove(item);
        return item;
    }
}
