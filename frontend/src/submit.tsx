import { React, useState } from "react";

function Submit() {
  const [details, setDetails] = useState([{}]);

  function Data(data: object) {
    setDetails((details) => [...details, data]);
    let next: boolean;
    next = true;
    console.log(details);
  }
}
export default Submit;
