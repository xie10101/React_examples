import { Prompt } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
const Acticle = () => {
  const [isBlocking, setIsBlocking] = useState(false);
  return (
    <div>
      <Prompt
        when={isBlocking}
        message={"Are you sure you want to leave?"}
      ></Prompt>
      <input
        onChange={(e) => setIsBlocking(e.target.value.trim().length !== 0)}
      ></input>
    </div>
  );
};

export default Acticle;
