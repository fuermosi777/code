#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void reverse(char to[], char from[], int length);

int main (int argc, char const* argv[]) {
    int len, i = 0;
    char line[MAXLINE];
    char reverseLine[MAXLINE];

    while ((len = getLine(line, MAXLINE)) > 0) {
        reverse(reverseLine,line,len);
        printf("%s",reverseLine);
        i++;
    }
    if (i > 0) {

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

void reverse(char to[], char from[], int length) {
    int i = 0;
    int j = length - 1;
    while ((to[i] = from[j]) != '\0') {
        ++i;
        --j;
    }
}