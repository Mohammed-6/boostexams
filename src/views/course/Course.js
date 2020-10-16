import React, { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import classnames from "classnames";
import Assignments from "./listpages/Assignments";
import CourseList from "./listpages/CourseList";
const Course = (props) => {
  const [activeTabJustify, setactiveTabJustify] = useState("1");

  function toggleCustomJustified(tab) {
    if (activeTabJustify !== tab) {
      setactiveTabJustify(tab);
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Course" breadcrumbItem="Add Course" />

          <Card>
            <CardBody>
              <Nav tabs className="nav-tabs-custom nav-justified">
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "1",
                    })}
                    onClick={() => {
                      toggleCustomJustified("1");
                    }}
                  >
                    <span className="d-none d-sm-block">Dashboard</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "2",
                    })}
                    onClick={() => {
                      toggleCustomJustified("2");
                    }}
                  >
                    <span className="d-none d-sm-block">Materials</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "3",
                    })}
                    onClick={() => {
                      toggleCustomJustified("3");
                    }}
                  >
                    <span className="d-none d-sm-block">Assignments</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "4",
                    })}
                    onClick={() => {
                      toggleCustomJustified("4");
                    }}
                  >
                    <span className="d-none d-sm-block">Announcements</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "5",
                    })}
                    onClick={() => {
                      toggleCustomJustified("5");
                    }}
                  >
                    <span className="d-none d-sm-block">Grades</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    className={classnames({
                      active: activeTabJustify === "6",
                    })}
                    onClick={() => {
                      toggleCustomJustified("6");
                    }}
                  >
                    <span className="d-none d-sm-block">Students</span>
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTabJustify}>
                <TabPane tabId="1" className="p-3">
                  <Row>
                    <Col sm="12">
                      <CourseList />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2" className="p-3">
                  <Row>
                    <Col sm="12">
                      <CardText>
                        Food truck fixie locavore, accusamus mcsweeney's marfa
                        nulla single-origin coffee squid. Exercitation +1 labore
                        velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus mollit. Keytar helvetica VHS salvia yr,
                        vero magna velit sapiente labore stumptown. Vegan fanny
                        pack odio cillum wes anderson 8-bit.
                      </CardText>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3" className="p-3">
                  <Row>
                    <Col sm="12">
                      <Assignments />
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="4" className="p-3">
                  <Row>
                    <Col sm="12"></Col>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Course;
