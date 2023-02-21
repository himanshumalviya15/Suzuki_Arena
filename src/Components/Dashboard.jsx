import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <h1>Round 1 - Starting Interface</h1>
      </div> */}
      <div className="dashboard-container">
        <div className="round-box">Rounds</div>
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/firstmile">
             
              <button className="btn">1-A</button>
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <button className="btn">1-B</button>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <button className="btn">2</button>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/dice">
              <button className="btn">3</button>
            </Link>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <button className="btn">4</button>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <button className="btn">5</button>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <button className="btn">6</button>
          </div>
          <div className="flexbox-item flexbox-item-1 icon-conatiner">
            <Link to="/flipcard">
              <button className="btn">7</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
