import withCounter from "./HOC/withCounter";

//clickCounter acts as peter parkor
const ClickCounter = (props) =>{
  const {count , incrementCount} = props;
    return (
      <div className="">
        <button type="button" onClick={incrementCount}>Click {count} times</button>
      </div>
    )
}  

export default withCounter(ClickCounter);