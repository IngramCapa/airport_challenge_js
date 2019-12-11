'use strict';

describe('Feature Test:', function () {

    var plane;
    var airport;

    beforeEach(function () {
        plane = new Plane();
        airport = new Airport();
    });

    it('plane can be instructed  to land at airport', function () {
        plane.land(airport)
        expect(airport.planes()).toContain(plane)
    });

    it('plane can be instructed to take off', function () {
        plane.land(airport)
        plane.takeoff()
        expect(airport.planes()).not.toContain(plane)
    });

    it('blocks takeoff during stormy weather', function () {
        plane.land(airport)
        spyOn(airport, 'isStormy').and.returnValue(true);
        expect(function () { plane.takeoff(); }).toThrowError('cannot takeoff during storm');
        expect(airport.planes()).toContain(plane);
    });

    it ('blocks landing during stormy weather', function() {
        plane.land(airport)
        plane.takeoff()
        spyOn(airport, 'isStormy').and.returnValue(true);
        expect(function () { plane.land(airport); }).toThrowError('cannot land during storm');
        expect(airport.planes()).not.toContain(plane);
    });
});