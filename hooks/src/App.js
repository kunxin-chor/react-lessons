import React, { useState, useDebugValue } from "react";

function useFirstName() {
     const [firstName, setFirstName] = useState("");
     useDebugValue(`First Name: ${firstName}`)
     return [firstName, setFirstName]
}

function useLastName() {
    const [lastName, setLastName] = useState("");
    useDebugValue(`Last Name: ${lastName}`);
    return [lastName, setLastName];
}

function App() {
  const [firstName, setFirstName] = useFirstName();
  const [lastName, setLastName] = useLastName();
  return (
    <React.Fragment>
      <div>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      </div>
      <div>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </div>
    </React.Fragment>
  );
}

export default App;
