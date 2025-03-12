import { useState } from 'react';
import Select from 'react-select';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const AddUserModel = () => {
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const passwordShowToggle = () => { setShowPassword(!showPassword) };

  const options = [
    { value: "1", label: "User" },
    { value: "2", label: "Manager" },
  ];

  const handleChange = (selectedUserType) => {
    setUserList(selectedUserType);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: "1px solid #dee2e6",
      borderRadius: "0px",
    }),
  };

  return (
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content modal_box rounded-0">
          <form action="">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">User Type</label>
                  <Select
                    options={options}
                    value={userList}
                    onChange={handleChange}
                    isLoading={loading}
                    placeholder={loading ? "Loading..." : "Select User Type..."}
                    isClearable={true}
                    styles={customStyles}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input type={showPassword ? "text" : "password"} className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className='position-relative'>
                    <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                    <button type="button" className='password_show_btn' onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="reset" class="btn btn-secondary rounded-0">
                Reset
              </button>
              <button type="submit" class="btn btn-primary rounded-0">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModel;
