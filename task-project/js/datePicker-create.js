(function () {
    let datepicker = new DatePicker({
        date: new Date()
    });
    let wrapper = document.querySelector(".project-datepicker__wrapper");
    let dpGenerator = new DatePickerGenerator();
    dpGenerator.setdpStyles({
        datepicker: {
            container: "project-datepicker__calendar"
        },
        titleContainer: {
            container: "project-datepicker__title-container",
            title: "project-datepicker__title",
            prevButton: "project-datepicker__button js-datepicker__button_prev",
            nextButton: "project-datepicker__button js-datepicker__button-next"
        },
        nameOfdays: {
            container: "project-datepicker__days-name",
            day: "project-datepicker__days-name-day"
        },
        weeksContainer: {
            container: "project-datepicker__weeks-container",
            week: "project-datepicker__weeks-week",
            day: "project-datepicker__week_day"
        }
    });
    Render.render(wrapper, datepicker, dpGenerator);
})();