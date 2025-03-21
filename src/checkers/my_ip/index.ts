import { lazy } from "react";

import { Checker } from "../../checker.js";

const checker: Checker = Object.freeze<Checker>({
    kind: "my_ip",
    name: "Detect client's IP address",
    description: "This scenario detects client's IP addresses",
    adminComponent:  lazy(() => import("./my_ip.admin.js")),
    scanComponent: lazy(() => import("./my_ip.scan.js")),
});

export default checker;
