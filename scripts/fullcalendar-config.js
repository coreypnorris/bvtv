var calendarOneEvents = [
  {
    "start": "1/11/2017",
    "end": "1/14/2017",
    "title": "BLUE HAWK winter",
    "color": 'blue',
  },
  {
    "start": "1/17/2017",
    "end": "1/20/2017",
    "title": "World of Concrete",
    "color": 'blue',
  },
];

var calendarTwoEvents = [
  {
    "start": "2/13/2017",
    "end": "2/16/2017",
    "title": "NEMEON",
    "color": 'green',
  },
];

var calendarThreeEvents = [
  {
    "start": "3/20/2017",
    "end": "3/24/2017",
    "title": "Embassy Group Spring Conference",
    "color": 'red',
  },
  {
    "start": "3/28/2017",
    "end": "3/31/2017",
    "title": "IMARK Showcase",
    "color": 'red',
  },
];

var calendarFourEvents = [
  {
    "start": "4/18/2017",
    "end": "4/22/2017",
    "title": "Evergreen",
    "color": 'purple',
  },
  {
    "start": "4/19/2017",
    "end": "4/23/2017",
    "title": "BLUE HAWK",
    "color": 'purple',
  },
];

var calendarFiveEvents = [
  {
    "start": "5/1/2017",
    "end": "5/4/2017",
    "title": "NAED National Conf",
    "color": 'blue',
  },
  {
    "start": "5/9/2017",
    "end": "5/12/2017",
    "title": "Sphere 1",
    "color": 'blue',
  },
  {
    "start": "5/15/2017",
    "end": "5/17/2017",
    "title": "IDC Product Forum",
    "color": 'blue',
  },
];

var calendarSixEvents = [
  {
    "start": "6/6/2017",
    "end": "6/9/2017",
    "title": "Octo",
    "color": 'green',
  },
  {
    "start": "6/15/2017",
    "end": "6/17/2017",
    "title": "AD HR Summit",
    "color": 'green',
  },
  {
    "start": "6/20/2017",
    "end": "6/23/2017",
    "title": "LEAP",
    "color": 'green',
  },
];

var calendarSevenEvents = [
];

var calendarEightEvents = [
];

var calendarNineEvents = [
  {
    "start": "9/6/2017",
    "end": "9/9/2017",
    "title": "AD PHCP Canada",
    "color": 'blue',
  },
  {
    "start": "9/11/2017",
    "end": "9/15/2017",
    "title": "AD PHCP NAM",
    "color": 'blue',
  },
  {
    "start": "9/17/2017",
    "end": "9/20/2017",
    "title": "HARDI Sales and Marketing",
    "color": 'blue',
  },
  {
    "start": "9/17/2017",
    "end": "9/21/2017",
    "title": "AD ISD NAM",
    "color": 'blue',
  },
  {
    "start": "9/25/2017",
    "end": "9/28/2017",
    "title": "AD ESD NAM",
    "color": 'blue',
  },
];

var calendarTenEvents = [
  {
    "start": "10/1/2017",
    "end": "10/4/2017",
    "title": "IBC National Meeting",
    "color": 'green',
  },
  {
    "start": "10/4/2017",
    "end": "10/7/2017",
    "title": "NCBA Purchasing Cooperatives Conference",
    "color": 'green',
  },
  {
    "start": "10/9/2017",
    "end": "10/12/2017",
    "title": "ASA",
    "color": 'green',
  },
  {
    "start": "10/15/2017",
    "end": "10/18/2017",
    "title": "IMARK Annual",
    "color": 'green',
  },
  {
    "start": "10/23/2017",
    "end": "10/26/2017",
    "title": "BLUE HAWK Golf",
    "color": 'green',
  },
];

var calendarElevenEvents = [
  {
    "start": "11/12/2017",
    "end": "11/15/2017",
    "title": "STAFDA",
    "color": 'red',
  },
];

var calendarTwelveEvents = [
  {
    "start": "12/2/2017",
    "end": "12/6/2017",
    "title": "HVAC",
    "color": 'purple',
  },
  {
    "start": "12/5/2017",
    "end": "12/8/2017",
    "title": "Equity Plumbing",
    "color": 'purple',
  },
];

$('.calendarOne').fullCalendar({
  defaultDate: "1/1/" + moment().year(),
  events: calendarOneEvents,
  header: {
    left: 'title',
    center: '',
    right: ''
  },
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
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
  height: 450,
  titleFormat: 'MMMM',
  displayEventTime: false,
});
