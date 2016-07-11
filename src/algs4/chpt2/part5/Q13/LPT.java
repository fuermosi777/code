package algs4.chpt2.part5.Q13;

import algs4.chpt2.part4.A6.MinPQ;
import algs4.chpt2.part5.Q12.SPT;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 7/11/16.
 */
public class LPT {
    private static class Task implements Comparable<Task> {
        private String name;
        private int time;
        private int progress = 0;

        public Task(String name, int time) {
            this.name = name;
            this.time = time;
        }
        public boolean done() {
            return progress == time;
        }
        public void work() {
            if (!done()) {
                progress++;
            }
        }
        public int compareTo(Task that) {
            if (time > that.time) return 1;
            if (time < that.time) return -1;
            return 0;
        }
        public String name() {
            return name;
        }
    }
    public static void main(String[] args) {
        In stream = new In("/Users/hao/workspace/exercise/src/algs4/chpt2/part5/Q12/tasks.txt");
        String[] lines = stream.readAllLines();
        Task[] tasks = new Task[lines.length];
        for (int i = 0; i < lines.length; i++) {
            String l = lines[i];
            Task t = new Task(l.split(" ")[0], Integer.parseInt(l.split(" ")[1]));
            tasks[i] = t;
        }

        int M = 3;
        MinPQ<Task> pq = new MinPQ<>(3);
        int flag = tasks.length - 1;
        while (flag > -1 || !pq.isEmpty()) {
            Task min = pq.min();
            if (min != null && min.done()) {
                pq.delMin();
                System.out.println(min.name() + " is done!");
            }
            while (!pq.isFull() && flag > -1) {
                System.out.println("start " + tasks[flag].name());
                pq.insert(tasks[flag]);
                flag--;
            }
            for (Task t : tasks) {
                t.work();
            }
        }
    }

}
