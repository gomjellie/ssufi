# ssufi
ssu wifi cracker

## install

[크롬스토어](https://chrome.google.com/webstore/detail/ssufi/ebgfflahnnmjblcideohjocpckgegggj?hl=ko)에서 설치

## ssufi 는 뭔가요?

숭실대 와이파이(captive network)를 자동으로 잡아주는 크롬 플러그인 입니다.

## 작동원리

auth.soongsil.ac.kr 페이지가 뜨면 저장된 정보로 로그인한다.

## mac os 에서 따로 해줘야 하는작업

Captive Network Assistant.app 을 꺼줘야한다.

방법은 3가지가 있는데

1. sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.captive.control Active -boolean false

2. /etc/hosts 에 127.0.0.1 captive.apple.com를 추가한다 (captive.apple.com 에서 응답이 돌아오지 않으면 captive network assistant 어플이 켜지는데 captive.apple.com를 로컬호스트로 돌려버리는 꼼수)

3. captive network assistant 어플 이름 바꾸기

sudo mv /System/Library/CoreServices/Captive\ Network\ Assistant.app /System/Library/CoreServices/.Captive\ Network\ Assistant.app 

