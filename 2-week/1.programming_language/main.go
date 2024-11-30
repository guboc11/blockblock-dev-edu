package main

import "fmt"

func someFunction() {
	fmt.Println("Some function is executed!")

}

func main() {
	var a = 0
	// var condition = true
	var condition = false

	for i := 0; i < 5; i++ {
		a = a + 1
	}

	if condition {
		someFunction()
	}

	fmt.Println("value a is ", a)

}
