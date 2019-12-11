'use strict';

function Plane() {
};

Plane.prototype.land = function (airport) {
    airport.clearForLanding(this); //'this' in this case is the plane arg
    this._location = airport // 'this' in this case is a 'self' of the prototype, methinks
};

Plane.prototype.takeoff = function () {
    this._location.clearForTakeOff(this);
};
