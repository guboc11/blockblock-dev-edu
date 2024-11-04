package main

import (
	"encoding/json"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/spf13/afero"
)

// Afero 파일 시스템 설정
var fs = afero.NewOsFs()

type Balance struct {
	Amount int `json:"balance"`
}

const balanceFilePath = "balance.json"

// 파일에서 balance를 읽어오는 함수
func loadBalance() (int, error) {
	file, err := afero.ReadFile(fs, balanceFilePath)
	if err != nil {
		return 0, err
	}

	var balance Balance
	if err := json.Unmarshal(file, &balance); err != nil {
		return 0, err
	}
	return balance.Amount, nil
}

// 파일에 balance를 저장하는 함수
func saveBalance(amount int) error {
	balance := Balance{Amount: amount}
	data, err := json.Marshal(balance)
	if err != nil {
		return err
	}

	return afero.WriteFile(fs, balanceFilePath, data, 0644)
}

func main() {
	// 기본 balance 값을 파일에 저장 (파일이 없을 경우에만)
	if _, err := fs.Stat(balanceFilePath); err != nil {
		if err := saveBalance(10000); err != nil {
			log.Fatalf("초기 balance 저장 오류: %v", err)
		}
	}

	app := fiber.New()

	// CORS 미들웨어 추가
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",        // 모든 도메인 허용
		AllowMethods: "GET,POST", // 허용할 HTTP 메소드 지정
	}))

	// GET /getBalance API
	app.Get("/getBalance", func(c *fiber.Ctx) error {
		balance, err := loadBalance()
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "잔액을 불러오는 데 실패했습니다.",
			})
		}
		return c.JSON(fiber.Map{
			"balance": balance,
		})
	})

	// POST /withdrawBalance API
	app.Post("/withdrawBalance", func(c *fiber.Ctx) error {
		balance, err := loadBalance()
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "잔액을 불러오는 데 실패했습니다.",
			})
		}

		if balance >= 1000 {
			balance -= 1000
			if err := saveBalance(balance); err != nil {
				return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
					"error": "잔액을 저장하는 데 실패했습니다.",
				})
			}
			return c.JSON(fiber.Map{"balance": balance})
		}
		return c.JSON(fiber.Map{
			"message": "잔액이 부족합니다!",
		})
	})

	// 서버 시작
	app.Listen(":5000")
}
