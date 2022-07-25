/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */

import { useSelector } from "react-redux/es/exports";
import { useParams, Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { arrowCircleLeft } from "react-icons-kit/fa/arrowCircleLeft";

const SingleCrypto = () => {
  const params = useParams();
  const myState = useSelector((state) => state);
  const CurrentCrypto = myState.find((crypto) => crypto.id === params.cryptoId);
  const { id, icon, name, symbol, rank, price } = CurrentCrypto;
  return (
    <>
      <div>
        <Link to="/">
          <i>
            <Icon icon={arrowCircleLeft} size={64} />
          </i>
        </Link>
        <span>
          <img src={icon} alt={name} />
        </span>
        <span>{id}</span>
        <span>{symbol}</span>
        <span>{name}</span>
        <span>{rank}</span>
        <span>{price}</span>
      </div>
    </>
  );
};

export default SingleCrypto;
