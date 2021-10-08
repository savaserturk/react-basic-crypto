import "./Coin.css";
import React from 'react';

const Coin = ({ name,image,symbol,price,marketcap,priceChange,total_volume}) =>{
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto-image"></img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${marketcap.toLocaleString()}</p>
                    {
                        priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )
                    }
                    <p className="coin-marketcap">Market cap: ${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin