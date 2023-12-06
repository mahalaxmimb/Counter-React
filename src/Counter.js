  // import { useState } from "react";

import { useState } from "react";

function Counter() {
  let [state, setstate] = useState(0)
    function getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += state === 0 ? "warning" : "primary";
      return classes;
    }
    function formatCount() {
      setstate(0);
    }
    function counterInc(){
      setstate(state=>state+1)
      // setstate(state=>state+1)
      // setstate(state=>state+1)
      // setstate(state=>state+1)
    }
    function counterDec(){
      setstate(state-1)
    }
    return (
      <div>
        <span className={getBadgeClasses()}>{state}</span>
        <button className="btn btn-secondary btn-sm m-2" onClick={counterInc}>Add</button>
        <button className="btn btn-secondary btn-sm m-2" onClick={counterDec}>Remove</button>
        <button className="btn btn-secondary btn-sm m-2" onClick={formatCount}>Reset</button>
      </div>
    );
  }
  
  export default Counter;
  
