package main

import "fmt"

type Student struct {
	name  string
	grade int
}

func students() {
	var students = []Student{
		{name: "John", grade: 85},
		{name: "Jane", grade: 92},
		{name: "Tom", grade: 78},
	}

	for _, student := range students {
		if student.grade >= 90 {
			fmt.Println(student.name, "is an excellent student!")
		} else if student.grade >= 80 {
			fmt.Println(student.name, "is doing well.")
		} else {
			fmt.Println(student.name, "needs improvement.")
		}
	}
}
