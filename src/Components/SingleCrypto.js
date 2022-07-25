/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import { useSelector } from "react-redux/es/exports";
import { useParams, Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { arrowCircleLeft } from "react-icons-kit/fa/arrowCircleLeft";

const CurrencyFormatter = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

const SingleCrypto = () => {
  const params = useParams();
  const myState = useSelector((state) => state);
  const CurrentCrypto = myState.find((crypto) => crypto.id === params.cryptoId);
  const { id, icon, name, symbol, rank, price } = CurrentCrypto;

  return (
    <>
      <div className="single-crypto">
        <Link to="/">
          <i>
            <Icon icon={arrowCircleLeft} size={25} />
          </i>
        </Link>
        <div className="single-crypto-infos">
          <div className="banner">
            <div className="banner-img">
              <img src={icon} alt={name} />
              <span className="rank">
                Rank :&nbsp;
                {rank}
              </span>
            </div>
          </div>
          <span>{id}</span>
          <span>{symbol}</span>
          <span>{name}</span>
          <span>{CurrencyFormatter(price)}</span>
        </div>
      </div>
    </>
  );
};

export default SingleCrypto;
