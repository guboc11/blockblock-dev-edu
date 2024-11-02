package main

import (
	"encoding/json"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/spf13/afero"
)

type BalanceData struct {
	Balance int `json:"balance"`
}

func writeBalance(fs afero.Fs, filePath string, balance int) {
	balanceData := BalanceData{Balance: balance}
	data, _ := json.Marshal(balanceData)
	if err := afero.WriteFile(fs, filePath, data, 0644); err != nil {
		fmt.Println("Error writing file:", err)
		return
	}
}

func readBalance(fs afero.Fs, filePath string) (int, error) {
	// 파일에서 JSON 형식 데이터 읽기
	content, err := afero.ReadFile(fs, filePath)
	if err != nil {
		fmt.Println("Error reading file:", err)
		return -1, err
	}

	// JSON 데이터 파싱
	var loadedData BalanceData
	if err := json.Unmarshal(content, &loadedData); err != nil {
		fmt.Println("Error unmarshalling JSON:", err)
		return -1, err
	}
	return loadedData.Balance, nil
}

func main() {
	app := fiber.New()

	fs := afero.NewOsFs()
	filePath := "balance.json"

	// writeBalance(fs, filePath, 10000)

	// CORS 미들웨어 추가
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", // 모든 도메인 허용
		AllowMethods: "GET,POST,HEAD,PUT,DELETE",
	}))

	// GET 요청 예제
	app.Get("/balance", func(c *fiber.Ctx) error {
		balance, _ := readBalance(fs, filePath)
		return c.JSON(fiber.Map{"balance": balance})
	})

	// POST 요청 예제
	app.Post("/balance/withdraw", func(c *fiber.Ctx) error {
		balance, _ := readBalance(fs, filePath)
		balance = balance - 1000
		writeBalance(fs, filePath, balance)

		return c.JSON(fiber.Map{"balance": balance})
	})

	app.Listen(":5000") // 5000 포트에서 실행
}
