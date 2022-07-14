export const Signup = () => {
  return (
    <>
      <form action="" method="">
        <div class="form-row">
          <div class="form-label">Name</div>
          <div class="form-field">
            <input
              type="text"
              name="name"
              //   value={user.name}
              //   onChange={getUserData}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-label">Password</div>
          <div class="form-field">
            <input
              type="password"
              name="password"
              //   value={user.password}
              //   onChange={getUserData}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-label">Phone</div>
          <div class="form-field">
            <input
              type="number"
              name="phone"
              placeholder="Please enter a number only"
              //   value={user.phone}
              //   onChange={getUserData}
            />{" "}
          </div>
        </div>
        {/* <div class="form-row">
              <div class="form-label">Gender</div>
              <div class="form-field">
                <input type="radio" name="gender" value="male" />
                Male
                <input type="radio" name="gender" value="female" />
                Female
              </div>
            </div> */}
        {/* <div class="form-row">
              <div class="form-label">Preference:</div>
              <div class="form-field">
                <input type="checkbox" name="" />
                Morning
                <input type="checkbox" name="" />
                Evening
              </div>
            </div> */}
        <div class="form-row">
          <div class="form-label">Message</div>
          <div class="form-field">
            <textarea
              name="message"
              rows="5"
              cols="50"
              //   value={user.message}
              //   onChange={getUserData}
            ></textarea>
          </div>
        </div>
        {/* <div class="form-row">
              <div class="form-label">Service</div>
              <div class="form-field">
                <select name="service">
                  <option value="one">Service 1</option>
                  <option value="two">Service 2</option>
                  <option value="three">Service 3</option>
                  <option value="four">Service 4</option>
                </select>
              </div>
            </div> */}
        <div class="form-row">
          <div class="form-label">Date of Birth</div>
          <div class="form-field">
            <input
              type="date"
              name="date"
              //   value={user.dob}
              //   onChange={getUserData}
            />
          </div>
        </div>
        {/* <div class="form-row">
              <div class="form-label">Website</div>
              <div class="form-field">
                <input type="url" name="website" />
              </div>
            </div> */}
        <div class="form-row">
          <div class="form-label">Upload file</div>
          <div class="form-field">
            <input
              type="file"
              name="file"
              //   value={user.uploadFlie}
              //   onChange={getUserData}
            />{" "}
          </div>
        </div>
        <div class="form-row">
          <div class="form-label"> &nbsp; </div>
          <div class="form-field">
            <input type="reset" name="reset" />
            <input type="submit" name="message" value="Submit" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Signup;
