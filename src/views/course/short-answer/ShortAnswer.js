import React, { useState } from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
  Form,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//i18n
import { withNamespaces } from "react-i18next";
const AddShortAnswer = (props) => {
  const [customchk, setcustomchk] = useState(true);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Course")}
            breadcrumbItem={props.t("Add New Assignment")}
          />

          <Card>
            <CardBody>
              <Row>
                <Col md="12">
                  <Col md="12">
                    <FormGroup>
                      <Label>Question Setup</Label>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                    </FormGroup>
                  </Col>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md={12} className="ml-auto">
                      <div className="mt-4 mt-lg-0">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="CustomCheck1"
                            onChange={() => false}
                            checked={customchk}
                          />
                          <label
                            className="custom-control-label"
                            onClick={() => {
                              setcustomchk(!customchk);
                            }}
                          >
                            Allow rich-text answers for students.
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="ml-auto">
                      <div className="mt-4 mt-lg-0">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="CustomCheck1"
                            onChange={() => false}
                            checked={customchk}
                          />
                          <label
                            className="custom-control-label"
                            onClick={() => {
                              setcustomchk(!customchk);
                            }}
                          >
                            Allow Vide/Audio answers for students.
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={12} className="ml-auto">
                      <div className="mt-4 mt-lg-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="CustomCheck1"
                            onChange={() => false}
                            checked={customchk}
                          />
                          <label
                            className="custom-control-label"
                            onClick={() => {
                              setcustomchk(!customchk);
                            }}
                          >
                            Character limit
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <input type="number" value="100" class="form-control" />
                    </Col>
                    <Col md={12} className="ml-auto pt-3">
                      <div className="">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="CustomCheck1"
                            onChange={() => false}
                            checked={customchk}
                          />
                          <label
                            className="custom-control-label"
                            onClick={() => {
                              setcustomchk(!customchk);
                            }}
                          >
                            Timed Question
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <input type="number" value="100" class="form-control" />
                    </Col>
                    <Col md="12">
                      <div className="pt-3">
                        <label>Notes</label>
                        <Alert color="secondary" role="alert">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Pellentesque sodales pellentesque varius. Ut
                          feugiat turpis id tristique eleifend.
                        </Alert>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="pt-2">
                        <FormGroup>
                          <label>Grades</label>
                          <input
                            type="number"
                            value="100"
                            class="form-control"
                          />
                        </FormGroup>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col md="12">
                  <Row>
                    <Col md="4">
                      <Button color="primary" outline>
                        CANCEL
                      </Button>
                    </Col>
                    <Col md="8">
                      <div className="float-right">
                        <Button color="primary" outline>
                          PREVIEW
                        </Button>{" "}
                        <Button
                          color="primary"
                          className="btn btn-primary waves-effect waves-light"
                        >
                          ADD
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withNamespaces()(AddShortAnswer);
