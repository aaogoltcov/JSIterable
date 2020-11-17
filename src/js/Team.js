'use strict';

export default class Team {
    constructor(array) {
        this.array = array;
        this.iterator = this.array[Symbol.iterator]();
    }
}
