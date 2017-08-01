#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);
void reverse(char to[], char from[], int length);
int htoi(char string[]);
void squeeze(char s1[], char s2[]);
int any(char s1[], char s2[]);
char lower(char upper);
int binsearch (int x, int v[], int n);
void escape(char s[], char t[]);

int main (int argc, char const* argv[]) {
    char line[MAXLINE];
    char result[MAXLINE];
    int c;
    while ((c = getLine(line, MAXLINE)) > 0) {
        escape(result, line);
        printf("%s",result);
    }

    return 0;
}

void escape(char s[], char t[]) {
    int i = 0;
    int j = 0;
    while (t[i] != '\0') {
        switch (t[i]) {
            case '\t':
                s[j] = 92;
                s[j+1] = 116;
                j++;
                break;
            case '\n':
                s[j] = 92;
                s[j+1] = 110;
                j++;
                break;
            default:
                s[j] = t[i];
                break;
        }
        j++;
        i++;
    }
}