// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length, defaultValue) => {
  return Array.from({ length }, () => defaultValue);
};

const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(6, { week: 0, days: createArray(7, null) });
  let value = null;

  for (let weekIndex in weeks) {
    value = {
      week: parseInt(weekIndex) + 1,
      days: [],
    };

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const day = weekIndex * 7 + dayIndex - startDay + 1;
      const isValid = day > 0 && day <= daysInMonth;

      value.days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : null,
      });
    }

    weeks[weekIndex] = value;
  }

  return weeks;
};

const addCell = (classString, value, isToday) => {
    if (isToday) {
      classString += ' table__cell_today'; // add the "table__cell_today" class for the current date
      value = `${value}`; // wrap the value with a span and add the "blue-text" class to it
    }
  
    return /* html */ `
      <td class="${classString}">
        ${value}
      </td>
    `;
  };

const createHtml = (data) => {
  let result = '';

  for (let week of data) {
    let inner = '';
    inner += addCell('table__cell table__cell_sidebar', `Week ${week.week}`);

    for (let day of week.days) {
      let classString = 'table__cell';
      const today = new Date();
      today.setHours(0, 0, 0, 0); // set the time to 00:00:00:00
      const isToday =
        day.value &&
        new Date(current.getFullYear(), current.getMonth(), day.value).getTime() === today.getTime();
      const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
      const isAlternate = week.week % 2 === 0;

      if (isWeekend) classString += ' table__cell_weekend';
      if (isAlternate) classString += ' table__cell_alternate';

      inner += addCell(classString, day.value || '', isToday);
    }

    result += `<tr>${inner}</tr>`;
  }

  return result;
};

    

  // Only edit above
  
  const current = new Date();
  document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;
  
  const data = createData();
  document.querySelector('[data-content]').innerHTML = createHtml(data);