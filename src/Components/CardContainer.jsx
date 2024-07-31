import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../Style/Utilities.css";
import "../Style/cardContainer.css";

const url = "http://universities.hipolabs.com/search?";
function CardContainer({ country, college }) {
  const generateApi = (country, college) => {
    let url = "http://universities.hipolabs.com/search?";
    if (college.length != 0) {
      url += "college=" + college;
    }
    if (country.length != 0) {
      url += "&&country=" + country;
    }
    url += "&&limit=5";
    return url;
  };

  const [data, setData] = useState([]);
  const [Api, setApi] = useState(url);
  // let Api = generateApi(c);

  useEffect(() => {
    let cur = generateApi(country.toString(), college.toString());
    setApi(cur);
    const fetchData = async () => {
      try {
        const response = await fetch(Api);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Api]);
  const getAllColleges = () => {
    setApi(url);
  };

  return (
    <>
      <div className="grid container">
        {data.length > 0 &&
          data.map((item, index) => (
            <Card
              key={index}
              country={item.country}
              name={item.name}
              domain={item.domains[0]}
              webpages={item.web_pages[0]}
            />
          ))}
      </div>
      <button className="seemorebtn" onClick={getAllColleges}>
        See more ...{" "}
      </button>
    </>
  );
}

export default CardContainer;
