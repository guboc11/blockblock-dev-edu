package main

import "fmt"

func intro() string {
	var name string
	fmt.Println("냉장고 어드벤처에 오신 것을 환영합니다!")
	fmt.Println("이름을 알려주세요!")
	fmt.Scanln(&name)
	return name
}
