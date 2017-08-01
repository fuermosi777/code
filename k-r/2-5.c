#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);
void reverse(char to[], char from[], int length);
int htoi(char string[]);
void squeeze(char s1[], char s2[]);
int any(char s1[], char s2[]);

int main (int argc, char const* argv[]) {
    char init[] = "abcdefg";
    char line[MAXLINE];
    while (getLine(line, MAXLINE)) {
        int place = any(init, line);
        printf("%i",place);
    }
    
    return 0;
}

/* if any char in s2 also in s1, return the place where the char first appears */
int any(char s1[], char s2[]) {
    for (int i = 0; s1[i] != '\0'; i++) {
        for (int j = 0; s2[j] != '\0'; j++) {
            if (s1[i] == s2[j]) {
                return i;
            }
        }
    }
    return -1;
}