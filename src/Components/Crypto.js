/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import { arrowCircleRight } from "react-icons-kit/fa/arrowCircleRight";

const Crypto = ({ name, symbol, icon }) => (
  <>
    <div className="crypto-card">
      <i>
        <Icon icon={arrowCircleRight} size={20} />
      </i>
      <img src={icon} alt={name} />
      <span>{name.substr(0, 15)}</span>
      <span>{symbol.substr(0, 15)}</span>
    </div>
  </>
);

Crypto.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Crypto;
