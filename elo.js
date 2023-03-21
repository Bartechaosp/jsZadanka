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

const tab = [1,2,3,4,5,6,7,8,9,0]

const tabsort = (tablica) => {
    if (tablica[0] > tablica[1]) {
        tablica.sort((a, b) => a - b)
        for (element of tablica) {
            if (element == 0) element = 8
            console.log(element)
        }
    } else if (tablica[0] < tablica[1]) {
        tablica.sort((a,b) => b - a)
        for (element of tablica) {
            if (element == 0) element = 8
            console.log(element)
        }
    }
}

tabsort(tab)