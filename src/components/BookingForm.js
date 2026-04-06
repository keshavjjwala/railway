import React, { useState } from "react";

function BookingForm({ onFindTrains }) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    travelDate: "",
    travelClass: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSwapStations = () => {
    setFormData((previous) => ({
      ...previous,
      from: previous.to,
      to: previous.from
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic beginner-friendly validation for required fields.
    if (!formData.from || !formData.to || !formData.travelDate || !formData.travelClass) {
      setErrorMessage("Please select From, To, Date and Class before searching.");
      return;
    }

    if (formData.from === formData.to) {
      setErrorMessage("From and To station cannot be the same.");
      return;
    }

    setErrorMessage("");
    alert("Finding the best trains.");
    alert("To proceed click ok");
    onFindTrains(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-row">
        <select name="from" id="From" value={formData.from} onChange={handleChange}>
          <option value="">From</option>
          <option value="Jammu & Kashmir">Jammu & Kashmir</option>
          <option value="Punjab">Punjab</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
        </select>
      </div>

      <div
        className="swap-row"
        onClick={handleSwapStations}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleSwapStations();
          }
        }}
        role="button"
        tabIndex={0}
      >
        &#8597;
      </div>


      <div className="field-row">
        <select name="to" id="To" value={formData.to} onChange={handleChange}>
          <option value="">To</option>
          <option value="Jammu & Kashmir">Jammu & Kashmir</option>
          <option value="Punjab">Punjab</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
        </select>
      </div>

      <input
        type="date"
        name="travelDate"
        value={formData.travelDate}
        onChange={handleChange}
      />

      <select name="travelClass" value={formData.travelClass} onChange={handleChange}>
        <option value="">All Classes</option>
        <option value="EA">Anubhuti Class (EA)</option>
        <option value="1A">AC First Class (1A)</option>
        <option value="EC">Exec. Chair Car (EC)</option>
        <option value="2A">AC 2 Tier (2A)</option>
        <option value="FC">First Class (FC)</option>
        <option value="3A">AC 3 Tier (3A)</option>
        <option value="3E">AC 3 Economy (3E)</option>
        <option value="CC">AC Chair Car (CC)</option>
        <option value="SL">Sleeper (SL)</option>
        <option value="2S">Second Sitting (2S)</option>
      </select>

      {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

      <input type="submit" value="Find Trains" id="Find" />
    </form>
  );
}

export default BookingForm;
