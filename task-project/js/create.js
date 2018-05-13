
(function () {
    var datepicker = new Datepicker({
        date: new Date(),
    });
    var
    d = document.createElement('div');
    d.className = 'js-datepicker';
    b = document.createElement('div');
    b.className = 'js-datepicker__wraper';
    document.body.appendChild(b);
    document.body.appendChild(d);
    var wraper = document.querySelector(".js-datepicker__wraper");
    var dpGenerator = new DatepickerGenerator();
    dpGenerator.setdpStyles({
        datepicker: {
            container: "js-datepicker__calendar"
        },
        titleContainer: {
            container: "js-datepicker__title-container",
            title: "js-datepicker__title",
            prevButton: "js-datepicker__button js-datepicker__button_prev",
            nextButton: "js-datepicker__button js-datepicker__button-next"
        },
        nameOfdays: {
            container: "js-datepicker__days-name",
            day: "js-datepicker__days-name-day"
        },
        weeksContainer: {
            container: "js-datepicker__weeks-container",
            today: "js-datepicker__weeks-today",
            week: "js-datepicker__weeks-week",
            day: "js-datepicker__week_day"
        }
    });
    Render.render(wraper, datepicker, dpGenerator);
})();