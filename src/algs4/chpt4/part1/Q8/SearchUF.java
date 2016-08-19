package algs4.chpt4.part1.Q8;

/**
 * Created by hao on 8/19/16.
 */
public class SearchUF {

    private UF G;
    private int s;

    public SearchUF(UF G, int s) {
        this.G = G;
        this.s = s;
    }

    public boolean marked(int v) {
        return G.connected(s, v);
    }

    public int count() {
        int ct = 0;
        int sroot = G.find(s);
        for (int i = 0; i < G.V(); i++) {
            if (sroot == G.find(i) && sroot != i) {
                ct++;
            }
        }
        return ct;
    }

    public static void main(String[] args) {

    }
}
