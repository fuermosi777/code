#include <stdio.h>

#define MAXLINE 1000

int getLine(char line[], int maxline);
void copy(char to[], char from[]);
void reverse(char to[], char from[], int length);
int htoi(char string[]);

int main (int argc, char const* argv[]) {
    int x;
    char line[MAXLINE];
    while (getLine(line, MAXLINE)) {
        x = htoi(line);
        printf("%i\n",x);
    }
    
    return 0;
}

int htoi(char string[]) {
    int idx = 0;
    int val = 0;
    if (string[idx] == '0' && (string[idx+1] == 'x' || string[idx+1] == 'X')) {
        printf("start with 0x or 0X\n");
        idx = 2;
    } else {
        printf("not hex\n");
        return 0;
    }
    while (string[idx] != '\0') {
        if (string[idx] >= '0' && string[idx] <= '9') {
            val = val * 16 + string[idx] - '0';
        } else if (string[idx] >= 'A' && string[idx] <= 'F') {
            val = val * 16 + string[idx] - 'A' + 10;
        } else if (string[idx] >= 'a' && string[idx] <= 'f') {
            val = val * 16 + string[idx] - 'a' + 10;
        } else {
            printf("value is invalid\n");
            return 0;
        }
        idx++;
    }
    return val;
}