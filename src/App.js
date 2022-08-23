import { useDispatch } from "react-redux";
import { dataFetch } from "./redux/actions";
import { useEffect } from "react";
import axios from "axios";

//Components
import Header from "./components/header/header";
import Topbar from "./components/topbar/topbar";
import OtherStates from "./components/otherStates/otherStates";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://covidnigeria.herokuapp.com/api")
    .then(res => dispatch(dataFetch(res.data)))
  }, [dispatch])

  return (
      <div className="App">
        <Topbar />
        <Header />
        <OtherStates />
      </div>
  );
}



export default App;
