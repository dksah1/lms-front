import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="bg-red-500">helllo</h1>
        <Button>Login</Button>
      </div>
    </>
  );
}

export default App;
