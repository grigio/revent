var REvent = require('../lib/revent').REvent;

var expect = require('expect.js');

describe('REvent', function() {

  it('should manage an empty array', function() {
    var arr = []
    expect( REvent(arr).toEvents() ).to.eql( [] );
  });

  it('should manage a single date', function() {
    var arr = [ new Date("1990-11-30") ]
    expect( REvent(arr).toEvents() ).to.eql(
      [{date_start: new Date("1990-11-30"), date_end: new Date("1990-11-30")}]
    );
  });

  it('should manage a single multiple date', function() {
    var arr = [ new Date("1990-11-30"), new Date("1990-12-1") ]
    expect( REvent(arr).toEvents() ).to.eql(
      [{date_start: new Date("1990-11-30"), date_end: new Date("1990-12-1")}]
    );
  });

  it('should manage a multiple dates', function() {
    var arr = [
                new Date("1990-11-30"), new Date("1990-12-1"), new Date("1990-12-2"),
                new Date("1990-12-4"),
                new Date("1990-12-7")
              ]
    // console.log(REvent(arr).toEvents());
    expect( REvent(arr).toEvents() ).to.eql(
      [
        {date_start: new Date("1990-11-30"), date_end: new Date("1990-12-2")},
        {date_start: new Date("1990-12-4"), date_end: new Date("1990-12-4")},
        {date_start: new Date("1990-12-7"), date_end: new Date("1990-12-7")}
      ]
    );
  });

  // just a test
  it('should test nested arrays', function() {
    expect( ['a',[Date(2013,1,12)]] ).to.eql( ['a',[Date(2013,1,12)]] );
  });

});