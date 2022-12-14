
import React from "react";

export default function HoverClick ({count, incrementCount, theme}) {

    const style = theme === 'dark' ? {backgroundColor : '#000000', color : '#ffffff' } : null;
    

    return (
      <div className="">
        <h1 type="button" onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
      </div>
    )
}