# 정규표현식(RegExp)
정규식, Regular Expression

## 역할
- 문자검색(search)
- 문자대체(replace)
- 문자추출(extract)

## 테스트사이트
https://regexr.com/

## 정규식
```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제문자
```js
const str = `
010-123-1234
thesecon@gmail.com
the quick brown fox jumps over the lazy dog.
Theasdfg
`
```

## 메소드
메소드 | 문법 | 설명
-- | -- | --
test | `정규식.test(문자열)` | 일치여부(boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(array)
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그(옵션)
플래스 | 설명
-- | --
g | 모든 문자열 일치(global)
i | 영어 대소문자를 구문 않고 일치(ignore case)
m | 여러줄 일치 (muliline)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(line)시작에 있는 ab와 일치
ab$ | 줄(line)끈에 있는 ab와 일치

. | 임의의 한 문자와 일치
a&verbar;b \ a또는b와 일치
ab? | b가 없거나 b와 일치

{3} | 3개연속일치
{3,} | 3개이상연속일치
{3,5} | 3개이상 5개이하(3-5개)연속일치

[abc] | a또는b또는c
[a-z] | a부터 z까지 문자구간 일치(소문자)
[A-Z] | a부터 z까지 문자구간 일치(대문자)
[0-9] | 0-9까지 문자구간일치(숫자)
[가-힣] | 가-힣의 문자구간일치(한글)