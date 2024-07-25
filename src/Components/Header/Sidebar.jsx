import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'
import "./Style.css"
import { GrDashboard } from 'react-icons/gr'
const Sidebar = () => {
  const URL = useLocation()


  return (
    <div className="sidebar">
      <div className="offcanvas offcanvas-start offcanvas_sidebar" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <NavLink to={"/"} className="text-center text-black">Company Name - <small className="bg-danger text-white py-1 px-2">Admin</small></NavLink>
          <button type="button" className="btn-close offcanvas_close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="dropdown_item pb-5">

            <li className="dropdown_list">
              <NavLink to={"/"} className="dropdown_btn">
                <span className="dropdown_list_name"><GrDashboard className="dropdown_list_icon" />Dashboard</span>
              </NavLink>
            </li>

            <li className="dropdown_list">
              <NavLink to={"/users"} className="dropdown_btn">
                <span className="dropdown_list_name"><GrDashboard className="dropdown_list_icon" />Users</span>
              </NavLink>
            </li>

            <div className="accordion accordion-flush" id="accordionFlushExample">

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePaymenta" aria-expanded="false" aria-controls="flush-collapsePaymenta">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Accounts</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapsePaymenta" className={URL.pathname === "/accounts" || URL.pathname === "/payment-methods" || URL.pathname === "/account-statement" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingPaymenta" data-bs-parent="#accordionFlushExample">
                  <NavLink to={"/accounts"} className="dropdown_link">Chart of Accounts</NavLink>
                  <NavLink to={"/account-statement"} className="dropdown_link">Account Statement</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseUser" aria-expanded="false" aria-controls="flush-collapseUser">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Users</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapseUser" className={URL.pathname === "/all-user-list" || URL.pathname === "/sales-person" || URL.pathname === "/suppliers-list" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingUser" data-bs-parent="#accordionFlushExample">

                  <NavLink to={"/all-user-list"} className="dropdown_link">All User</NavLink>
                  <NavLink to={"/sales-person"} className="dropdown_link">Sales Person List</NavLink>
                  <NavLink to={"/suppliers-list"} className="dropdown_link">Suppliers</NavLink>
                  <NavLink to={"/area-manager"} className="dropdown_link">Area Manager</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseInventory" aria-expanded="false" aria-controls="flush-collapseInventory">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Inventory</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapseInventory" className={URL.pathname === "/inventory-raw-item" || URL.pathname === "/inventory-product" || URL.pathname === "/inventory-pack-size" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingInventory" data-bs-parent="#accordionFlushExample">
                  <NavLink to={"/inventory-raw-item"} className="dropdown_link">Raw item</NavLink>
                  <NavLink to={"/inventory-product"} className="dropdown_link">Product</NavLink>
                  <NavLink to={"/inventory-pack-size"} className="dropdown_link">Pack size</NavLink>
                  <NavLink to={"/stock-management"} className="dropdown_link">Stock Adjustment</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseInvoice" aria-expanded="false" aria-controls="flush-collapseInvoice">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Sales</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapseInvoice" className={URL.pathname === "/invoice-history" || URL.pathname === "/return-history" || URL.pathname === "/refund-history" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingInvoice" data-bs-parent="#accordionFlushExample">

                  <NavLink to={"/invoice-history"} className="dropdown_link">Invoice</NavLink>
                  <NavLink to={"/return-history"} className="dropdown_link">Return</NavLink>
                  <NavLink to={"/refund-history"} className="dropdown_link">Refund</NavLink>
                  <NavLink to={"/sample-history"} className="dropdown_link">Sample</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsePayment2" aria-expanded="false" aria-controls="flush-collapsePayment2">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Transaction</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapsePayment2" className={URL.pathname === "/transaction-pay-to-supplier" || URL.pathname === "/transaction-receive" || URL.pathname === "/transaction-transfer" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingPayment2" data-bs-parent="#accordionFlushExample">
                  <NavLink to={"/transaction-pay-to-supplier"} className="dropdown_link">Pay to supplier</NavLink>
                  <NavLink to={"/transaction-receive"} className="dropdown_link">Receive</NavLink>
                  <NavLink to={"/transaction-transfer"} className="dropdown_link">Transfer</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <button className="dropdown_btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseReports" aria-expanded="false" aria-controls="flush-collapseReports">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Reports</span>
                  <IoIosArrowDown className="dropdown_icon" />
                </button>

                <div id="flush-collapseReports" className={URL.pathname === "/transaction-reports" || URL.pathname === "/purchase-reports" || URL.pathname === "/expense-reports" ? `accordion-collapse collapse show` : `accordion-collapse collapse hide`} aria-labelledby="flush-headingReports" data-bs-parent="#accordionFlushExample">

                  <NavLink to={"/sales-reports"} className="dropdown_link">Sales Reports</NavLink>
                  <NavLink to={"/transfer-reports"} className="dropdown_link">Transfer Reports</NavLink>
                  <NavLink to={"/expense-reports"} className="dropdown_link">Expense Reports</NavLink>
                  <NavLink to={"/return-reports"} className="dropdown_link">Return Reports</NavLink>
                  <NavLink to={"/refund-reports"} className="dropdown_link">Refund Reports</NavLink>
                  <NavLink to={"/receive-reports"} className="dropdown_link">Receive Reports</NavLink>
                  <NavLink to={"/purchase-reports"} className="dropdown_link">Purchase Reports</NavLink>
                </div>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/payment-expenses"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Expense</span>
                </NavLink>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/purchases"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Purchase</span>
                </NavLink>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/work-order"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Work Order</span>
                </NavLink>
              </li>

              <li className="dropdown_list">
                <NavLink to={"/setting"} className="dropdown_btn">
                  <span className="dropdown_list_name">
                    <GrDashboard className="dropdown_list_icon" />Settings</span>
                </NavLink>
              </li>

            </div>
          </ul>
        </div>
      </div >
    </div >
  )
}

export default Sidebar