import React, { useState } from "react";

function Payment({ bookingData, onBackToHome }) {
  const [paymentType, setPaymentType] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!paymentType) {
      setConfirmationMessage("Please choose a payment method.");
      return;
    }

    setConfirmationMessage(
      `Payment confirmed for ${bookingData?.trainName || "selected train"}. Amount paid: Rs. ${bookingData?.fare || 0}.`
    );
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h1>Payment Methods</h1>

        {bookingData ? (
          <div className="booking-summary">
            <p>
              <strong>Train:</strong> {bookingData.trainName}
            </p>
            <p>
              <strong>Route:</strong> {bookingData.from} to {bookingData.to}
            </p>
            <p>
              <strong>Class:</strong> {bookingData.travelClass}
            </p>
            <p>
              <strong>Seats:</strong> {bookingData.seats.join(", ")}
            </p>
            <p>
              <strong>Total Fare:</strong> Rs. {bookingData.fare}
            </p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <label className="option">
            <input
              type="radio"
              name="c"
              value="netbanking"
              checked={paymentType === "netbanking"}
              onChange={(event) => setPaymentType(event.target.value)}
            />
            <div>
              <span>Net Banking</span>
              <span className="sub">Pay directly from your bank account</span>
            </div>
          </label>

          <label className="option">
            <input
              type="radio"
              name="c"
              value="upi"
              checked={paymentType === "upi"}
              onChange={(event) => setPaymentType(event.target.value)}
            />
            <div>
              <span>UPI</span>
              <span className="sub">Google Pay, PhonePe, Paytm and more</span>
            </div>
          </label>

          <label className="option">
            <input
              type="radio"
              name="c"
              value="creditcard"
              checked={paymentType === "creditcard"}
              onChange={(event) => setPaymentType(event.target.value)}
            />
            <div>
              <span>Credit Card</span>
              <span className="sub">Visa, Mastercard, RuPay accepted</span>
            </div>
          </label>

          <label className="option">
            <input
              type="radio"
              name="c"
              value="debitcard"
              checked={paymentType === "debitcard"}
              onChange={(event) => setPaymentType(event.target.value)}
            />
            <div>
              <span>Debit Card</span>
              <span className="sub">All major banks supported</span>
            </div>
          </label>

          <button type="submit" name="p" value="proceed">
            Proceed to Pay
          </button>
        </form>

        {confirmationMessage ? <p className="confirmation-text">{confirmationMessage}</p> : null}

        <button className="back-home-btn" type="button" onClick={onBackToHome}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Payment;
