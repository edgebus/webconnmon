import { Checker } from '../checker.js';

import myIpChecker from './my_ip/index.js';
import socketIoConnectivityChecker from './socket_io_connectivity/index.js';

export const checkersArray: ReadonlyArray<Checker> = Object.freeze([
    myIpChecker,
    socketIoConnectivityChecker,
    // Add new scenarios here
]);

export const checkersDict: {
    readonly [kind: Checker["kind"]]: Checker;
} = Object.freeze(
    checkersArray.reduce(
        function (p, c) {
            p[c.kind] = c;
            return p;
        },
        {} as { [kind: Checker["kind"]]: Checker; }
    )
);

export default checkersDict;