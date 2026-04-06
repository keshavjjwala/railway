import React, { useState } from "react";

function HtmlFormsPage() {
  const [formResult, setFormResult] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormResult("Form submitted successfully.");
  };

  const handleReset = () => {
    setFormResult("");
  };

  return (
    <div className="html-forms-page">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>First Name:</td>
              <td>
                <input type="text" name="name" defaultValue="first name" />
              </td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>
                <input type="text" name="lname" defaultValue="last name" />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pass" defaultValue="" />
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                <textarea rows="3" cols="10" name="address" defaultValue=" " />
              </td>
            </tr>
            <tr>
              <td>How many tickets</td>
              <td>
                <input type="radio" name="tickets" defaultChecked />1
                <input type="radio" name="tickets" />2
                <input type="radio" name="tickets" />3
                <input type="radio" name="tickets" />4
              </td>
            </tr>
            <tr>
              <td>Choose your gender:</td>
              <td>
                <input type="radio" name="gender" /> Male
                <input type="radio" name="gender" /> Female
              </td>
            </tr>
            <tr>
              <td>Upolad your Aadhar:</td>
              <td>
                <input type="file" name="fileupload" accept="image/jpg, image/png, image/jpeg" />
              </td>
            </tr>
            <tr>
              <td>From:</td>
              <td>
                <select name="dropdown" defaultValue="Jammu&Kashmir">
                  <option value="Jammu&Kashmir">Jammu&Kashmir</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Andhara pradesh">Andhara pradesh</option>
                  <option value="Telangana">Telangana</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" name="submit" value="Submit" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="reset" name="reset" value="Reset" onClick={handleReset} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {formResult ? <p className="form-result">{formResult}</p> : null}
    </div>
  );
}

export default HtmlFormsPage;
