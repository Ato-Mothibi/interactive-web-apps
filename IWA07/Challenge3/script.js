const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = "R" + (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2)
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`
const total = '\n\tTotal amount owed:'
const result = `${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n\n${divider}`

console.log(result)