#include <stdio.h>

int main (int argc, char *argv[]) {
    long counter = 0;
    int c;
    while ((c = getchar()) != EOF) {
        if (c == ' ') {
            ++counter;
            c = ' ';
            if (counter > 1) {
                c = '\0';
            }
        } else {
            counter = 0;
        }
        putchar(c);
    }
    return 0;
}