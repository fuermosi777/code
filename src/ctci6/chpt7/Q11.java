package ctci6.chpt7;

import java.util.TreeMap;

/**
 * Created by hao on 10/15/16.
 */
public class Q11 {

    public class File {
        public String path;
        public boolean isDir;
        private TreeMap<String, Boolean> children;
        public File(String path) {
            this.path = path;
        }
    }

    public class FileSystem {
        private File root;
        public FileSystem(String path) {

        }
    }

    public Q11() {
    }

    public static void main(String[] args) {
        Q11 q = new Q11();
    }

}
