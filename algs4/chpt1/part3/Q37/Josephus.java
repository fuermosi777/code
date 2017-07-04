public class Josephus {
    private Person current;
    private Person last;
    private int N;

    private class Person {
        int pos;
        Person next;
    }

    public Josephus(int size) {
        N = 0;

        // sit in a circle
        for (int i = 0; i < size; i++) {
            Person one = new Person();
            one.pos = i;
            if (i == 0) {
                current = one;
            }
            if (last == null) {
                last = one;
            } else {
                last.next = one;
                last = one;
            }
            if (i == size - 1) {
                one.next = current;
            }
            N++;
        }
    }

    public Person killAfter(Person target) {
        if (N == 2) {
            Person toKill = target.next;
            target.next = null;
            N--;
            System.out.println("Kill " + toKill.pos);
            return toKill;
        } else if (N > 2) {
            Person toKill = target.next;
            target.next = target.next.next;
            System.out.println("Kill " + toKill.pos);
            N--;
            return toKill;
        } else {
            System.out.println("No man to kill");
            return null;
        }
    }

    public int getLuckyOne(int call) {

        while (N > 1) {
            System.out.println("New round begin, current person position: " + current.pos);
            Person personToKill = current;
            for (int i = 1; i <= call - 2; i++) {
                personToKill = personToKill.next;
            }
            Person toKill = killAfter(personToKill);
            if (N > 2) {
                current = personToKill.next;
            } else {
                current = toKill.next;
            }
            System.out.println("Round close, " + N + " person left");
        }
        System.out.println("All rounds finished " + current.pos);
        return current.pos;
    }

    public static void main(String[] args) {
        Josephus j = new Josephus(7);
        System.out.println("Safe position: " + j.getLuckyOne(3));
    }
}