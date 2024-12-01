package main

import "fmt"

func main() {
	var input string
	for {
		fmt.Println("당신은 국가의 비밀 요원이 되었습니다. 당신은 지금부터 중요한 기밀 정보를 수집하고 적의 음모를 저지하여 무사히 복귀해야 합니다. 아무 키를 눌러 첩보 활동을 시작하세요")
		fmt.Scanln()
		fmt.Println("적의 요새에 잠입하기 위해 어떤 방법을 택해야 할까요?")
		fmt.Println("a: 뒷문을 통해 몰래 침투한다")
		fmt.Println("b: 정문으로 들어간다")
		fmt.Scanln(&input)
		if input == "a" {
			// 'a'를 입력한 경우
			fmt.Println("담을 넘다 경비원에게 발각되었습니다.미션 실패 입니다")
			// 'r'을 입력하면 다시 처음으로 돌아가고, 'q'를 입력하면 종료
			var continueInput string
			fmt.Println("게임을 재시도 하려면 'r'을 입력하고, 종료하려면 'q'를 입력하세요:")
			fmt.Scanln(&continueInput)

			if continueInput == "r" {
				continue // 루프 처음으로 돌아가기
			} else if continueInput == "q" {
				break // 프로그램 종료
			} else {
				fmt.Println("잘못된 입력입니다.")
			}
		} else if input == "b" {
			fmt.Println("정문으로 들어오니 경비원이 보입니다 당신은 어떻게 행동하시겠습니까")
			fmt.Println("a: 경비원에게 뇌물을 준다는 조건을 걸어본다")
			fmt.Println("b: 경비원과 맞다이")
			var continueInput string
			fmt.Scanln(&continueInput)
			if continueInput == "a" {
				fmt.Println("충성심과 착실함으로 가득찬 경비원에게 그딴 허튼 수는 안먹힙니다. 미션 실패")
				fmt.Println("게임을 재시도 하려면 'r'을 입력하고, 종료하려면 'q'를 입력하세요:")
				fmt.Scanln(&continueInput)

				if continueInput == "r" {
					continue // 루프 처음으로 돌아가기
				} else if continueInput == "q" {
					break // 프로그램 종료
				} else {
					fmt.Println("잘못된 입력입니다.")
				}
			} else if continueInput == "b" {
				fmt.Println("운 좋게 경비원의 뚝배기를 쳐 경비원이 기절했습니다. 이제 적의 요새 보물 창고 앞에 선 당신. 비밀번호를 입력해야 합니다.")
				fmt.Println("a: 적 보스의 생일을 입력해본다")
				fmt.Println("b: “경비원의 뚝배기도 깼으니 창고 뚝배기도 꺨 수 있겠지?”")
				var continueInput string
				fmt.Scanln(&continueInput)
				if continueInput == "a" {
					fmt.Println("“그렇게 쉽게 뚫리겠냐?” 온갖 보안장치가 활성화되며 미션실패")
					fmt.Println("재시도하려면 'r'을 입력하고, 종료하려면 'q'를 입력하세요:")
					fmt.Scanln(&continueInput)

					if continueInput == "r" {
						continue // 루프 처음으로 돌아가기
					} else if continueInput == "q" {
						break // 프로그램 종료
					} else {
						fmt.Println("잘못된 입력입니다.")
					}
				} else if continueInput == "b" {
					fmt.Println("잠금 장치의 약점을 정확히 가격한 당신. 이제 눈앞에 보이는 기밀 정보가 들어있는 usb를 들고 나가면 됩니다. 하지만 눈앞에 수억원의 현금도 같이 보입니다.")
					fmt.Println("a: usb만 들고 빠르게 도망간다")
					fmt.Println("b: 이왕 이렇게 된거 현금도 들고 나간다")
					var continueInput string
					fmt.Scanln(&continueInput)
					if continueInput == "a" {
						fmt.Println("축하합니다! 미션 성공입니다!")
						fmt.Println("계속하려면 'r'을 입력하고, 종료하려면 'q'를 입력하세요:")
						fmt.Scanln(&continueInput)

						if continueInput == "r" {
							continue // 루프 처음으로 돌아가기
						} else if continueInput == "q" {
							break // 프로그램 종료
						} else {
							fmt.Println("잘못된 입력입니다.")
						}
					} else if continueInput == "b" {
						fmt.Println("과욕이 부른 참사...현금다발이 무거워 도망 가는 길에 잡혀버려 미션 실패...")
						fmt.Println("게임을 다시 하려면 'r'을 입력하고, 종료하려면 'q'를 입력하세요:")
						fmt.Scanln(&continueInput)
						if continueInput == "r" {
							continue // 루프 처음으로 돌아가기
						} else if continueInput == "q" {
							break // 프로그램 종료
						} else {
							fmt.Println("잘못된 입력입니다.")
						}
					}
				}
			} else {
				fmt.Println("잘못된 입력입니다.")
			}
		} else {
			fmt.Println("잘못된 입력입니다. 'a' 또는 'b'를 입력해주세요.")
		}
	}
}
