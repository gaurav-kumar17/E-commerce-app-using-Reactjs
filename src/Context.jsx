import { createContext, useContext, useEffect, useRef, useState } from "react";
import { FaCompress } from "react-icons/fa";
import { CartContext } from "./App";
const UserContext = createContext();

const Component1 = () => {
  const [name, setName] = useState("Gaurav");
  const prouducts = useContext(CartContext);
  // console.log(prouducts);
  return (
    <>
      {/* value is passed to the "UserContext" */}
      <UserContext.Provider value={{ name, setName }}>
        <h2>Component1:{name}</h2>
        <Component2 />
      </UserContext.Provider>
    </>
  );
};

export const Component2 = () => {
  // const [count,setCount]=useState(0);
  return (
    <>
      {/* <UserContext.Provider value={{count}}> */}
      <h2></h2>
      <Component3 />
      {/* </UserContext.Provider> */}
    </>
  );
};

export const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component3: {user.name}</h2>
      <Component4 />
    </>
  );
};
export const Component4 = () => {
  // useContext is a hook
  const user = useContext(UserContext);
  //   console.log(user.)
  return (
    <>
      <h2>Component4: {user.name}</h2>

      <input type="text" onChange={(e) => user.setName(e.target.value)}></input>
    </>
  );
};

export default Component1;
