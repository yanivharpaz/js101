function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function formatDate(date) {
    // return date.getFullYear() + "-" + String((date.getMonth() + 1)).padStart(2, '0') + "-" +  String(date.getDate()).padStart(2, '0');
    return String((date.getMonth() + 1)).padStart(2, '0') + "-" +  String(date.getDate()).padStart(2, '0');
}

function dateToNumber(date) {
    date_str = date.getFullYear() + String((date.getMonth() + 1)).padStart(2, '0') + String(date.getDate()).padStart(2, '0');
    return parseInt(date_str);
}

let period_length      = 42;
let long_period_length = 84;
let line_break         = 7;
let completed_bgcolor  = "#559900";
let today_bgcolor      = "#99cc00";
let togo_bgcolor       = "#999999";
let togo_long_bgcolor  = "#777777";

let base_day  = new Date("2022-09-24");
let first_day = new Date("2022-10-22");

let today  =  new Date();
let iToday = dateToNumber(today)

if (iToday >= dateToNumber(first_day)) {
    base_day = first_day;
}

document.write('<tr>');

for (let i = 1; i <= long_period_length; i++) {
    let current_day = addDays(base_day, i);
    let iCurrentDay = dateToNumber(current_day);
    let current_date_string = formatDate(current_day);

    if (iCurrentDay < iToday) {
        bgcolor = completed_bgcolor;
    } else if (iCurrentDay == iToday) {
        bgcolor = today_bgcolor;
    } else if (i <= period_length){
        bgcolor = togo_bgcolor;
    } else {
    bgcolor = togo_long_bgcolor;
}

    if (i % line_break === 1) {
        document.write('</tr><tr>');
    }
    document.write(`<td bgcolor="${bgcolor}" align="center" class="yhtxt">`)
    document.write( `  ${i} | ${current_date_string} &nbsp;<br /><br /> `);
    // document.write( ` ${i} &nbsp; `);
    document.write( "</td> ");
}

// document.write('</tr></table>');
document.write('</tr>');



