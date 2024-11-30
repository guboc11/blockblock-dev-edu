package main

import "fmt"

func score_calculator() {
	var scores = [3]int{90, 85, 88}
	var total int = 0
	var average float64

	for _, score := range scores {
		total += score
	}

	average = float64(total) / float64(len(scores))

	if average >= 90 {
		fmt.Println("Excellent!")
	} else if average >= 70 {
		fmt.Println("Good job!")
	} else {
		fmt.Println("Needs improvement!")
	}

	fmt.Printf("Average score: %.2f\n", average)
}
