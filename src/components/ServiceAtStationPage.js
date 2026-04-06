import React from "react";

const wheelChairRows = [
  ["1.", "Delhi", "DLH", "4 Hrs", "TFC at Delhi", "abc@gmail.com", "92******34"],
  ["2.", "Jalandhar Cant", "JLD CT", "6 Hrs", "TFC at JLD CT", "def@gmail.com", "81******56"],
  ["3.", "C Shivaji Mah T", "CSMT", "4 Hrs", "TFC at CSMT", "ghi@gmail.com", "63******65"],
  ["4.", "Rajahmundry", "RJY", "24 Hrs", "TFC at RJY", "jkl@gmail.com", "88******77"],
  ["5.", "Secunderabad Jn", "SJN", "10 Hrs", "Announcement Room at PF no.5", "mno@gmail.com", "79******45"],
  ["6.", "H Nizamuddin", "HND", "5 Hrs", "Cell Kitchen at PF no.1", "pqr@gmail.com", "83******56"],
  ["7.", "Yesvantpur Jn", "YSV", "6 Hrs", "TFC at YSV", "stu@gmail.com", "99******56"],
  ["8.", "Vijayawada Jn", "VJY", "24 Hrs", "Counseling Hall at PF no.7", "wvs@gmail.com", "75******56"],
  ["9.", "Vadodara Jn", "VJN", "7 Hrs", "At PF no.3", "usr@gmail.com", "89******21"],
  ["10.", "Lucknow Jn", "LKO", "4 Hrs", "Refreshment Room, Lucknow Station", "zyx@gmail.com", "68******98"]
];

function ServiceAtStationPage() {
  return (
    <div className="service-page">
      <h1>Wheel Chairs</h1>

      <p className="note">
        <strong>Note:</strong> We are providing wheel chairs for physically handicapped persons, senior citizens,
        and those having knee pain.
      </p>

      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Station Name</th>
            <th>Station Code</th>
            <th>Booking Time (Upto Hrs.)</th>
            <th>Collection Center</th>
            <th>Contact Email</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {wheelChairRows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
              <td>{row[5]}</td>
              <td>{row[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceAtStationPage;
