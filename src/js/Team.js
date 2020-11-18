'use strict';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(...characters) {
        this.members = new Set([...this.members, ...characters]);
    }

    get() {
        return Array.from(this.members);
    }

    [Symbol.iterator]() {
        const team = this.get()
        const last = team.length;
        let current = 0;

        return {
            next() {
                if ( current < last ) {
                    const value = team[current];
                    current += 1;
                    return { done: false, value: value, };
                } else {
                    return { done: true, };
                }
            },
        };
    }

}
