import React from "react";

export default function ClickCounter ({count, incrementCount}) {
  
    return (
      <div className="">
        <button type="button" onClick={incrementCount}>Click {count} times</button>
      </div>
    )
  
}