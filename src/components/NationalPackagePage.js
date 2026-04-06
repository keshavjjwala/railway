import React from "react";

const nationalPackages = [
  {
    image: "/images/26.jpg",
    title: "DIVINE BALAJI DARSHAN",
    duration: "1 Days",
    code: "SHG07",
    origin: "TIRUPATI",
    destination: "TIRUCHANUR / TIRUMALA / TIRUPATI",
    price: "990",
    departure: "Daily",
    upcoming: "25-APRIL-22",
    inclusions: "Train Meal Insurance"
  },
  {
    image: "/images/27.jpg",
    title: "HIMALAYAN GOLDEN TRIANGLE TOUR",
    duration: "5 Nights/6 Days",
    code: "EHH11",
    origin: "NEW JALPAIGURI",
    destination: "DARJEELING / GANGTOK / KALIMPONG",
    price: "25350",
    departure: "Daily",
    upcoming: "26-APR-22",
    inclusions: "Train Meal Insurance"
  },
  {
    image: "/images/28.jpg",
    title: "RAVISHING KERALA WITH HOUSEBOAT STAY",
    duration: "5 Nights/6 Days",
    code: "SEH030",
    origin: "KOCHI",
    destination: "ALLEPPEY / KOCHI / KUMARAKOM / MUNNAR / THEKKADY",
    price: "17510",
    departure: "Daily",
    upcoming: "26-APR-22",
    inclusions: "Train Meal Insurance"
  },
  {
    image: "/images/29.jpg",
    title: "AGRA FULL DAY TOUR WITH GUIDE",
    duration: "1 Days",
    code: "NLH38",
    origin: "AGRA",
    destination: "AGRA / FATEHPUR SIKRI",
    price: "4000",
    departure: "Daily (Except Friday)",
    upcoming: "26-APR-22",
    inclusions: "Train Bus Meal Guide/Escort"
  },
  {
    image: "/images/30.jpg",
    title: "SPLENDID HILLS",
    duration: "7 Nights/8 Days",
    code: "EHH17",
    origin: "NEW JALPAIGURI",
    destination: "DARJEELING / GANGTOK / KALIMPONG",
    price: "35950",
    departure: "Daily",
    upcoming: "26-APR-22",
    inclusions: "Train Bus Meal Guide/Escort"
  }
];

function NationalPackagePage({ onBookNow }) {
  return (
    <div className="legacy-package-page">
      <center>
        <h1>
          <b>
            <i>National Packages:</i>
          </b>
        </h1>

        {nationalPackages.map((item) => (
          <table width="95%" key={item.code}>
            <tbody>
              <tr>
                <td rowSpan="5">
                  <img src={item.image} alt={item.title} />
                </td>
                <td colSpan="3">
                  <b>{item.title}</b>
                </td>
              </tr>
              <tr>
                <td>Duration:{item.duration}</td>
                <td>Package Code:{item.code}</td>
                <td>Starting from</td>
              </tr>
              <tr>
                <td>Origin:{item.origin}</td>
                <td>Destination:{item.destination}</td>
                <td>Rs. {item.price}</td>
              </tr>
              <tr>
                <td>Departure:{item.departure}</td>
                <td>Upcoming Date Of Journey:{item.upcoming}</td>
                <td>
                  <input type="submit" name="bn" value="Book Now" onClick={onBookNow} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Inclusions: {item.inclusions}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </center>
    </div>
  );
}

export default NationalPackagePage;
