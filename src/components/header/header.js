import "./header.css"
import doctor from "../../img/doctor.png";
import { useSelector } from "react-redux";
import { getData } from "../../redux/actions";

const Header = () => {
    const data = useSelector(getData).data;

    return (
        <header>
            <div className="hero">
                <h1>Corona Virus update</h1>
                <h2>Total:</h2>
                    {
                    (!data) ? "" :

                    <div className="total">
                        <div className="box">
                            <h5>Total samples tested</h5>
                            <h2>{ data.totalSamplesTested }</h2>
                        </div>
                        <div className="box">
                            <h5>Total Confirmed Cases</h5>
                            <h2>{ data.totalConfirmedCases }</h2>
                        </div>
                        <div className="box">
                            <h5>Total Active Cases</h5>
                            <h2>{ data.totalActiveCases }</h2>
                        </div>
                        <div className="box">
                            <h5>Discharged</h5>
                            <h2>{ data.discharged }</h2>
                        </div>
                        <div className="box">
                            <h5>Death</h5>
                            <h2>{ data.death }</h2>
                        </div>
                    </div>
                    }
            </div>
            <img src={doctor} width="30%" alt="doctor" />
        </header>
    )
}
export default Header;