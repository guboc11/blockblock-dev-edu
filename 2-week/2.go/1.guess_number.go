package main

import "fmt"

func guess_number() {
	var target int = 7
	var guess int

	fmt.Println("Guess the number between 1 and 10:")
	fmt.Scanln(&guess)

	if guess == target {
		fmt.Println("You guessed it right!")
	} else {
		fmt.Println("Try again!")
	}
}
