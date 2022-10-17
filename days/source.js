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

function main() {

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
    console.log(`base_day: ${base_day}`);
    console.log(`first_day: ${first_day}`);
    console.log(`today: ${today}`);
    console.log(`iToday: ${iToday}`);

    for (let i = 1; i <= long_period_length; i++) {
        let current_day = addDays(base_day, i);
        let iCurrentDay = dateToNumber(current_day);
        let current_date_string = formatDate(current_day);

        if (iCurrentDay < iToday) {
            bgcolor = completed_bgcolor;
        } else if (iCurrentDay == iToday) {
            current_day_counter = i;
            bgcolor = today_bgcolor;
            console.log(`Percent complete: ${Math.round(current_day_counter / period_length * 100)}`);
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

    document.write('</tr>');
    progress_table_row =  `<tr><td bgcolor="${togo_long_bgcolor}" colspan="7">`;
    progress_table_row += `<table style="width:${Math.round(current_day_counter / period_length * 100)}%"`;
    progress_table_row += `bgcolor=${completed_bgcolor}><td>&nbsp;</td></table></td></tr>`;
    document.write(progress_table_row);
}

main();


