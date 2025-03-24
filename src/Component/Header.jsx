import { useState } from "react";
import "./Header.css";

function Header() {
  const [dropdwon1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  console.log('hi')
  return (
    <div className="Heaader">
      <div className="management">
        <div className="dropdown1"
        onMouseEnter={() => setdropdown1(!dropdwon1)}
        onMouseLeave={() => setdropdown1(!dropdwon1)}>
          <p>Dropdwon1</p>
          <div className={`dropdown2 ${dropdwon1 ? "" : "active1"}`}>
            <p>option1</p>
            <p>option2</p>
            <p
              className="option3"
              onMouseEnter={() => setdropdown2(!dropdown2)}
              onMouseLeave={() => setdropdown2(!dropdown2)}
            >
              option3
              <div className={`dropdown3  ${dropdown2 ? "" : "active2"}`}>
                <p>option1</p>
                <p>option2</p>
                <p>option3</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
