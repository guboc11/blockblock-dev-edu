// package main

// import "fmt"

// func main() {
// 	var name string

// 	fmt.Println("리버스 할리갈리에 오신 것을 환영합니다!")
// 	fmt.Println(" 과일 이름을 입력해주세요")
// 	fmt.Scanln(&name)

// 	if name != "" {
// 		fmt.Println("100개의" + name + "을/를 제공합니다. 최대한 빠르게 과일을 모두 소진하세요!")
// 	} else {
// 		fmt.Println("과일 이름을 입력해주세요.")
// 	}
// }

package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano()) // 랜덤 시드 설정
	var name string
	var userInput int
	total := 100

	fmt.Println("리버스 할리갈리에 오신 것을 환영합니다!")
	fmt.Println("과일 이름을 입력해주세요:")
	fmt.Scanln(&name)

	if name == "" {
		fmt.Println("과일 이름을 입력해주세요.")
		return
	}

	fmt.Printf("100개의 %s을/를 제공합니다. 최대한 빠르게 과일을 모두 소진하세요!\n", name)

	for total > 0 {
		randomNum := rand.Intn(6) // 0에서 5 사이의 랜덤 숫자 생성
		fmt.Println("0에서 5 사이의 숫자를 입력하세요:")
		fmt.Scanln(&userInput)

		if userInput < 0 || userInput > 5 {
			fmt.Println("0에서 5 사이의 숫자만 입력해주세요.")
			continue
		}

		if randomNum+userInput == 5 {
			total += 5
			fmt.Printf("\n랜덤으로 제공된 숫자는 %d입니다.\n", randomNum)
			fmt.Printf("합이 5입니다! +5 추가됩니다. 현재 총 %d개의 %s이/가 있습니다.\n", total, name)
		} else {
			total -= userInput
			fmt.Printf("\n랜덤으로 제공된 숫자는 %d입니다.\n", randomNum)
			fmt.Printf("합이 5가 아닙니다. -%d 차감됩니다. 현재 총 %d개의 %s이/가 있습니다.\n", userInput, total, name)
		}

		if total == 95 {
			//fmt.Println("이럴수가, 할리갈리의 능력자이시군요! 재능이 공평해지도록, 과일을 40개 빼앗도록 하겠습니다")
			fmt.Println("처음부터 5를 던지시다니, 당돌하시네요. 제맘대로 과일을 40개 빼앗도록 하겠습니다")
			total -= 40
			fmt.Printf("앞으로 남은 과일은 55개입니다!")
		}

		if total == 77 {
			fmt.Println("\n🎉 행운의 럭키 세븐을 두 개나 만나셨군요!")
			fmt.Println("행운을 맞이하신 것을 환영합니다!")
			fmt.Printf("선물로 77개의 %s을/를 더 드립니다.\n", name)
			total += 77
			fmt.Printf("현재 총 %d개의 %s이/가 있습니다.\n", total, name)
		}

		if total == 50 {
			fmt.Println("\n🎉 과일을 벌써 절반이나 잃으셨군요!")
			fmt.Println("흠.. 남은 과일마저 타노스해보겠습니다.")
			fmt.Println("아이엠타노스!")
			total /= 2
			fmt.Printf("이제 당신에게 남은 %s은/는 %d개입니다.", name, total)
		}

		if total == 10 {

			fmt.Println("과일이 10개 남았습니다. 거의 다 왔네요! 끝날 생각에 신나시죠?")
			fmt.Println("보물 상자를 드리겠습니다. 열어보시겠습니까? 1.예 2.아니요 ")
			var gift int
			fmt.Scanln(&gift)
			if gift == 1 {
				fmt.Println("상자 속에는 얼린 과일이 들어있네요. 얼린 과일을 과일바구니에 넣으시겠습니까? 1.예 2.아니요 ")
				var icedfruit int
				fmt.Scanln(&icedfruit)
				if icedfruit == 1 {
					fmt.Println("으악! 얼린 과일 때문에 나머지 과일들이 다 얼어버렸군요!.과일을 다 버려야 하겠네요.")
					fmt.Println("축하합니다, 지름길로 0에 도달하셨습니다!")
					total = 0
					break
				}
			} else if gift != 1 {
				fmt.Println("보물을 드렸는데.. 안 받으시다니 서운하군요. 서운하니까 과일을 더 드릴겁니다. 50개 추가요!")
				total += 50
			}
		}
	}

	fmt.Printf("\n게임 종료! %s이/가 모두 소진되었습니다. 즐거운 시간 되셨길 바랍니다!\n", name)
}
