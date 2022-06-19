const str = `
010-123-1234
thesecon@gmail.com
https://gmail.com
http://gmail.com
the quick brown fox jumps over the lazy dog.
Theasdfg
`

//g는 the와 일치하는 것만 gi는 대소문자 구문않고 전부
// const regexp = new RegExp('the', 'gi') 생성자방식
// console.log(str.test(regexp))

//리터럴방식
const regexp = /fox/gi

// console.log(str.match(regexp))
// console.log(regexp.test(str))
// const라 원본은 변경되지 않음
console.log(str.replace(regexp, 'AAA'))
console.log(str)


// let으로 하면 원본도 변경가능
// let str = `
// 010-123-1234
// thesecon@gmail.com
// the quick brown fox jumps over the lazy dog.
// Theasdfg
// `
// const regexp = /fox/gi
// str = str.replace(regexp, "AAA")
// console.log(str)

console.log(str.match(/\.$/g))

console.log(str.match(/./g))
console.log(str.match(/fox|dy/g))
console.log(str.match(/https?/g))

console.log(str.match(/\w{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))

console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/\w/g))
console.log(str.match(/\d{1,}/g))

const h = `   the hello  `
console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g))