/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { LoadCrypto } from "../Redux/cryptoReducer";
import Crypto from "./Crypto";

const CryptoPage = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state);
  useEffect(() => {
    if (myState.length === 0) {
      dispatch(LoadCrypto());
    }
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div className="crypto-container">
        <input
          className="search-bar"
          type="text"
          value={searchParams.get("filter") || ""}
          placeholder="Search Crypto ..."
          onChange={(e) => {
            const Filter = e.target.value;
            if (Filter) {
              setSearchParams({ Filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <div className="card-container">
          {myState
            .filter((element) => {
              const filter = searchParams.get("filter");
              if (!filter) return true;
              const name = element.name.toLowerCase();
              return name.startWith(filter.toLowerCase());
            })
            .map((element) => (
              <Crypto
                key={element.id}
                name={element.name}
                symbol={element.symbol}
                icon={element.icon}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CryptoPage;
