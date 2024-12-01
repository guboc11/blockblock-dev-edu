package main

import "fmt"

func main() {
	fmt.Println("어서오세요. 블록블록 머드 게임에 오신 걸 환영합니다.")

	var name string
	fmt.Println("이름을 적어주세요.")
	fmt.Scanln(&name)

	var job_array = []string{"전사", "마법사"}
	var job_number int
	fmt.Println("직업을 골라주세요. 1.전사 2.마법사")
	fmt.Scanln(&job_number)
	var job = job_array[job_number-1]
	fmt.Println("-------------------\n")

	fmt.Printf("캐릭터가 생성되었습니다. 캐릭터의 이름은 %s 이고 직업은 %s 입니다.\n마을로 갑니다.\n", name, job)
	var where_you_go_array = []string{"던전", "상점"}
	var where_you_go_number int
	fmt.Println("어디로 가시겠습니까? 1.던전 2.상점")
	fmt.Scanln(&where_you_go_number)
	var where_you_go = where_you_go_array[where_you_go_number-1]
	fmt.Println("-------------------\n")

	fmt.Printf("%s로 이동하겠습니다.\n", where_you_go)

	if where_you_go == "던전" {
		fmt.Printf("%s에 들어왔습니다.\n", where_you_go)

		var want_fight_number int
		fmt.Println("몬스터가 눈 앞에 보입니다. 싸우시겠습니까? 1.예 2.아니오")
		fmt.Scanln(&want_fight_number)
		fmt.Println("-------------------\n")
		if want_fight_number == 1 {
			fmt.Println("몬스터와 싸웁니다.")
			if job == "전사" {
				fmt.Println("칼을 휘둘렀습니다.")
			} else if job == "마법사" {
				fmt.Println("마법을 발사합니다.")
			}
			fmt.Println("몬스터를 물리쳤습니다.")
		} else if want_fight_number == 2 {
			fmt.Println("몬스터에서 도망칩니다.")
		}
		fmt.Println("-------------------\n")

	} else if where_you_go == "상점" {
		fmt.Printf("%s에 들어왔습니다.\n", where_you_go)

		var purchase_item_number int
		fmt.Println("어떤 걸 구입하시겠습니까? 1.무기 2.물약")
		fmt.Scanln(&purchase_item_number)
		fmt.Println("-------------------\n")

		if purchase_item_number == 1 {
			fmt.Printf("%s 무기를 구입하셨습니다.\n", job)
		} else if purchase_item_number == 2 {
			fmt.Printf("%s 물약을 구입하셨습니다.\n", job)
		}
		fmt.Println("-------------------\n")

	} else {

	}

	fmt.Println("다시 마을로 왔습니다.")
	fmt.Println("게임이 끝났습니다.")

}
