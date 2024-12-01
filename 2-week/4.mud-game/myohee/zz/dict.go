package main

func dict() {
	var gimbap_ingredient = []string{"김", "참기름", "소금", "밥", "단무지"}
	var jjigae_ingredient = []string{"물", "육수"}
	var ingredient = []string{"시금치", "오이", "당근", "햄", "계란", "마늘", "소금", "참기름", "간장", "소고기", "돼지고기", "닭고기", "양파", "대파"}

	dict := map[string][]string{
		"김밥": gimbap_ingredient,
		"찌개": jjigae_ingredient,
	}

}
