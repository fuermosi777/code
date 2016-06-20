import java.util.Arrays;

public class RingBuffer<Item> {

    Item[] a;
    int left;
    int right;
    int N;

    public RingBuffer(int N) {
        a = (Item[]) new Object[N];
        left = 0;
        right = 0;
        N = 0;
    }

    public boolean isFull() {
        return N == a.length - 1;
    }
    public boolean isEmpty() {
        return N == 0;
    }

    public int size() {
        return N;
    }

    public void add(Item item) {
        if (!isFull()) {
            if (isEmpty()) {
                right = 0;
                a[right] = item;
                N++;
            } else if (right == a.length - 1) {
                a[0] = item;
                right = 0;
                N++;
            } else {
                a[right + 1] = item;
                right++;
                N++;
            }
        }
    }

    public Item delete() {
        if (!isEmpty()) {
            if (left == a.length - 1) {
                Item item = a[left];
                a[left] = null;
                left = 0;
                N--;
                return item;
            } else {
                Item item = a[left];
                a[left] = null;
                left++;
                N--;
                return item;
            }
        } else {
            return null;
        }
    }

    public static void main(String[] args) {
        RingBuffer<Integer> r = new RingBuffer<>(10);
        r.add(1);System.out.println(Arrays.toString(r.a));
        r.add(3);System.out.println(Arrays.toString(r.a));
        r.add(4);System.out.println(Arrays.toString(r.a));
        r.add(3);System.out.println(Arrays.toString(r.a));
        r.add(3);System.out.println(Arrays.toString(r.a));
        r.delete();System.out.println(Arrays.toString(r.a));
    }

}