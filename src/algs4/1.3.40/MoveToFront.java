public class MoveToFront {
    private class Node {
        char item;
        Node next;
    }

    private Node first;
    private Node last;
    private int N;

    public void add(char c) {
        Node search = searchNode(c);
        if (search != null) {
            moveToFront(search);
        } else {
            insertAtFirst(c);
        }
    }

    // incomplete

    public void insertAtFirst(char c) {

    }

    private Node searchNode(char c) {
        return new Node();
    }

    public void moveToFront(Node node) {

    }

    // ^

    public static void main(String[] args) {
        MoveToFront m = new MoveToFront();
        String s = "woyouyizhixiaomaolvwoconglaiyebuqi";
        for (char c : s.toCharArray()) {
            m.add(c);
        }
    }
}