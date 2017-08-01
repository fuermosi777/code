#include <stdio.h>

#define IN 1 // inside the word
#define OUT 0 // outside the word

int main (int argc, char *argv[]) {
    int c;
    while ((c = getchar()) != EOF) {
        if (c == ' ') {
            putchar(10);
        } else {
            putchar(c);
        }
    }
    
    return 0;
}