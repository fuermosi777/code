#include <stdio.h>
int strend(char *s, char *t);
void strcpy_c(char *s, char *t);

int main (int argc, char const* argv[]) {
    char *s = "you are";
    char *t = "something";
    strend(s, t);
    printf("%s",s);

    return 0;
}

int strend(char *s, char *t) {
    while (*++s)
        ;
    while ((*s++ = *t++))
        ;
    return 0;
}

void strcpy_c(char *s, char *t) {
    int i;
    i = 0;
    while ((*s = *t) != '\0') {
        s++;
        t++;
    }
}