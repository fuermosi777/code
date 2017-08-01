#include <stdio.h>

// C to F
float cToF(float c);

int main (int argc, char *argv[]) {
    for (int i = 0; i < 100; i++) {
        printf("%d, %3.0f\n",i,cToF(i));
    }
    
    return 0;
}

float cToF(float c) {
    float f;
    f = c * 1.8 + 32;
    return f;
}