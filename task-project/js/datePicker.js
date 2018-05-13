
function Datepicker(data) {

    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var selectedMonthNumber = data.date.getMonth();
    var selectedYear = data.date.getFullYear();

    this.create = function () {
        this.getCurrentMonth();
    }

    this.getNextMonth = function () {
        selectedMonthNumber++;
        if (selectedMonthNumber > 11) {
            selectedMonthNumber = 0;
            selectedYear++;
        }
        return selectedMonthNumber;
    }

    this.getPrevMonth = function () {
        selectedMonthNumber--;
        if (selectedMonthNumber < 0) {
            selectedMonthNumber = 11;
            selectedYear--;
        }
        return selectedMonthNumber;
    }

    this.getCurrentMonth = function () {
        var monthWeeks = generateMonthWeeks(new Date().getMonth(), new Date().getFullYear());
        render(monthWeeks);
    }

    this.getSelectedMonth = function () {
        return selectedMonthNumber;
    }

    this.getSelectedYear = function () {
        return selectedYear;
    }

    this.getMonthArray = function () {
        return MONTH;
    }

    this.getDaysArray = function () {
        return DAYS;
    }

    this.getDaysInMonth = function (month, year) {
        return new Date(year, month + 1, 0).getDate();
    };

    this.getFirstDayInMonth = function (month, year) {
        return new Date(year, month, 1).getDay();
    };

    this.getWeeksInMonth = function (month, year) {
        var firstDay = this.getFirstDayInMonth(month, year);
        return Math.ceil((this.getDaysInMonth(month, year) + firstDay) / 7);
    }

    this.getMonthDayNumbersArray = function (daysInMonth) {
        var daysNumber = [];
        for (var dayNumber = 1; dayNumber < daysInMonth + 1; dayNumber++) {
            daysNumber.push(dayNumber);
        }
        return daysNumber[Symbol.iterator]();
    }

    this.getCurrentDay = function () {
        return this.getCurrentMonth.getFullYear()
    }
}