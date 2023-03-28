// zad 1

// for (let i = 1; i<=100 ;i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 5 == 0) {
//         console.log("Fizz")
//     } else if (i % 3 == 0) {
//         console.log("Buzz")
//     } else console.log(i)
// }

// zad 2

// const tab = [1,2,3,4,5,6,7,8,9,0]

// const tabsort = (tablica) => {
//     if (tablica[0] > tablica[1]) {
//         tablica.sort((a, b) => a - b)
//         for (element of tablica) {
//             if (element == 0) element = 1
//             console.log(element)
//         }
//     } else if (tablica[0] < tablica[1]) {
//         tablica.sort((a,b) => b - a)
//         for (element of tablica) {
//             if (element == 0) element = 8
//             console.log(element)
//         }
//     }
// }

// tabsort(tab)

//zad 3

// const deleteLastTab = (tablica) => {
//     const newArray = []
//     for(let i = 0; i<(tablica.length) ;i++) {
//        if (!isNaN(tablica[i]) && tablica[i] !== 0 && tablica[i] !== null && tablica[i] !== false && tablica[i] !== true && tablica[i] !== undefined) {
//         newArray.push(tablica[i])
//        }
//     }
//     console.log(newArray)
// }
// const tablica = [NaN, 0, true, 1, false, -21, '',undefined, 37, null]
// deleteLastTab(tablica)

//zad 4

// const addAnElement = (tablica ,...elementy) => {
    
//     tablica.push(...elementy)
//     return tablica
// }

// const tablica = [1,2,3,4]

// console.log(addAnElement(tablica, "a","b","c","d"))

//zad 5

// const myfunction = (tablica) => {
//     let newArray = [tablica[0]]
//     let pow = 0
//     for (let z = 0; z < tablica.length ;z++) {
//             for (let i = z + 1; i < (tablica.length);i++) {
//                 if (tablica[z] == tablica[i]) {
//                     pow++
//                 }
//             }
//     }
//     console.log(pow)
// }

// const tab = [1,2,3,7,2,1,9,7]

// myfunction(tab)

//zad 6
// const jakstam = (tab1, tab2, tab3, tab4) => {
//     let sum1 = 0
//     let sum2 = 0
//     let sum3 = 0
//     let sum4 = 0
//     let sum = 0
//     for (let i = 0; i < tab1.length ;i++) {
//         sum1 += tab1[i]
//     }

//     for (let i = 0; i < tab2.length ;i++) {
//         sum2 += tab2[i]
//     }

//     for (let i = 0; i < tab3.length ;i++) {
//         sum3 += tab3[i]
//     }

//     for (let i = 0; i < tab4.length ;i++) {
//         sum4 += tab4[i]
//     }
    
//     if (sum1 > sum2 && sum1 > sum3) {
//         console.log("Tablica 1 jest największa")
//     } else if (sum2 > sum1 && sum2 > sum3) {
//         console.log("Tablica 2 jest największa")
//     } else if (sum3 > sum1 && sum3 > sum2) {
//         console.log("Tablica 3 jest największa")
//     } else {
//         console.log("Tablica 4 jest największa")
//     }
// }

// const tab1 = [1,1,1,9]
// const tab2 = [1,1,1,2]
// const tab3 = [1,1,1,3]
// const tab4 = [1,1,1,4]

// jakstam(tab1, tab2, tab3, tab4)