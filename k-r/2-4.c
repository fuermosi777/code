#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);
void reverse(char to[], char from[], int length);
int htoi(char string[]);
void squeeze(char s1[], char s2[]);

int main (int argc, char const* argv[]) {
    char init[] = "abcdefg";
    char line[MAXLINE];
    while (getLine(line, MAXLINE)) {
        squeeze(init, line);
        printf("%s",init);
    }
    
    return 0;
}

void squeeze(char s1[], char s2[]) {
    int i, j;
    i = j = 0;
    for (i; s2[i] != '\0'; i++) {
        int target = s2[i];
        int x, y;
        for (x = y = 0; s1[x] != '\0'; x++) {
            if (s1[x] != target) {
                s1[y] = s1[x];
                y++;
            }
        }
        s1[y] = '\0';
    }
}