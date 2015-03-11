function inFutureDate(year, month, day) {
    var currentTime = new Date();
    var currentDate = currentTime.getDate();
    var currentMonth = currentTime.getMonth() + 1;
    var currentYear = currentTime.getFullYear();

    if (year == currentYear) {
        if ((month == currentMonth && day > currentDate) || (month > currentMonth)) {
            return true;
        }
    }
    return false;
}

function isLeapYear(year) {
    return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
}

function isThirtyDayMonth(month) {
    var monthList = [4, 6, 9, 11];
    for (var key = 0; key < 4; key++) {
        if (monthList[key] == month)
            return true;
    }
    return false;
}

function isDOBEmptyOrZero(year, month, day) {
    if(!day || !month || !year) {
        return true;
    } else if(day == 0 || month == 0 || year == 0) {
        return true;
    }
    return false;
}
function validDate(year, month, day) {
    var isDOBEmpty = isDOBEmptyOrZero(year, month, day);
    if(isDOBEmpty){
        return false;
    }
    if (!year || year < 1900)
        return false;
    if (isLeapYear(year)) {
        if (month == 2 && day > 29)
            return false;
    } else {
        if (month == 2 && day > 28)
            return false;
    }
    if (isThirtyDayMonth(month)) {
        return !(day > 30);
    } else {
        return !(day > 31);
    }
}

// main function to validate date
function validateDOB() {
    var day = $("#day").val();
    var month = $("#month").val();
    var year = $("#year").val();

    var isFutureDate = inFutureDate(year, month, day);
    var isValidDate = validDate(year, month, day);

    if (isFutureDate) {
        $(".future-date").css({display:'block'});
        $(".not-valid").css({display:'none'});
        $(".valid").css({display:'none'});
    }

    if (isValidDate) {
        $(".valid").css({display:'block'});
        $(".not-valid").css({display:'none'});
    } else {
        $(".valid").css({display:'none'});
        $(".not-valid").css({display:'block'});
    }
}
