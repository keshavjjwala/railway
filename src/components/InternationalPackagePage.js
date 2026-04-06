import React from "react";

const internationalPackages = [
  {
    image: "/images/21.jpg",
    title: "BEST OF NEPAL",
    duration: "5 Nights/6 Days",
    code: "NDO04",
    origin: "DELHI",
    destination: "KATHMANDU / POKHARA",
    price: "31500",
    departure: "28-APR-2022 & 11-MAY-2022, 12-MAY-2022, 14-JUNE-2022",
    upcoming: "28-APR-22"
  },
  {
    image: "/images/22.jpg",
    title: "SRILANKA",
    duration: "5 Nights/6 Days",
    code: "EHO028",
    origin: "KOLKATA",
    destination: "COLOMBO / KANDY / NUWARA ELIYA",
    price: "68670",
    departure: "25-MAY-2022",
    upcoming: "25-MAY-2022"
  },
  {
    image: "/images/23.jpg",
    title: "ADBHUT BHUTAN",
    duration: "5 Nights/6 Days",
    code: "NDO14",
    origin: "DELHI",
    destination: "BHUTAN",
    price: "35200",
    departure: "23-MAY-2022",
    upcoming: "23-MAY-22"
  },
  {
    image: "/images/24.jpg",
    title: "MAJESTIC DUBAI",
    duration: "4 Nights/5 Days",
    code: "NDO19",
    origin: "DELHI",
    destination: "DUBAI",
    price: "118120",
    departure: "27-MAY-2022",
    upcoming: "27-MAY-22"
  },
  {
    image: "/images/25.jpg",
    title: "DELIGHTFUL THAILAND",
    duration: "4 Nights/5 Days",
    code: "NLO08",
    origin: "LUCKNOW",
    destination: "BANGKOK / PATTAYA",
    price: "14485",
    departure: "25.06.2022",
    upcoming: "25.06.2022"
  }
];

function InternationalPackagePage({ onBookNow }) {
  return (
    <div className="legacy-package-page">
      <center>
        <h1>
          <u>
            <i>International Package:</i>
          </u>
        </h1>

        {internationalPackages.map((item) => (
          <table width="95%" key={item.code}>
            <tbody>
              <tr>
                <td rowSpan="5">
                  <img src={item.image} alt={item.title} />
                </td>
                <td>
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
                <td>Inclusions: Air Bus Hotel Meal Guide/Escort Insurance</td>
              </tr>
            </tbody>
          </table>
        ))}
      </center>
    </div>
  );
}

export default InternationalPackagePage;
