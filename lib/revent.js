(function () {
  'use strict';

  // Constructor
  function REvent(obj) {
    if (!(this instanceof REvent)){
        return new REvent(obj);
    }
    this._obj = obj;
  }

  /*
  * From an array of dates to events with a "start" and an "end"
  * See the tests
  */
  REvent.prototype.toEvents = function() {

    function isConsecutive (start, end) {
      var tomorrow = new Date(start.getTime() + (24 * 60 * 60 * 1000) +1);
      return end <= tomorrow;
    }

    var dates  = this._obj; // Array of sequential dates
    var events = [];   // Array of pairs date_start, date_end

    var ds = 0;
    while (ds < dates.length){
      var date_start = dates[ds];
      var de = ds;
      while (de < dates.length){
        if ( isConsecutive(dates[de], dates[de+1]) ) { 
          // continue
        } else {
          // console.log(date_start+' to '+dates[de]);
          events.push({date_start: date_start, date_end: dates[de]});
          ds = de;
          de = dates.length; // force quit
        }
        de++;
      }
      ds++;
    }

    return events;
  }
  if (typeof module !== 'undefined') {
    module.exports = REvent;
  } else {
    revent = revent;
  }
}.call(this));