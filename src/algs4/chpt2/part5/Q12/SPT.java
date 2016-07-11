package algs4.chpt2.part5.Q12;

import algs4.chpt2.part3.A5.Quick;
import edu.princeton.cs.algs4.In;

/**
 * Created by hao on 7/11/16.
 */
public class SPT {
    private static class Task implements Comparable<Task> {
        private String name;
        private int time;
        public Task(String name, int time) {
            this.name = name;
            this.time = time;
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
        Quick.sort(tasks);
        for (Task t : tasks) {
            System.out.println(t.name());
        }
    }
}
