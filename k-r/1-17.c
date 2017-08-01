#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);

int main (int argc, char const* argv[]) {
    int len, i = 0;
    char line[MAXLINE];
    char *lines[MAXLINE];

    while ((len = getLine(line, MAXLINE)) > 0) {
        char *p = line;
        lines[i] = p;
        printf("Line %d: %s\n",i,lines[i]);
        i++;
    }
    if (i > 0) {
        printf("Detect new lines...\nThe number of lines is %d\n", i);
        for (int j = 0 ; j < i; j++) {
            printf("Line %d: %s\n",j, lines[j]);
        }
    } else {
        printf("There is no line");
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