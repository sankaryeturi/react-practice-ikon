import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './articles.css';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const languageInfo = [
  { key: '', name: 'Select', value: '' },
  { key: 'eng', name: 'English', value: 'eng' },
  { key: 'tel', name: 'Telugu', value: 'tel' },
];

const categoryInfo = [
  { key: '', name: 'Select', value: '' },
  { key: 'cat1', name: 'Category 1', value: 'cat1' },
  { key: 'cat2', name: 'Category 2', value: 'cat2' },
];

const subCategoryInfo = [
  { key: '', name: 'Select', value: '' },
  { key: 'subCat1', name: 'Sub Category 1', value: 'subCat1' },
  { key: 'subCat2', name: 'Sub Category 2', value: 'subCat2' },
];

class Articles extends Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { value, articleFormData, articleSubmit,handleChange } = this.props
    const { validated } = this.state;
    console.log(articleFormData.articleFormData)
    return (
      <Container className="mt-4">
        <div className="articleForm">
          <Form noValidate
                validated={validated}
                onSubmit={e => this.handleSubmit(e)} >       
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridLanguage">
                  <Form.Label>Language</Form.Label>
                  <Form.Control as="select" 
                    required 
                    value={articleFormData.fields.languageInfo}                    
                    onChange={handleChange.bind(this, "language")}
                  >
                    {languageInfo.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}                    
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select language.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" 
                    required 
                    value={articleFormData.fields.categoryInfo}
                    onChange={handleChange.bind(this, "category")}> 
                    {categoryInfo.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select category.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="formGridSubCategory">
                  <Form.Label>Sub Category</Form.Label>
                  <Form.Control as="select" 
                    required
                    value={articleFormData.fields.subCategoryInfo}
                    onChange={handleChange.bind(this, "subCategory")}> 
                    {subCategoryInfo.map((e, key) => {
                        return <option key={key} value={e.value}>{e.name}</option>;
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please select sub category.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridArticletitle">
                  <Form.Label>Article Title</Form.Label>
                  <Form.Control 
                    required 
                    type="input" 
                    placeholder="Article title" 
                    value={articleFormData.fields['articleTitle']}
                    onChange={handleChange.bind(this, "articleTitle")}/>
                  <Form.Control.Feedback type="invalid">
                    Please provide Article title.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridArticle">
                  <Form.Label>Article</Form.Label>
                  <Editor value={articleFormData.fields.articleDescription}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group as={Col} controlId="formGridKeyword">
                  <Form.Label>Keywords (Upto 50 Keywords)</Form.Label>
                  <Form.Control type="input" 
                    required 
                    placeholder="Enter Keywords" 
                    value={articleFormData.fields.articleKeywords}
                    onChange={handleChange.bind(this, "keywords")} />
                  <Form.Control.Feedback type="invalid">
                    Please provide Keywords.
                  </Form.Control.Feedback>
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