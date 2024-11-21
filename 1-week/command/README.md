# 설명
블록블록 개발 스터디 1주차 command 파트에 오신 걸 환영합니다. 여러분들이 배우실 command에 대해 간단하게 적어보았습니다. 앞으로 진행 할 부분과 관련해 참고해주시면 감사드리겠습니다.

# 도움말 출력
다음 명령어를 실행하면 도움말이 출력 됩니다.
``` bash
./help
```

# 현재 상태 보기

### 현재 File과 Directory 목록 보기
``` bash
ls
```

### 현재 경로 확인하기
``` bash
pwd
```


# 이동하기

### Directory 이동하기
- 상위 Directory로 이동하기
``` bash
cd ..
```

- 특정 Directory로 이동하기
``` bash
cd directory_name
```

# 확인하기

### 파일 내용 보기
- vim 편집기를 이용해 파일 내용 보기
``` bash
vi file_name
```

- File 내용을 터미널에 출력하기
``` bash
cat file_name
```

# 생성/삭제하기
- File 생성하기
``` bash
touch file_name
```

- File 삭제하기
``` bash
rm file_name
```

- Directory 삭제하기
``` bash
rm -r directory_name
```

# 복사/이동시키기
- File 복사하기
``` bash
cp file_name
```

- File 또는 Directory 이동시키기
``` bash
mv file_name /directory/path/
```

# 변수 설정
``` bash
export VAR_NAME="something"
```

# 1주차 내용과 관련 없지만 유용한 Command

- 명령어의 사용설명서(manual)을 보여주는 명령어
``` bash
man command_name
```

- cpu, memory 등 process 정보를 보여주는 명령어
``` bash
top
```
``` bash
htop
```

- 사용한 command 이력을 보여주는 명령어
``` bash
history
```

- 파일에 텍스트를 작성하는 명령어
``` bash
echo "Hello World" > hello.txt
```

- 현재 컴퓨터에 할당된 ip address 출력
``` bash
curl ifconfig.me
```

- 현재 LISTEN 중인 port와 관련한 정보 출력
``` bash
lsof -i -P -n | grep LISTEN
```
