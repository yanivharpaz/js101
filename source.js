function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function formatDate(date) {
    return date.getFullYear() + "-" + String((date.getMonth() + 1)).padStart(2, '0') + "-" +  String(date.getDate()).padStart(2, '0');
}

function dateToNumber(date) {
    date_str = date.getFullYear() + String((date.getMonth() + 1)).padStart(2, '0') + String(date.getDate()).padStart(2, '0');
    return parseInt(date_str);
}

let period_length = 90;
let line_break = 7;
let completed_bgcolor = "#77aa00";
let today_bgcolor     = "#ffcc00";
let togo_bgcolor      = "#999999";

let base_day  = new Date("2022-09-24");
let first_day = new Date("2022-10-23");

let today  =  new Date();
let iToday = dateToNumber(today)

document.write('<tr>');

for (let i = 1; i <= period_length; i++) {
    let current_day = addDays(base_day, i);
    let iCurrentDay = dateToNumber(current_day);
    let current_date_string = formatDate(current_day);

    if (iCurrentDay < iToday) {
        bgcolor = completed_bgcolor;
    } else if (iCurrentDay == iToday) {
        bgcolor = today_bgcolor;
    } else {
        bgcolor = togo_bgcolor;
    }
    
    if (i % line_break === 1) {
        document.write('</tr><tr>');
    }
    document.write(`<td bgcolor="${bgcolor}">`)
    document.write( `${i}<br /><br > ${current_date_string} `);
    document.write( "</td> ");
}

// document.write('</tr></table>');
document.write('</tr>');



