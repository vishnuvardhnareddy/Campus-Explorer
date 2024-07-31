import React, { useState } from "react";
import "../Style/Form.css";
import CardContainer from "./CardContainer";
import "../Style/Utilities.css";

function Form() {
  const list = [
    "United Kingdom",
    "France",
    "Uganda",
    "United Arab Emirates",
    "Brazil",
    "Ukraine",
    "Chile",
    "China",
    "United States",
    "India",
    "Canada",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Myanmar",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Colombia",
    "Congo, the Democratic Republic of the",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Iran",
    "Poland",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guyana",
    "Haiti",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "Pakistan",
    "Indonesia",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "North Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norway",
    "Oman",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Uruguay",
    "Uzbekistan",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Virgin Islands, British",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Vietnam",
  ];

  const [college, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [cardVisible, setCardVisible] = useState(false);

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardVisible(true);
  };

  let sortedList = list.sort();
  for (let i = 0; i < sortedList.length; i++) {
    sortedList[i] = sortedList[i].toLowerCase();
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>College Details</h1>
        <div className="box">
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={college}
            onChange={handleCollegeChange}
            placeholder="ex : National college..."
          />
        </div>

        <div className="box">
          <label htmlFor="country">Country</label>
          <select id="country" value={country} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {sortedList.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {cardVisible && <CardContainer college={college} country={country} />}
    </div>
  );
}
export default Form;
