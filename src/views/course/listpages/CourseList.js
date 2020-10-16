import React, { useState } from "react";
import {
  Badge,
  Button,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from "react-i18next";
const CourseList = (props) => {
  const [search_Menu, setSearch_Menu] = useState(false);
  const [settings_Menu, setSettings_Menu] = useState(false);
  const [other_Menu, setOther_Menu] = useState(false);

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setSearch_Menu(!search_Menu);
  };

  const toggleSettings = () => {
    setSettings_Menu(!settings_Menu);
  };

  const toggleOther = () => {
    setOther_Menu(!other_Menu);
  };

  const transactions = [
    {
      id: "customCheck2",
      orderId: "#SK2540",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck3",
      orderId: "#SK2541",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck4",
      orderId: "#SK2542",
      billingName: "Juan Mitchell",
      Date: "06 Oct, 2019",
      total: "$384",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
    {
      id: "customCheck5",
      orderId: "#SK2543",
      billingName: "Barry Dick",
      Date: "05 Oct, 2019",
      total: "$412",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-mastercard",
      paymentMethod: "Mastercard",
      link: "#",
    },
    {
      id: "customCheck6",
      orderId: "#SK2544",
      billingName: "Ronald Taylor",
      Date: "04 Oct, 2019",
      total: "$404",
      badgeClass: "warning",
      paymentStatus: "Refund",
      methodIcon: "fa-cc-visa",
      paymentMethod: "Visa",
      link: "#",
    },
    {
      id: "customCheck7",
      orderId: "#SK2545",
      billingName: "Jacob Hunter",
      Date: "04 Oct, 2019",
      total: "$392",
      badgeClass: "success",
      paymentStatus: "Paid",
      methodIcon: "fa-cc-paypal",
      paymentMethod: "Paypal",
      link: "#",
    },
  ];

  return (
    <>
      <Row className="pb-3">
        <Col md="4" xs="9">
          <h5 className="font-size-15 mb-1">Course List</h5>
        </Col>
        <Col md="8" xs="3">
          <ul className="list-inline user-chat-nav text-right mb-0">
            <li className="list-inline-item d-none d-sm-inline-block">
              <Dropdown isOpen={search_Menu} toggle={toggleSearch}>
                <DropdownToggle
                  tag="i"
                  className="btn nav-btn dropdown-toggle"
                  type="button"
                >
                  <i className="bx bx-search-alt-2"></i>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-md">
                  <Form className="p-3">
                    <FormGroup className="m-0">
                      <InputGroup>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item  d-none d-sm-inline-block">
              <Dropdown isOpen={settings_Menu} toggle={toggleSettings}>
                <DropdownToggle className="btn nav-btn" tag="i">
                  <i className="bx bx-filter-alt"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">View Profile</DropdownItem>
                  <DropdownItem href="#">Clear chat</DropdownItem>
                  <DropdownItem href="#">Muted</DropdownItem>
                  <DropdownItem href="#">Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>

            <li className="list-inline-item">
              <Button
                color="light"
                outline
                className="btn btn-light waves-effect"
                onClick={toggleOther}
              >
                <i className="bx bx-plus-circle"></i> Create New
              </Button>
              <Dropdown isOpen={other_Menu}>
                <DropdownToggle style={{ display: "none" }}></DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">Assignment</DropdownItem>
                  <DropdownItem href="#">Quiz</DropdownItem>
                  <DropdownItem href="#">
                    Multiple Choices Questions
                  </DropdownItem>
                  <DropdownItem href="#">Add True/False Questions</DropdownItem>
                  <DropdownItem href="#">
                    Fill-in-the-blanks Questions
                  </DropdownItem>
                  <DropdownItem href="#">Short Answers Questions</DropdownItem>
                  <DropdownItem href="#">Essay</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="table-responsive">
        <table className="table table-centered table-nowrap mb-0">
          <thead className="thead-light">
            <tr>
              <th style={{ width: "20px" }}>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    &nbsp;
                  </label>
                </div>
              </th>
              <th>Order ID</th>
              <th>Billing Name</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment Status</th>
              <th>Payment Method</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, key) => (
              <tr key={"_tr_" + key}>
                <td>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={transaction.id}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor={transaction.id}
                    >
                      &nbsp;
                    </label>
                  </div>
                </td>
                <td>
                  <Link to="#" className="text-body font-weight-bold">
                    {" "}
                    {transaction.orderId}{" "}
                  </Link>{" "}
                </td>
                <td>{transaction.billingName}</td>
                <td>{transaction.Date}</td>
                <td>{transaction.total}</td>
                <td>
                  <Badge
                    className={
                      "font-size-12 badge-soft-" + transaction.badgeClass
                    }
                    color={transaction.badgeClass}
                    pill
                  >
                    {transaction.paymentStatus}
                  </Badge>
                </td>
                <td>
                  <i className={"fab " + transaction.methodIcon + " mr-1"}></i>{" "}
                  {transaction.paymentMethod}
                </td>
                <td>
                  <Button
                    type="button"
                    color="primary"
                    size="sm"
                    className="btn-rounded waves-effect waves-light"
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default withNamespaces()(CourseList);
