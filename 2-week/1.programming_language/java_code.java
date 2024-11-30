public class Main {
    public static void someFunction() {
        System.out.println("Some function is executed!");
    }

    public static void main(String[] args) {
        int a = 0;
        boolean condition = false; // true or false

        for (int i = 0; i < 5; i++) {
            a = a + 1;
        }

        if (condition) {
            someFunction();
        }

        System.out.println("value a is " + a);
    }
}
