import java.io.File;
import java.util.Arrays;

public class FileLister {
    public static void listChildren(File parent) {
        System.out.println(parent.getName());
        if (parent.isDirectory()) {
            File[] fs = parent.listFiles();
            for (int i = 0; i < fs.length; i++) {
                if (fs[i].isDirectory()) {
                    listChildren(fs[i]);
                } else {
                    System.out.println(fs[i].getName());
                }
            }
        }
    }
    public static void main(String[] args) {
        File root = new File("/Users/hao/workspace/exercise/src");
        File[] rootFiles = root.listFiles();
        for (int i = 0; i < rootFiles.length; i++) {
            listChildren(rootFiles[i]);
        }
    }
}