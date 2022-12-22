import Counter from "./Counter";
import HoverClick from "./HoverClick";
import ThemeContext from "../Context/themeContext";


export default function Content () {
  return (
    <div className="">
      <h1>This is Content</h1>
      {/* <Counter>
          { (count, incrementCount) => <HoverClick count={count} incrementCount=  {incrementCount} theme={theme} /> }
      </Counter> */}
      <Counter>
          {(count, incrementCount) =>  (
              <ThemeContext.Consumer> 
                  {({theme}) => (
                     <HoverClick count={count} incrementCount=  {incrementCount} theme={theme} 
                     /> 
                  )}
                </ThemeContext.Consumer>
            )}
      </Counter>
    </div>
  )
}