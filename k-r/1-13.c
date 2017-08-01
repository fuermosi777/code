#include <stdio.h>

#define IN 1 // inside the word
#define OUT 0 // outside the word
#define MAX_SIZE 1000

int main (int argc, char *argv[]) {
    int c;
    int numOfWords = 0;
    int lenOfWords[MAX_SIZE];
    int state = OUT;
    
    while ((c = getchar()) != EOF) {
        if (c != ' ' && state == OUT) {
            state = IN;
            ++numOfWords;
            lenOfWords[numOfWords] = 0;
        }
        if (c != ' ' && state == IN && c != '\n') {
            ++lenOfWords[numOfWords];
        }
        if (c == ' ') {
            state = OUT;
        }
        if (c == '\n') {
            state = OUT;
            printf("Word count: %i\n",numOfWords);
            for (int i = 1; i <= numOfWords; i++) {
                //printf("%i,%i\n", i,lenOfWords[i]);
                for (int j = 0; j < lenOfWords[i]; j++) {
                    printf("=");
                }
                printf("\n");
            }
            break;
        }
    }
    
    return 0;
}