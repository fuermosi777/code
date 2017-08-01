#include <stdio.h>

#define MAX_SIZE 1000
#define NOTFOUND 0
#define FOUND 1

int main (int argc, char *argv[]) {
    int c;
    int numOfChar = 0;
    char input[MAX_SIZE];
    int ninput[MAX_SIZE];
    int foundState = NOTFOUND;
    
    while ((c = getchar()) != EOF) {
        if (c == '\n') {
            printf("Char count: %i\n", numOfChar);
            for (int i = 1; i <= numOfChar; i++) {
                printf("%i ,%i\n", input[i], ninput[i]);
            }
            break;
        } else {
            if (numOfChar == 0) {
                numOfChar++;
                input[numOfChar] = c;
                ninput[numOfChar] = 1;
            } else {
                for (int i = 0; i < numOfChar; i++ ) {
                    if (c == input[i]) {
                        ninput[i]++;
                        foundState = FOUND;
                        break;
                    }
                }
                if (foundState == FOUND) {
                    foundState = NOTFOUND;
                } else {
                    numOfChar++;
                    input[numOfChar] = c;
                    ninput[numOfChar] = 1;
                }
            }
        }
    }
    
    return 0;
}