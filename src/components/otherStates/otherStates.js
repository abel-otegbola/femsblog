import "./otherStates.css"
import { useSelector } from "react-redux";
import { getData } from "../../redux/actions";

const OtherStates = () => {
    const data = useSelector(getData).data;


    return (
        <section>
            <h1>Corona Virus update for States</h1>
            <h2>Total:</h2>
                <div className="list">
                {
                (!data) ? "" :
                    data.states.map(state => { return (
                        <div className="box" key={state.id}>
                            <h2>{state.state}</h2>

                            <h5>Total Confirmed Cases</h5>
                            <p>{ state.confirmedCases }</p>

                            <h5>Total Confirmed Cases</h5>
                            <p>{ state.confirmedCases }</p>

                            <h5>Discharged</h5>
                            <p>{ data.discharged }</p>

                            <h5>Death</h5>
                            <p>{ data.death }</p>
                        </div>
                        )
                    })
                }
                </div>
        </section>
    )
}
export default OtherStates;