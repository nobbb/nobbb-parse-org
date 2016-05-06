'use strict';

export default class NobbbParseOrg {

    constructor() {
        
    }

    check(file) {
        return /\.org$/.test(file);
    }
}
