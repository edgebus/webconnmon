import { lazy } from "react";

import { Checker } from "../../checker.js";

const checker: Checker = Object.freeze<Checker>({
    kind: "socket_io_connectivity",
    name: "Socket.IO Connectivity",
    description: "This scenario scan connectivity to Socket.IO server",
    adminComponent:  lazy(() => import("./socket_io_connectivity.admin.js")),
    scanComponent: lazy(() => import("./socket_io_connectivity.scan.js")),
});

export default checker;
