/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;

    if (Otheraddress) {
      dataArray = await contract.display(Otheraddress);
      console.log(dataArray);
    } else {
      dataArray = await contract.display(account);
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);

      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_black">
            <img
              key={i}
              src={item}
              alt={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    }
  };
  return (
    <>
      <div>
        <div className="image-list">{data}</div>

        <input type="text" placeholder="Enter address" className="address" />

        <button className="center button" onClick={getdata}>
          Get Data
        </button>
      </div>
    </>
  );
};

export default Display;
