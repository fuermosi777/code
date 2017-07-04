package algs4.chpt2.part5.Q10;

import java.util.Arrays;

/**
 * Created by hao on 7/11/16.
 */
public class Version implements Comparable<Version> {
    private int v1;
    private int v2;
    private int v3;
    public Version(String versionStr) {
        String[] strs = versionStr.split("\\.");
        this.v1 = Integer.parseInt(strs[0]);
        this.v2 = Integer.parseInt(strs[1]);
        this.v3 = Integer.parseInt(strs[2]);
    }
    public String toString() {
        return v1 + "." + v2 + "." + v3;
    }
    public int compareTo(Version that) {
        if (this.v1 == that.v1 && this.v2 == that.v2 && this.v3 == that.v3) return 0;
        if (this.v1 < that.v1) {
            return -1;
        } else if (this.v2 < that.v2) {
            return -1;
        } else if (this.v3 < that.v3) {
            return -1;
        }
        return +1;

    }
    public static void main(String[] args) {
        Version v = new Version("115.1.1");
        Version v2 = new Version("115.10.1");
        System.out.print(v.compareTo(v2));
    }
}
