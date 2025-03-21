import { useState } from "react";

import {
  checkersArray,
  checkersDict,
} from "../checkers/index.js";
import { Checker } from "../checker.js";

function AdminPage() {
  const [selectedCheckerKind, setSelectedCheckerKind] = useState<Checker["kind"]>();

  function handleSelectedChecker(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.currentTarget.value !== "") {
      setSelectedCheckerKind(event.currentTarget.value);
    } else {
      setSelectedCheckerKind(undefined);
    }
    console.log("handleSelectedScenario", event);
  }

  console.log("scanScenariosDict", checkersDict);
  console.log(
    "selectedScenario !== undefined",
    selectedCheckerKind !== undefined
  );
  console.log(
    "selectedScenario in scanScenariosDict",
    selectedCheckerKind! in checkersDict
  );
  const CheckerAdminComponent =
    selectedCheckerKind !== undefined &&
    selectedCheckerKind in checkersDict
      ? checkersDict[selectedCheckerKind]?.adminComponent || null
      : null;

  return (
    <>
      <h1>Admin page</h1>

      <select value={selectedCheckerKind} onChange={handleSelectedChecker}>
        <option value=""></option>
        {checkersArray.map(function (
          checker: Checker,
          checkerIndex: number
        ) {
          return (
            <option
              key={checkerIndex}
              value={checker.kind}
              title={checker.description}
            >
              {checker.name}
            </option>
          );
        })}
      </select>
      <br />
      {CheckerAdminComponent !== null && <CheckerAdminComponent />}
      {CheckerAdminComponent === null && <h2>Pls, select scenario</h2>}
    </>
  );
}

export default AdminPage;
