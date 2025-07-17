let paisA = 80000
let paisB = 200000

for (let i = 1; paisA < paisB; i++) {
    paisA = paisA * 1.03
    paisA = parseInt(paisA)
    paisB = paisB * 1.015
    paisB = parseInt(paisB)
    console.log('==================')
    console.log(`ano: ${i}\nPaís A: ${paisA}\nPais B: ${paisB}`)
}
//testegitpull
process.exit()
