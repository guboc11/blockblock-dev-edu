package main

import "fmt"

func main() {
	// 테스트
	fmt.Println("당신은 좀비 떼가 나타나는 소리를 듣습니다. 무엇을 하시겠습니까?")
	fmt.Println("1. 싸운다")
	fmt.Println("2. 숨는다")
	fmt.Println("3. 도망친다")

	var number int
	fmt.Println("선택하세요 - 1, 2, 3")
	fmt.Scanln(&number)
	fmt.Println("number:",number)

	if number == 1 {
		fmt.Println("좀비를 물리쳤습니다! 그러나 무기를 모두 사용했습니다.")
	} else if number == 2 {
		fmt.Println("안전하게 숨었지만, 동료 한 명이 공포로 인해 도망쳤습니다.")
	} else if number == 3 {
		fmt.Println("무사히 도망쳤지만 체력이 많이 떨어졌습니다.")
	}
}