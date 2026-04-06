import React from "react";

const touristTrains = [
  {
    image: "/images/15.jpg",
    title: "AKSHAYA TRITIYA SPECIAL GANGA SNAN",
    duration: "10 Nights/11 Days",
    code: "SZFTR01",
    origin: "MADURAI",
    destination: "AGRA / ALLAHABAD / DELHI / Gaya / HARIDWAR / HYDERABAD / Mathura / VARANASI",
    price: "19900",
    departure: "28-APR-2022",
    upcoming: "28-APR-22"
  },
  {
    image: "/images/16.jpg",
    title: "05 JYOTIRLINGA YATRA EX. GKP",
    duration: "8 Nights/9 Days",
    code: "NZSD03",
    origin: "GORAKHPUR",
    destination: "DWARKADHISH / MAHAKALESHWAR / NAGESHWAR / OMKARESHWAR / SOMNATH / TRIAMBAKESHWAR",
    price: "17670",
    departure: "14-MAY-2022",
    upcoming: "14-MAY-22"
  },
  {
    image: "/images/17.jpg",
    title: "SWADESH DARSHAN UTTAR BHARAT",
    duration: "8 Nights/9 Days",
    code: "WZSD01",
    origin: "PUNE",
    destination: "AGRA / AMRITSAR / HARIDWAR / MATHURA / VAISHNO DEVI",
    price: "13990",
    departure: "21-MAY-2022",
    upcoming: "21-MAY-22"
  },
  {
    image: "/images/18.jpg",
    title: "BHARATA PAITRIKA YATRA",
    duration: "11 Nights/12 Days",
    code: "SZSD02",
    origin: "TRIVANDRUM",
    destination: "AJANTA / AURANGABAD / GOA / HAMPI / HYDERABAD / MUMBAI / MYSORE / STATUE OF UNITY",
    price: "21100",
    departure: "23-MAY-2022",
    upcoming: "23-MAY-22"
  },
  {
    image: "/images/19.jpg",
    title: "NORTH INDIA TRAIN TOUR WITH MATA VAISHNODEVI",
    duration: "7 Nights/8 Days",
    code: "SCZFT01",
    origin: "RENIGUNTA JN / TIRUPATI",
    destination: "AGRA / AMRITSAR / Mathura / VAISHNO DEVI",
    price: "18120",
    departure: "27-MAY-2022",
    upcoming: "27-MAY-22"
  },
  {
    image: "/images/20.jpg",
    title: "MAHALAYA PIND DAAN EX SECUNDERABAD",
    duration: "5 Nights/6 Days",
    code: "SCZSD03",
    origin: "SECUNDERABAD",
    destination: "GAYA / PRAYAG GHAT SANGAM / VARANASI",
    price: "14485",
    departure: "15-SEP-2022",
    upcoming: "15-SEP-22"
  }
];

function TouristTrainsPage({ onBookNow }) {
  return (
    <div className="legacy-package-page">
      <center>
        <h1>
          <u>
            <i>Tourist Trains:</i>
          </u>
        </h1>

        {touristTrains.map((item) => (
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
                <td>Inclusions: Train Bus Meal Guide/Escort</td>
              </tr>
            </tbody>
          </table>
        ))}
      </center>
    </div>
  );
}

export default TouristTrainsPage;
