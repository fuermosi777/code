package algs4.chpt3.part5.Q26;

import java.util.HashMap;
import java.util.LinkedList;

/**
 * Created by hao on 8/16/16.
 */
public class LRU<Key> {

    private HashMap<Key, Integer> map;
    private LinkedList<Key> list;

    public LRU() {
        map = new HashMap<>();
        list = new LinkedList<>();
    }

    public void visit(Key key) {
        Integer pos = map.get(key);
        list.remove(pos);
        list.addFirst(key);
        for (int i = 0; i < list.size(); i++) {
            map.put(list.get(i), i);
        }
    }

    public Key delete() {
        Key key = list.removeLast();
        map.remove(key);
        return key;
    }

    public static void main(String[] args) {
        LRU<String> lru = new LRU<>();

    }

}
