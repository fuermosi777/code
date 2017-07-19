public class DualLinkedList<Item> {

    private class DoubleNode {
        DoubleNode prev;
        DoubleNode next;
        Item item;
    }

    private DoubleNode first;
    private DoubleNode last;
    private int size;

    public void insertAtBegining(Item item) {
        DoubleNode newNode = new DoubleNode();
        newNode.item = item;
        newNode.prev = null;
        if (size == 0) {
            first = newNode;
        } else {
            DoubleNode oldFirst = first;
            newNode.next = oldFirst;
            first = newNode;
        }
        size++;
    }

    public void insertAtEnd(Item item) {

    }



    public void insertBefore(DoubleNode node, Item item) {

    }

    public void insertAfter(DoubleNode node, Item item) {

    }



    public static void main(String[] args) {

    }
}