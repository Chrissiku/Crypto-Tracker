import { useSelector } from 'react-redux/es/exports';
import { useParams, Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { arrowCircleLeft } from 'react-icons-kit/fa/arrowCircleLeft';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { twitter } from 'react-icons-kit/fa/twitter';

const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(amount);

const SingleCrypto = () => {
  const params = useParams();
  const myState = useSelector((state) => state);
  const CurrentCrypto = myState.find((crypto) => crypto.id === params.cryptoId);
  const {
    id,
    icon,
    name,
    symbol,
    rank,
    price,
    priceBtc,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    websiteUrl,
    twitterUrl,
  } = CurrentCrypto;

  return (
    <>
      <div className="single-crypto">
        <Link to="/">
          <i className="go-back">
            <Icon icon={arrowCircleLeft} size={25} />
          </i>
        </Link>
        <div key={id} className="single-crypto-infos">
          <div className="banner">
            <div className="banner-img">
              <img src={icon} alt={name} />
              <span className="rank">
                Rank :&nbsp;
                {rank}
              </span>
              <span className="price">{CurrencyFormatter(price)}</span>
              <span className="crypto-name">
                {name}
                {' '}
                (
                {symbol}
                )
              </span>
            </div>
          </div>
          <div className="crypto-info">
            <div className="card-info">
              <span>
                Rank :
                {' '}
                {rank}
              </span>
              <span>
                Symbol :
                {' '}
                {symbol}
              </span>
              <span className="crypto-n">
                Name :
                {' '}
                {name}
              </span>
              <span>
                price/qty :
                {' '}
                {CurrencyFormatter(price)}
                {' '}
                /
                {' '}
                {priceBtc}
              </span>
              <span>
                Volume :
                {' '}
                {volume}
              </span>
              <span>
                Market-cap :
                {' '}
                {CurrencyFormatter(marketCap)}
              </span>
            </div>
            <div className="card-info">
              <span>
                Av. Supply :
                {' '}
                {availableSupply}
              </span>
              <span>
                Tot. Sypply :
                {' '}
                {totalSupply}
              </span>
              <span>
                price var/H :
                {' '}
                {priceChange1h}
                % /hour
              </span>
              <span>
                price var/D :
                {' '}
                {priceChange1d}
                % /day
              </span>
              <span>
                price var/W :
                {' '}
                {priceChange1w}
                % /Week
              </span>
              <span className="web-icons">
                Get More infos :
                <a href={websiteUrl} target="_blank" rel="noreferrer">
                  <Icon icon={bitcoin} size={20} />
                </a>
                <a href={twitterUrl} target="_blank" rel="noreferrer">
                  <Icon icon={twitter} size={20} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCrypto;
