import { LOGO_URL } from "../utils/constants";

const Header = () => <div>
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</div>;

export default Header;