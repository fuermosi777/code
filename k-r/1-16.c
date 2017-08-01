#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);

int main (int argc, char *argv[]) {
    int len;
    char line[MAXLINE];
    while ((len = getLine(line, MAXLINE)) > 0) {
        printf("%s",line);
    }
    return 0;
}

int getLine(char line[], int maxline) {
    int c = 0, i;
    for (i = 0; i < maxline && (c = getchar()) != EOF && c!= '\n'; i++) {
        line[i] = c;
    }
    if (c == '\n') {
        line[i] = c;
        i++;
    }
    line[i] = '\0';
    return i;
}

void copy(char to[], char from[]) {
    int i = 0;
    while ((to[i] = from[i]) == '\0') {
        ++i;
    }
}