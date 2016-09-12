package algs4.chpt4.part2;

import java.util.*;

/**
 * Created by hao on 8/27/16.
 */

class Solution2 {
    private class Time implements Comparable<Time> {
        private int hour;
        private int minute;
        private int second;
        public Time(String s) {
            String[] time = s.split(":");
            hour = Integer.parseInt(time[0]);
            minute = Integer.parseInt(time[1]);
            second = Integer.parseInt(time[2]);
        }
        public Time(int hour, int minute, int second) {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
        public int compareTo(Time that) {
            if (seconds() > that.seconds()) return +1;
            if (seconds() < that.seconds()) return -1;
            return 0;
        }
        public String toString() {
            return hour + ":" + minute + ":" + second;
        }
        public Time add(Time that) {
            int seconds = second + that.second;
            int secondRemain = seconds % 60;
            int minutes = minute + that.minute + seconds / 60;
            int minuteRemain = minutes % 60;
            int hours = hour + that.hour + minutes / 60;
            return new Time(hours, minuteRemain, secondRemain);
        }
        public int seconds() {
            return hour * 60 * 60 + minute * 60 + second;
        }
        public int minutes() {
            int minutes = minute;
            if (second > 0) {
                minutes++;
            }
            return hour * 60 + minutes;
        }
        public int cents() {
            if (seconds() < 300) {
                return seconds() * 3;
            } else {
                return minutes() * 150;
            }
        }
    }
    private class Phone implements Comparable<Phone> {
        private int numeric;
        private String source;
        public Phone(String num) {
            this.source = num;
            numeric = Integer.parseInt(num.replaceAll("\\D", ""));
        }
        public int compareTo(Phone that) {
            if (numeric > that.numeric) return +1;
            if (numeric < that.numeric) return -1;
            return 0;
        }
    }
    private class Call {
        private Time time;
        private Phone phone;
        public Call(Time time, Phone phone) {
            this.time = time;
            this.phone = phone;
        }
        public Phone phone() {
            return phone;
        }
        public int bill() {
            return time.cents();
        }
    }

    public int solution(String S) {
        String[] lines = S.split("\n");
        HashMap<Integer, Time> map = new HashMap<>();
        Stack<Call> calls = new Stack<>();
        Stack<Call> chargingCalls = new Stack<>();
        for (String line : lines) {
            String[] combine = line.split(",");
            Time time = new Time(combine[0]);
            Phone phone = new Phone(combine[1]);
            Call call = new Call(time, phone);
            calls.push(call);
            if (!map.containsKey(phone.numeric)) {
                map.put(phone.numeric, time);
            } else {
                Time exist = map.get(phone.numeric);
                map.put(phone.numeric, exist.add(time));
            }
        }
        int longest = calls.peek().phone().numeric;
        for (Integer phone : map.keySet()) {
            int cmp = map.get(phone).compareTo(map.get(longest));
            if (cmp > 0) {
                longest = phone;
            } else if (cmp == 0) {
                if (phone.compareTo(longest) < 0) {
                    longest = phone;
                }
            }
        }


        for (Call call : calls) {
            if (call.phone.numeric != longest) {
                chargingCalls.push(call);
            }
        }

        int cents = 0;
        for (Call call : chargingCalls) {
            cents += call.bill();
        }

        return cents;
    }

    // ---
    public Solution2() {}

    public static void main(String[] args) {
        String s = "00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090";
        Solution2 sol = new Solution2();
        sol.solution(s);
    }
}
