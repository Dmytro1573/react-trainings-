// import Reader from "../Reader/Reader";
// import articles from "../../articles.json";

import Timer from "../Timer/Timer";

import ClickTracker from "../ClickTracker/ClickTracker";

// const ClickCounter = ({ clicks, onClick }) => {
//   return <button onClick={onClick}>Click: {clicks}</button>;
// };

export default function App() {
  // const [clicks, setClicks] = useState(0);
  // const [values, setValues] = useState({
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // });
  // const handleClicks = () => {
  //   setClicks(clicks + 1);
  // };
  // const handelReset = () => {
  //   setClicks(0);
  // };
  // const handleChangeValues = () => {
  //   setValues({
  //     ...values,
  //     b: 5,
  //   });
  // };
  // return (
  //   <>
  //     <div>
  //       <h1>State in React</h1>
  //       {/* <button onClick={handleChangeValues}>Change values</button>
  //       <hr />
  //       <ClickCounter clicks={clicks} onClick={handleClicks} />
  //       <ClickCounter clicks={clicks} onClick={handleClicks} />
  //       <ClickCounter clicks={clicks} onClick={handleClicks} />
  //       <ClickCounter clicks={clicks} onClick={handleClicks} />
  //       <ClickCounter clicks={clicks} onClick={handleClicks} /> */}
  //       {/* <button onClick={handelReset}>Reset</button> */}
  //       <Reader articles={articles} />
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <ClickTracker />;
      </div>
      <div>
        <Timer />
      </div>
    </>
  );
}
