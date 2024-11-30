package main

import "fmt"

func print_name() {
	var name string

	fmt.Println("What is your name?")
	fmt.Scanln(&name)

	if name != "" {
		fmt.Println("Hello, " + name + "!")
	} else {
		fmt.Println("Please enter your name.")
	}
}
