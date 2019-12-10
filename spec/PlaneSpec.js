'use strict';

describe('Plane', function () {
    var plane;
    var airport;

    beforeEach(function () {
        plane = new Plane();
        //spy of airport 'class', along with its 'methods'
        airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);

    });

    it('can land at an airport', function () {
        plane.land(airport);
        // expect(plane.land).not.toBeUndefined()
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('can takeoff from an airport', function () {
        plane.land(airport);
        plane.takeoff();
        expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);

    });
});