import "./Header.scss";
import SearchMovie from "../SearchMovie/SearchMovie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import background from "../../assets/background.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faClapperboard} className="logo__icon"></FontAwesomeIcon>
      </div>
      <SearchMovie/>
      </div>
  )
}

export default Header;