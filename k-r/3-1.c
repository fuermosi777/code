#include <stdio.h>

#define MAXLINE 1000

int binsearch (int x, int v[], int n);

int main (int argc, char const* argv[]) {
    int list[] = {1,2,3,4,5,6,7,8,9,10};
    
    printf("index: %i",binsearch(7, list, 10));
    
    return 0;
}

int binsearch (int x, int v[], int n) {
    int low, high, mid = 0;
    low = 0;
    high = n - 1;
    while (high - low > 2) {
        mid = (low + high) / 2;
        if (x < v[mid]) {
            high = mid + 1;
        } else {
            low = mid + 1;
        }
        printf("idx: %i, %i, %i\n",low, high, mid);
        printf("val: %i, %i, %i\n",v[low], v[high], v[mid]);
    }
    if (x == v[high]) {
        return high;
    } else if (x == v[mid]) {
        return mid;
    } else if (x == v[low]) {
        return low;
    }
    return -1;
}