import React, { useState } from "react";

const defaultClasses = [
  "Second Sitting (2S)",
  "Sleeper (SL)",
  "AC 3 Tier (3A)",
  "AC 2 Tier (2A)",
  "AC First Class (1A)"
];

const classFareMap = {
  "Second Sitting (2S)": 220,
  "Sleeper (SL)": 380,
  "AC 3 Tier (3A)": 720,
  "AC 2 Tier (2A)": 1080,
  "AC First Class (1A)": 1620
};

function TrainList({ trains, bookingQuery, onBack, onBookNow }) {
  const [selectedClassByTrain, setSelectedClassByTrain] = useState({});
  const [selectedSeatsByTrain, setSelectedSeatsByTrain] = useState({});

  const toggleSeat = (trainId, seatNumber) => {
    setSelectedSeatsByTrain((previous) => {
      const currentSeats = previous[trainId] || [];
      const isSelected = currentSeats.includes(seatNumber);
      const nextSeats = isSelected
        ? currentSeats.filter((seat) => seat !== seatNumber)
        : [...currentSeats, seatNumber];

      return {
        ...previous,
        [trainId]: nextSeats
      };
    });
  };

  const handleSelectClass = (trainId, className) => {
    setSelectedClassByTrain((previous) => ({
      ...previous,
      [trainId]: className
    }));
  };

  const calculateFare = (trainId) => {
    const selectedClass = selectedClassByTrain[trainId] || defaultClasses[0];
    const seatCount = (selectedSeatsByTrain[trainId] || []).length || 1;
    return classFareMap[selectedClass] * seatCount;
  };

  const handleBook = (train) => {
    const selectedClass = selectedClassByTrain[train.id] || defaultClasses[0];
    const selectedSeats = selectedSeatsByTrain[train.id] || [];

    onBookNow({
      trainName: train.name,
      travelClass: selectedClass,
      from: bookingQuery?.from || train.fromStation,
      to: bookingQuery?.to || train.toStation,
      travelDate: bookingQuery?.travelDate || train.fromDate,
      seats: selectedSeats.length ? selectedSeats : [1],
      fare: calculateFare(train.id)
    });
  };

  return (
    <div className="find-trains-page">
      <h2>Available Trains</h2>
      <button className="back-btn" type="button" onClick={onBack}>
        Back
      </button>

      {trains.map((train) => {
        const selectedClass = selectedClassByTrain[train.id] || "";
        const selectedSeats = selectedSeatsByTrain[train.id] || [];

        return (
          <div className="train-card" key={train.id}>
            <div className="train-header">
              <div className="train-name">{train.name}</div>
              <div className="train-runs">
                <span>Runs on:</span> {train.runsOn}
              </div>
              <div className="train-schedule-link">Schedule</div>
            </div>

            <div className="train-journey">
              <div className="station">
                <strong>{train.fromTime}</strong>
                {train.fromStation}
                <br />
                <small>{train.fromDate}</small>
              </div>
              <div className="duration">
                <span>{train.duration}</span>
              </div>
              <div className="station" style={{ textAlign: "right" }}>
                <strong>{train.toTime}</strong>
                {train.toStation}
                <br />
                <small>{train.toDate}</small>
              </div>
            </div>

            <div className="train-classes">
              {defaultClasses.map((className) => (
                <button
                  key={`${train.id}-${className}`}
                  type="button"
                  className={`class-btn ${selectedClass === className ? "active-class" : ""}`}
                  onClick={() => handleSelectClass(train.id, className)}
                >
                  {className}
                </button>
              ))}
            </div>

            <div className="seat-selector">
              <span className="seat-label">Select Seats:</span>
              {[1, 2, 3, 4, 5, 6].map((seatNo) => (
                <button
                  key={`${train.id}-seat-${seatNo}`}
                  type="button"
                  className={`seat-btn ${selectedSeats.includes(seatNo) ? "seat-active" : ""}`}
                  onClick={() => toggleSeat(train.id, seatNo)}
                >
                  {seatNo}
                </button>
              ))}
              <span className="fare-text">Fare: Rs. {calculateFare(train.id)}</span>
            </div>

            <div className="train-footer">
              <button type="button" name="bn" className="btn-book" onClick={() => handleBook(train)}>
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrainList;
