import React from "react";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <p className="subtitle">We're here to help. Reach out to us through any of the channels below.</p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">📞</div>
            <div className="card-body">
              <h3>Customer Care Numbers</h3>
              <p>0884-4880-8840 | 0663-3660-6630</p>
              <p className="note">Available Monday - Saturday, 8 AM to 8 PM</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">🎫</div>
            <div className="card-body">
              <h3>Tickets Booked via IRCTC</h3>
              <p>General Information and Support</p>
              <p className="note">For queries related to booking, PNR status, and travel information.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">✉️</div>
            <div className="card-body">
              <h3>Cancellation Enquiries</h3>
              <p>
                <a href="mailto:xyz@irtcc.co.in">xyz@irtcc.co.in</a>
              </p>
              <p className="note">Email us for refund status and cancellation requests.</p>
            </div>
          </div>
        </div>

        <p className="footer-note">© 2024 Railway Reservation System. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactPage;
