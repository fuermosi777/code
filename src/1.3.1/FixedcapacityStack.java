public class FixedcapacityStack<Item> {
    private Item[] a;
    private int N;
    public FixedcapacityStack(int cap) {
        a = (Item[]) new Object[cap];
    }
    public boolean isEmpty() {
        return N == 0;
    }
    public boolean isFull() {
        return N == a.length - 1;
    }
    public int size() {
        return N;
    }
    public void push(Item item) {
        a[N++] = item;
    }
    public Item pop() {
        N -= 1;
        return a[N];
    }
}