// Month View Google Calendar
function month(){
  $(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listMonth'
      },
      defaultView: 'month',
      googleCalendarApiKey: 'AIzaSyDyMoDpMndtgfhh62g_B9Gr5YrXhSBMhmI',
      events: {
        googleCalendarId: 'pkr1feh376liutlgs84gd0bjmo@group.calendar.google.com'
      },
      eventClick: function(event) {
        // opens events in a popup window
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },
      loading: function(bool) {
        $('#loading').toggle(bool);
      }
    });
  });
}

// Upcoming Events View Google Calendar
function upComing(){
  $(document).ready(function() {
    $('#upcoming').fullCalendar({
      header: {
        left: 'false',
        center: 'false',
        right: 'false'
      },
      defaultView: 'list',
      visibleRange: function(currentDate) {
        return {
          start: currentDate.clone().subtract(1, 'days'),
          end: currentDate.clone().add(1, 'months') // exclusive end, so 3
        };
      },
      height: 150,
      eventClick: function(event) {
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },
      googleCalendarApiKey: 'AIzaSyDyMoDpMndtgfhh62g_B9Gr5YrXhSBMhmI',
      events: {
        googleCalendarId: 'pkr1feh376liutlgs84gd0bjmo@group.calendar.google.com'
      },
      loading: function(bool) {
        $('#loading').toggle(bool);
        $('.fc-toolbar').remove();
      },
    });
  });
}
