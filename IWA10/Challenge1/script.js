const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 May ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Women's Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`${currentYear}-12-25 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
  9: {
    id: 9,
    name: "New Year Day 2030",
    date: new Date(`January 1, 2030`),
  }
};

const christmas = 6
const futureId = 9

// Check if an item has been assigned to the futureId key
console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`)


// Make a copy of the Christmas object and update the name and date
let copied = { ...holidays[christmas] }
copied.name = 'X-mas Day'
let correctDate = new Date(copied.date)
correctDate.setHours(0)
correctDate.setMinutes(0)
let isEarlier = correctDate.getTime() < holidays[christmas].date.getTime()

// Check if the new date is earlier than the current date
console.log('New date is earlier:', isEarlier)

// Display the changes made to the copied object
console.log(`ID change: false`)
console.log(`Name change: ${copied.name}`)
console.log(`Date change: ${correctDate.getDate().toString()}/${(correctDate.getMonth() + 1).toString()}/${correctDate.getFullYear()}`)

// Format and display the first and last holiday dates
console.log("First holday: " + holidays[9].date.toLocaleDateString("en-ZA"));
console.log("Last holday: " + holidays[2].date.toLocaleDateString("en-ZA"));

const randomHolidayIndex = Math.floor(Math.random() * 9)
const randomHoliday = holidays[randomHolidayIndex]
const randomHolidayDate = randomHoliday.date instanceof Date ?
  `${randomHoliday.date.getDate().toString().padStart(2, '0')}/` +
  `${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/` +
  `${randomHoliday.date.getFullYear()}` :
  randomHoliday.date

console.log ("Random holiday: " + randomHolidayDate)
  
  
