import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './articles.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const languageInfo = [
  { key: '', text: 'Select', value: '' },
  { key: 'en', text: 'English', value: 'eng' },
  { key: 'tel', text: 'Telugu', value: 'tel' },
];

const categoryInfo = [
  { key: '', text: 'Select', value: '' },
  { key: 'cat1', text: 'Category 1', value: 'cat1' },
  { key: 'cat2', text: 'Category 2', value: 'cat2' },
];

const subCategoryInfo = [
  { key: '', text: 'Select', value: '' },
  { key: 'subCat1', text: 'Sub Category 1', value: 'subCat1' },
  { key: 'subCat2', text: 'Sub Category 2', value: 'subCat2' },
];

class Articles extends Component {
 
  render() {
    const { value, articleFormData, articleSubmit,handleChange } = this.props;
    return (
      <Container className="mt-4">
        <div className="articleForm">
          <Form noValidate >       
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Language</Form.Label>
                  <Form.Control as="select">
                    <option value="">Select Language</option>
                    <option value="tel">Telugu</option>
                    <option value="eng">English</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select">
                    <option value="">Select Category</option>
                    <option value="cat1">Category 1</option>
                    <option value="cat2">Category 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Sub Category</Form.Label>
                  <Form.Control as="select">
                    <option value="">Select Sub Category</option>
                    <option value="subcat1">Sub Category 1</option>
                    <option value="subcat2">Sub Category 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Article Title</Form.Label>
                  <Form.Control required type="input" placeholder="Article title" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Article</Form.Label>
                  <Editor 
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Keywords (Upto 50 Keywords)</Form.Label>
                  <Form.Control type="input" placeholder="Enter Keywords" />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group as={Col}>
                  <Button variant="outline-primary">Attach</Button>
                </Form.Group>
              </Col>
              <Col className="text-right">
                <Form.Group as={Col}>
                  <Button variant="outline-secondary" className="mr-4">Close</Button>
                  <Button variant="outline-primary" className="mr-2">Save</Button>
                  <Button type="submit" variant="outline-primary">Submit</Button>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>          
        </div>
      </Container>
    );
  }
}

export default Articles