wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    }
)
wow.init();

mobiscroll.datepicker('#check-in', {
    controls: ['calendar'],
    calendarType: 'month',
    showOuterDays: true,
    pages: 2,
    selectMultiple: true,
    responsive: {
        small: {
            pages: 1
        },
        xsmall: {
            pages: 1
        }
    }
});

mobiscroll.datepicker('#check-out', {
    calendarType: 'month',
    showOuterDays: true,
    pages: 2,
    selectMultiple: true,
    responsive: {
        small: {
            pages: 1
        },
        xsmall: {
            pages: 1
        }
    }
});

