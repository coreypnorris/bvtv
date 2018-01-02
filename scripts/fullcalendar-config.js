var calendarOneEvents = [{
  "start": "1/8/2018",
  "end": "1/11/2018",
  "title": "BLUE HAWK winter",
  "color": 'blue',
}, {
  "start": "1/23/2018",
  "end": "1/27/2018",
  "title": "World of Concrete",
  "color": 'blue',
}, {
  "start": "1/21/2018",
  "end": "1/24/2018",
  "title": "AHR",
  "color": 'blue',
}, {
  "start": "1/31/2018",
  "end": "2/3/2018",
  "title": "NEMRA",
  "color": 'blue',
}];

var calendarTwoEvents = [{
  "start": "1/31/2018",
  "end": "2/3/2018",
  "title": "NEMRA",
  "color": 'purple',
}, {
  "start": "2/19/2018",
  "end": "2/22/2018",
  "title": "NEMEON",
  "color": 'purple',
}];

var calendarThreeEvents = [{
  "start": "3/20/2018",
  "end": "3/23/2018",
  "title": "IMARK Showcase",
  "color": 'green',
}];

var calendarFourEvents = [{
  "start": "4/10/2018",
  "end": "4/12/2018",
  "title": "ASA BOT Meeting",
  "color": 'red',
}, {
  "start": "4/17/2018",
  "end": "4/20/2018",
  "title": "IDC-USA",
  "color": 'red',
}, {
  "start": "4/17/2018",
  "end": "4/20/2018",
  "title": "Evergreen",
  "color": 'red',
}, {
  "start": "4/19/2018",
  "end": "4/23/2018",
  "title": "Starnet",
  "color": 'red',
}];

var calendarFiveEvents = [{
  "start": "5/2/2018",
  "end": "5/6/2018",
  "title": "BLUE HAWK",
  "color": 'blue',
}, {
  "start": "5/15/2018",
  "end": "5/18/2018",
  "title": "IWDC Annual",
  "color": 'blue',
}, {
  "start": "5/14/2018",
  "end": "5/18/2018",
  "title": "Sphere 1",
  "color": 'blue',
}, {
  "start": "5/22/2018",
  "end": "5/25/2018",
  "title": "AD HR Summit",
  "color": 'blue',
}, {
  "start": "5/29/2018",
  "end": "6/1/2018",
  "title": "IDI",
  "color": 'blue',
}];

var calendarSixEvents = [];

var calendarSevenEvents = [];

var calendarEightEvents = [];

var calendarNineEvents = [];

var calendarTenEvents = [];

var calendarElevenEvents = [];

var calendarTwelveEvents = [];

$('.calendarOne').fullCalendar({
  defaultDate: "1/1/" + moment().year(),
  events: calendarOneEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarTwo').fullCalendar({
  defaultDate: "2/1/" + moment().year(),
  events: calendarTwoEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarThree').fullCalendar({
  defaultDate: "3/1/" + moment().year(),
  events: calendarThreeEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarFour').fullCalendar({
  defaultDate: "4/1/" + moment().year(),
  events: calendarFourEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarFive').fullCalendar({
  defaultDate: "5/1/" + moment().year(),
  events: calendarFiveEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarSix').fullCalendar({
  defaultDate: "6/1/" + moment().year(),
  events: calendarSixEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarSeven').fullCalendar({
  defaultDate: "7/1/" + moment().year(),
  events: calendarSevenEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarEight').fullCalendar({
  defaultDate: "8/1/" + moment().year(),
  events: calendarEightEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarNine').fullCalendar({
  defaultDate: "9/1/" + moment().year(),
  events: calendarNineEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarTen').fullCalendar({
  defaultDate: "10/1/" + moment().year(),
  events: calendarTenEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarEleven').fullCalendar({
  defaultDate: "11/1/" + moment().year(),
  events: calendarElevenEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});

$('.calendarTwelve').fullCalendar({
  defaultDate: "12/1/" + moment().year(),
  events: calendarTwelveEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 380,
  titleFormat: 'MMMM',
  displayEventTime: false,
});
