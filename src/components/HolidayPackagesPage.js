import React from "react";

const packages = [
  {
    image: "/images/5.jpg",
    alt: "Dakshin Darshan",
    title: "Dakshin Darshan with Mallikarjuna Yatra",
    duration: "9 Nights / 10 Days",
    code: "WZPSTT17",
    origin: "Indore",
    destination: "Kanchipuram / Kanyakumari / Madurai / Mallikarjun / Rameshwaram",
    departure: "24-April-2022",
    nextJourney: "24-April-2022",
    price: "9,450"
  },
  {
    image: "/images/8.jpg",
    alt: "Matarani Rajdhani",
    title: "Matarani Rajdhani Package (Week-end)",
    duration: "3 Nights / 4 Days",
    code: "NDR01W",
    origin: "Delhi",
    destination: "Jammu / Katra",
    departure: "Every Friday and Saturday",
    nextJourney: "27-Apr-2022",
    price: "7,390"
  },
  {
    image: "/images/7.jpg",
    alt: "Poorva Sandhya",
    title: "Poorva Sandhya",
    duration: "3 Nights / 4 Days",
    code: "SHR083",
    origin: "Hyderabad / Secunderabad",
    destination: "Kanipakam / Srikalahasti / Tiruchanur / Tirumala",
    departure: "Daily",
    nextJourney: "27-Apr-2022",
    price: "4,930"
  },
  {
    image: "/images/9.jpg",
    alt: "Vaishnodevi Darshan",
    title: "Vaishnodevi Darshan by Uttar S.Kranti (Standard)",
    duration: "3 Nights / 4 Days",
    code: "NDR03",
    origin: "Delhi",
    destination: "Katra",
    departure: "Daily",
    nextJourney: "27-Apr-2022",
    price: "2,845"
  }
];

function HolidayPackagesPage({ onBookNow }) {
  return (
    <div className="holiday-page">
      <h1>Holiday Packages</h1>

      {packages.map((item) => (
        <div className="package-card" key={item.code}>
          <img className="pkg-image" src={item.image} alt={item.alt} />
          <div className="pkg-content">
            <div className="pkg-title">{item.title}</div>
            <div className="pkg-details">
              <span>
                <span className="label">Duration:</span> {item.duration}
              </span>
              <span>
                <span className="label">Package Code:</span> {item.code}
              </span>
              <span>
                <span className="label">Origin:</span> {item.origin}
              </span>
              <span>
                <span className="label">Destination:</span> {item.destination}
              </span>
              <span>
                <span className="label">Departure:</span> {item.departure}
              </span>
              <span>
                <span className="label">Next Journey:</span> {item.nextJourney}
              </span>
            </div>
            <div className="pkg-bottom">
              <div>
                <div className="pkg-price">
                  <small>Starting from</small>Rs. {item.price}
                </div>
                <div className="pkg-inclusions">Inclusions: Train • Meal • Insurance</div>
              </div>
              <button type="button" name="bn" className="btn-book" onClick={onBookNow}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HolidayPackagesPage;
