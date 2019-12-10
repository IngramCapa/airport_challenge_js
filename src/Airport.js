'use strict';

function Airport() {
    // _hangar to indicate that this state is private.
    // it's just a convention among devs, it doesn't do anything
    // saying "don't touch this, it may change"
    this._hangar = [];
};

Airport.prototype.planes = function () {
    return this._hangar;
};

Airport.prototype.clearForLanding = function (plane) {
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function (plane) {
    this._hangar = [];
};