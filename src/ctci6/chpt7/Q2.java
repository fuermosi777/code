package ctci6.chpt7;

import algs4.chpt4.part1.A0.SymbolGraph;
import edu.princeton.cs.algs4.Bag;

import java.util.Random;
import java.util.Scanner;

/**
 * Created by hao on 10/9/16.
 */
public class Q2 {

    public enum EmployeeType {
        Respondent(0), Manager(1), Director(2);
        private EmployeeType(int i) {}
    }

    public class Call {
        private long startTime;
        private long endTime;
        public Call() {
            Random rand = new Random();
            startTime = System.currentTimeMillis();
            endTime = startTime + (rand.nextInt(10 - 1) + 1) * 1000;
        }
        public boolean isEnded() {
            long currentTime = System.currentTimeMillis();
            return currentTime > endTime;
        }
    }

    public class Employee {
        private EmployeeType type;
        private Call call;
        private int id;

        public Employee(EmployeeType type, int id) {
            this.type = type;
            this.id = id;
        }
        public void takeCall(Call call) {
            this.call = call;
        }
        public boolean isFree() {
            if (call == null) return true;
            if (call.isEnded()) {
                call = null;
                return true;
            }
            return false;
        }
        public int id() {
            return id;
        }
    }

    public class CallCenter {
        private Bag<Employee> respondents;
        private Bag<Employee> managers;
        private Bag<Employee> directors;

        public CallCenter(int r, int m, int d) {
            respondents = new Bag<>();
            managers = new Bag<>();
            directors = new Bag<>();
            for (int i = 0; i < r; i++) {
                respondents.add(new Employee(EmployeeType.Respondent, i));
            }
            for (int i = 0; i < m; i++) {
                managers.add(new Employee(EmployeeType.Manager, i));
            }
            for (int i = 0; i < d; i++) {
                directors.add(new Employee(EmployeeType.Director, i));
            }
        }
        public void receiveCall(Call call) {
            for (Employee respondent: respondents) {
                if (respondent.isFree()) {
                    respondent.takeCall(call);
                    System.out.println("Respondent " + respondent.id() + " will take the call.");
                    return;
                }
            }
            for (Employee manager : managers) {
                if (manager.isFree()) {
                    System.out.println("A manager will take the call.");
                    manager.takeCall(call);
                    return;
                }
            }
            for (Employee director : directors) {
                if (director.isFree()) {
                    System.out.println("A director will take the call.");
                    director.takeCall(call);
                    return;
                }
            }
            System.out.println("All operators are busy...");
        }
    }

    public Q2() {
        CallCenter center = new CallCenter(3, 1, 1);
        boolean stoped = false;
        while (!stoped) {
            Scanner scan = new Scanner(System.in);
            System.out.println("Type 1 to send a call...");
            int cid = scan.nextInt();
            Call call = new Call();
            center.receiveCall(call);
        }

    }

    public static void main(String[] args) {
        Q2 q = new Q2();
    }

}
