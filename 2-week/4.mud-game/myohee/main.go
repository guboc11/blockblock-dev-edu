package main

import (
	"fmt"
)

func main() {
	var name string
	fmt.Println("냉장고 어드벤처에 오신 것을 환영합니다!")
	fmt.Println("이름을 알려주세요!")
	fmt.Scanln(&name)

	fmt.Println(name, "님은 지금부터 셰프가 되어 냉장고에서 요리를 위한 재료를 준비합니다.\n")

	fmt.Println(name, "셰프님, 다음 중 음식을 만들고 싶나요?")
	var food = [2]string{"김밥", "찌개"}
	fmt.Println(food)
	var select_food string
	fmt.Scanln(&select_food)

	var gimbap_ingredient = []string{"김", "참기름", "소금", "밥", "단무지"}
	var jjigae_ingredient = []string{"물", "육수"}
	var ingredient = []string{"시금치", "오이", "당근", "햄", "계란", "마늘", "소금", "참기름", "간장", "소고기", "돼지고기", "닭고기", "양파", "대파"}

	if select_food == "김밥" {
		fmt.Println("김밥 재료는", gimbap_ingredient, "입니다.")
		fmt.Println("추가 재료를 선택하세요.", ingredient)
		var additional_ingre string
		fmt.Scanln(&additional_ingre)
		fmt.Println("선택한 김밥은 ", additional_ingre, "김밥입니다.")

	} else if select_food == "찌개" {
		fmt.Println("찌개 재료는", jjigae_ingredient, "입니다.")
		fmt.Println("추가 재료를 선택하세요.", ingredient)
		var additional_ingre string
		fmt.Scanln(&additional_ingre)
		fmt.Println("선택한 김밥은 ", additional_ingre, "찌개입니다.")
	}

}
