package main

import "fmt"

func dictionary() {
	dictionary := map[string]string{
		"apple":  "A fruit that is typically red, green, or yellow.",
		"gopher": "A type of rodent found in North America.",
	}

	var word string
	fmt.Println("Enter a word to look up:")
	fmt.Scanln(&word)

	if definition, exists := dictionary[word]; exists {
		fmt.Println("Definition:", definition)
	} else {
		fmt.Println("Word not found in dictionary.")
	}
}
