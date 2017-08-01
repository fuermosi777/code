#include <stdio.h>

int main (int argc, char *argv[]) {
    int c;
    while ((c = getchar()) != EOF) {
        if (c == '\t') {
            putchar(92);
            putchar(116);
        } else if (c == '\b') {
            putchar(92);
            putchar(114);
        } else if (c == '\\') {
            putchar(92);
            putchar(92);
        } else {
            putchar(c);
        }
    }
    return 0;
}