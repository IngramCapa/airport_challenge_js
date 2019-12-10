'use strict';

describe('Airport', function () {
    var plane;
    var airport;


    beforeEach(function () {
        plane = jasmine.createSpy('plane', ['land', 'takeoff']);
        airport = new Airport();
    });

    it('has no planes by default', function () {
        expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landing', function () {
        airport.clearForLanding(plane);
        expect(airport.planes()).toContain(plane);
    });

    it('can clear planes for takeoff', function () {
        airport.clearForLanding(plane);
        airport.clearForTakeOff(plane);
        expect(airport.planes()).toEqual([]);
    });

});