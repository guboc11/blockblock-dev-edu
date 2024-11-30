#include <stdio.h>

void someFunction() {
    printf("Some function is executed!\n");
}

int main() {
    int a = 0;
    int condition = 0; // 1 for true, 0 for false

    for (int i = 0; i < 5; i++) {
        a = a + 1;
    }

    if (condition) {
        someFunction();
    }

    printf("value a is %d\n", a);

    return 0;
}
