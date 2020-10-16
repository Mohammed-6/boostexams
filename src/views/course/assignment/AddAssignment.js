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
} from "reactstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//i18n
import { withNamespaces } from "react-i18next";
const AddAssignment = (props) => {
  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
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
                  <h2>Basic Info</h2>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Label>Title</Label>
                        <input type="text" class="form-control" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label>Classes</Label>
                        <input type="text" class="form-control" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label>Due Date</Label>
                        <input type="date" class="form-control" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Due Date</Label>
                        <input type="date" class="form-control" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="12">
                  <h2>Grade Info</h2>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Label>Grade Category</Label>
                        <select class="form-control">
                          <option value="">Select</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Maximum Grade</Label>
                        <input type="date" class="form-control" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>Assignment Instructions</Label>
                        <Editor
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="12">
                  <h2>Add Attachments</h2>
                  <Row>
                    <Col md="12">
                      <Form>
                        <Dropzone
                          onDrop={(acceptedFiles) => {
                            handleAcceptedFiles(acceptedFiles);
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div className="dropzone">
                              <div
                                className="dz-message needsclick mt-2"
                                {...getRootProps()}
                              >
                                <input {...getInputProps()} />
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          )}
                        </Dropzone>
                        <div
                          className="dropzone-previews mt-3"
                          id="file-previews"
                        >
                          {selectedFiles.map((f, i) => {
                            return (
                              <Card
                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                key={i + "-file"}
                              >
                                <div className="p-2">
                                  <Row className="align-items-center">
                                    <Col className="col-auto">
                                      <img
                                        data-dz-thumbnail=""
                                        height="80"
                                        className="avatar-sm rounded bg-light"
                                        alt={f.name}
                                        src={f.preview}
                                      />
                                    </Col>
                                    <Col>
                                      <Link
                                        to="#"
                                        className="text-muted font-weight-bold"
                                      >
                                        {f.name}
                                      </Link>
                                      <p className="mb-0">
                                        <strong>{f.formattedSize}</strong>
                                      </p>
                                    </Col>
                                  </Row>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      </Form>
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

export default withNamespaces()(AddAssignment);
