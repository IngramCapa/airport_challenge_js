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
    if (this.isStormy()) {
        throw new Error('cannot land during storm');
    };
    this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function (plane) {
    if (this.isStormy()) {
        throw new Error('cannot takeoff during storm');
    };
    this._hangar = [];
};

Airport.prototype.isStormy = function () {
    return false;
};