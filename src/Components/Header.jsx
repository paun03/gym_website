import "./Header.css";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav>
                <div className={isOpen ? "hidden" : ""}>
                    GYM<span>24</span>
                </div>
                <ul className={isOpen ? "openNav" : ""}>
                    <li>Advantages</li>
                    <li>Membership</li>
                    <li>About</li>
                    <li>Trainers</li>
                </ul>
                <div className="hamburgerMenuIcon" onClick={toggleMenu}>
                    <img src={isOpen ? "/header/close.png" : "/header/hamburger.png"} alt="Icon" width={32}/>
                </div>
            </nav>
        </>
    );
};

export default Header;