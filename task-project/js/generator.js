function DatepickerGenerator() {

    var dpStyles = {};
    var dpContainer = null;
    var selectDayNum = 0;
    var selectedMonthNumber = 0;
    var selectedYear = 0
    var months = 0;
    var days = 0;
    var datepicker = {};

    this.setdpStyles = function (styles) {
        dpStyles = styles;
    }

    this.generate = function (datepickerService) {
        datepicker = datepickerService;

        selectedYear = datepicker.getSelectedYear();
        months = datepicker.getMonthArray();
        days = datepicker.getDaysArray();
        selectedMonthNumber = datepicker.getSelectedMonth();

        dpContainer = document.createElement("div");
        dpContainer.className = dpStyles.datepicker.container;
        dpContainer.appendChild(generateTitleContainer());
        dpContainer.appendChild(createNameOfWeeks());
        dpContainer.appendChild(createWeeksContainer(selectedMonthNumber, selectedYear));

        return dpContainer;
    }

    function createNameOfWeeks() {
        var nameOfdays = document.createElement("div");
        nameOfdays.className = dpStyles.nameOfdays.container;

        for (var day of days) {
            var dayName = document.createElement("span");
            dayName.className = dpStyles.nameOfdays.day;
            dayName.innerText = day;
            nameOfdays.appendChild(dayName);
        }
        return nameOfdays;
    }

    function generateTitleContainer() {
        var titleContainer = null;
        titleContainer = document.createElement("div");
        titleContainer.className = dpStyles.titleContainer.container;

        var prevButton = document.createElement("span");
        prevButton.innerText = "◄";
        prevButton.className = dpStyles.titleContainer.prevButton;
        titleContainer.appendChild(prevButton);
        prevButton.addEventListener("click", function () {
            selectedMonthNumber = datepicker.getPrevMonth();
            selectedYear = datepicker.getSelectedYear();
            var weeksContainer = createWeeksContainer(selectedMonthNumber, selectedYear);
            changeWeeksContainer(weeksContainer);
        });

        var title = document.createElement("span");
        title.innerText = months[selectDayNum] + ", " + selectedYear;;
        title.className = dpStyles.titleContainer.title;
        titleContainer.appendChild(title);

        var nextButton = document.createElement("span");
        nextButton.innerText = "►";
        nextButton.className = dpStyles.titleContainer.nextButton;
        titleContainer.appendChild(nextButton);
        nextButton.addEventListener("click", function () {
            selectedMonthNumber = datepicker.getNextMonth();
            selectedYear = datepicker.getSelectedYear();
            var weeksContainer = createWeeksContainer(selectedMonthNumber, selectedYear);
            changeWeeksContainer(weeksContainer);
        });
        return titleContainer;
    }

    function changeWeeksContainer(weeksContainer) {
        if (isWeeksContainerExist()) {
            document.querySelector("." + dpStyles.weeksContainer.container).remove();
            dpContainer.appendChild(weeksContainer);
        } else {
            dpContainer.appendChild(weeksContainer);
        }
    }

    function isWeeksContainerExist() {
        return document.querySelector("." + dpStyles.weeksContainer.container) != null ? true : false;
    }

    function createWeeksContainer(monthNumber, year) {
        var daysInMonth = datepicker.getDaysInMonth(monthNumber, year);
        var firstDayInMonth = datepicker.getFirstDayInMonth(monthNumber, year);
        var firstDayInWeek = firstDayInMonth;
        var weeksInMonth = datepicker.getWeeksInMonth(monthNumber, year);

        var datepickerWeeks = document.createElement("div");
        datepickerWeeks.className = dpStyles.weeksContainer.container;
        dpContainer.querySelector("." + dpStyles.titleContainer.title).innerText = months[monthNumber] + ", " + year;

        var daysNumber = datepicker.getMonthDayNumbersArray(daysInMonth);
        for (var weekNumber = 0; weekNumber < weeksInMonth; weekNumber++) {
            addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek);
            firstDayInWeek = 0;
        }
        return datepickerWeeks;
    }

    function addWeek(datepickerWeeks, weekNumber, daysNumber, firstDayInWeek) {
        var week = document.createElement("div");
        week.className = "" + dpStyles.weeksContainer.week;
        for (var dayNumber = 0; dayNumber < days.length; dayNumber++) {
            var day = document.createElement("span");
            day.className = dpStyles.weeksContainer.day;
            if (dayNumber >= firstDayInWeek) {
                day.innerText = daysNumber.next().value || "";
            }
            week.appendChild(day);
        }
        datepickerWeeks.appendChild(week);
    }
}
