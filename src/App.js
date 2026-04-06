import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import "./components/pageStyles.css";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import TrainList from "./components/TrainList";
import Payment from "./components/Payment";
import MealsPage from "./components/MealsPage";
import HolidayPackagesPage from "./components/HolidayPackagesPage";
import ServiceAtStationPage from "./components/ServiceAtStationPage";
import ContactPage from "./components/ContactPage";
import NationalPackagePage from "./components/NationalPackagePage";
import InternationalPackagePage from "./components/InternationalPackagePage";
import TouristTrainsPage from "./components/TouristTrainsPage";
import LoginPage from "./components/LoginPage";
import HtmlFormsPage from "./components/HtmlFormsPage";
import LinkPage from "./components/LinkPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [bookingQuery, setBookingQuery] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Hash-based mapping keeps extra legacy pages reachable in SPA mode.
  const pageToHash = {
    home: "#home",
    findTrains: "#find-trains",
    payment: "#payment",
    meals: "#meals",
    holidayPackages: "#holiday-packages",
    services: "#services",
    contact: "#contact",
    nationalPackage: "#national-package",
    internationalPackage: "#international-package",
    touristTrains: "#tourist-trains",
    login: "#login",
    htmlForms: "#html-forms",
    link: "#link"
  };

  const hashToPage = {
    "#home": "home",
    "#find-trains": "findTrains",
    "#payment": "payment",
    "#meals": "meals",
    "#holiday-packages": "holidayPackages",
    "#services": "services",
    "#contact": "contact",
    "#national-package": "nationalPackage",
    "#international-package": "internationalPackage",
    "#tourist-trains": "touristTrains",
    "#login": "login",
    "#html-forms": "htmlForms",
    "#link": "link"
  };

  const navigateToPage = (pageName, updateHash = true) => {
    setCurrentPage(pageName);
    if (updateHash && pageToHash[pageName]) {
      window.location.hash = pageToHash[pageName];
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const pageFromHash = hashToPage[window.location.hash] || "home";
      setCurrentPage(pageFromHash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Train data is kept as an array so cards can be rendered dynamically.
  const trains = useMemo(
    () => [
      {
        id: 1,
        name: "All Jat Express (14372)",
        runsOn: "Mo Tu We Th Fr Su",
        fromTime: "22:15",
        fromStation: "Delhi",
        fromDate: "Fri, 22 Apr",
        duration: "06:05 hrs",
        toTime: "03:20",
        toStation: "Jalandhar Cant",
        toDate: "Sat, 23 Apr"
      },
      {
        id: 2,
        name: "Konark Express (11018)",
        runsOn: "Mo Tu We Th Fr Sa Su",
        fromTime: "14:10",
        fromStation: "C Shivaji Mah T",
        fromDate: "Fri, 22 Apr",
        duration: "21:33 hrs",
        toTime: "11:43",
        toStation: "Rajahmundry",
        toDate: "Sat, 23 Apr"
      },
      {
        id: 3,
        name: "EXP (22690)",
        runsOn: "Mo Tu We Th Fr Sa Su",
        fromTime: "07:05",
        fromStation: "Secunderabad Jn",
        fromDate: "Fri, 22 Apr",
        duration: "22:15 hrs",
        toTime: "05:20",
        toStation: "H Nizamuddin",
        toDate: "Sat, 23 Apr"
      },
      {
        id: 4,
        name: "HWH YPR Express (12865)",
        runsOn: "Mo Tu We Th Fr Sa Su",
        fromTime: "15:00",
        fromStation: "Rajahmundry",
        fromDate: "Mon, 25 Apr",
        duration: "15:20 hrs",
        toTime: "07:00",
        toStation: "Yesvantpur Jn",
        toDate: "Tue, 26 Apr"
      },
      {
        id: 5,
        name: "EXP (12653)",
        runsOn: "Mo Tu We Th Fr Sa Su",
        fromTime: "16:30",
        fromStation: "Vijayawada Jn",
        fromDate: "Tue, 26 Apr",
        duration: "22:38 hrs",
        toTime: "15:28",
        toStation: "Vadodara Jn",
        toDate: "Wed, 27 Apr"
      }
    ],
    []
  );

  const handleFindTrains = (formData) => {
    setBookingQuery(formData);
    navigateToPage("findTrains");
  };

  const handleBookTrain = (bookingData) => {
    setSelectedBooking(bookingData);
    navigateToPage("payment");
  };

  let pageContent = null;

  if (currentPage === "home") {
    pageContent = (
      <div className="home-page">
        <Navbar onNavigate={navigateToPage} />
        <div className="Body">
          <div id="MainDiv">
            <div className="box-title">Book Your Ticket Here</div>
            <BookingForm onFindTrains={handleFindTrains} />
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === "findTrains") {
    pageContent = (
      <TrainList
        trains={trains}
        bookingQuery={bookingQuery}
        onBack={() => navigateToPage("home")}
        onBookNow={handleBookTrain}
      />
    );
  }

  if (currentPage === "payment") {
    pageContent = (
      <Payment
        bookingData={selectedBooking}
        onBackToHome={() => navigateToPage("home")}
      />
    );
  }

  if (currentPage === "meals") {
    pageContent = <MealsPage />;
  }

  if (currentPage === "holidayPackages") {
    pageContent = <HolidayPackagesPage onBookNow={() => navigateToPage("payment")} />;
  }

  if (currentPage === "services") {
    pageContent = <ServiceAtStationPage />;
  }

  if (currentPage === "contact") {
    pageContent = <ContactPage />;
  }

  if (currentPage === "nationalPackage") {
    pageContent = <NationalPackagePage onBookNow={() => navigateToPage("payment")} />;
  }

  if (currentPage === "internationalPackage") {
    pageContent = <InternationalPackagePage onBookNow={() => navigateToPage("payment")} />;
  }

  if (currentPage === "touristTrains") {
    pageContent = <TouristTrainsPage onBookNow={() => navigateToPage("payment")} />;
  }

  if (currentPage === "login") {
    pageContent = <LoginPage />;
  }

  if (currentPage === "htmlForms") {
    pageContent = <HtmlFormsPage />;
  }

  if (currentPage === "link") {
    pageContent = <LinkPage />;
  }

  return <>{pageContent}</>;
}

export default App;
  