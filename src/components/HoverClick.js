
import withCounter from "./HOC/withCounter";

//hoverclick acts as peter perko too
const HoverClick = (props) =>{
  const {count , incrementCount} = props;
    return (
      <div className="">
        <h1 type="button" onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    )
}  

export default withCounter(HoverClick);