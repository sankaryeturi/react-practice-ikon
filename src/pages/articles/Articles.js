import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal, Pagination } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './articles.css';
import '../../App.css';
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

    this.categoryPopupShow = this.categoryPopupShow.bind(this);
    this.categoryPopupClose = this.categoryPopupClose.bind(this);

    this.subCatPopupShow = this.subCatPopupShow.bind(this);
    this.subCatPopupClose = this.subCatPopupClose.bind(this);

    this.state = { 
      validated: false,
      categoryPopup: false,
      subCatPopup: false
    };
  }

  // function for open the modal popup
  categoryPopupShow() {
    this.setState({ categoryPopup: true });
  }

  // function for close the modal popup
  categoryPopupClose() {
    this.setState({ categoryPopup: false });
  }

  // function for open the modal popup
  subCatPopupShow() {
    this.setState({ subCatPopup: true });
  }

  // function for close the modal popup
  subCatPopupClose() {
    this.setState({ subCatPopup: false });
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
    const { value, articleFormData, articleSubmit, handleChange } = this.props
    const { validated } = this.state;
    //console.log(articleFormData.articleFormData);
    return (
      <Container className="mt-4">
        {/* Article form block*/}
        <div className="grey-block mb-4">
          <Form noValidate
                validated={validated}
                onSubmit={articleSubmit} >
            <Form.Row>
              <Col>
                <Form.Group controlId="formGridLanguage">
                  <Form.Label>Language <span className="color-red">*</span></Form.Label>
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
                <Form.Group controlId="formGridCategory">
                  <Form.Label>Category 
                    <span className="color-red">*</span>
                    <span className="pl-3">
                      <a href="javascript:void(0)" title="Add category" variant="primary" onClick={this.categoryPopupShow}>
                        <i className="fa fa-plus-square"></i>
                      </a>
                    </span>                    
                  </Form.Label>
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
                <Form.Group controlId="formGridSubCategory">
                  <Form.Label>Sub Category 
                    <span className="color-red">*</span>
                    <span className="pl-3">
                      <a href="javascript:void(0)" title="Add sub category" variant="primary" onClick={this.subCatPopupShow}>
                        <i className="fa fa-plus-square"></i>
                      </a>
                    </span>
                  </Form.Label>
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
                <Form.Group controlId="formGridArticletitle">
                  <Form.Label>Article Title <span className="color-red">*</span></Form.Label>
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
                <Form.Group controlId="formGridArticle">
                  <Form.Label>Article <span className="color-red">*</span></Form.Label>
                  <Editor value={articleFormData.fields.articleDescription}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName" />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId="formGridKeyword">
                  <Form.Label>Keywords (Upto 50 Keywords) <span className="color-red">*</span></Form.Label>
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
                <Form.Group>
                  <Button variant="outline-primary">Attach</Button>
                </Form.Group>
              </Col>
              <Col className="text-right">
                <Form.Group>
                  <Button variant="outline-secondary" className="mr-4">Close</Button>
                  <Button variant="outline-primary" className="mr-2">Save</Button>
                  <Button type="submit" variant="outline-primary">Submit</Button>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>          
        </div>

        { /* Category modal popup*/}
        <Modal show={this.state.categoryPopup} onHide={this.categoryPopupClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Group controlId="formGridArticletitle">
                    <Form.Label>Category Name <span className="color-red">*</span></Form.Label>
                    <Form.Control 
                      required 
                      type="input" 
                      placeholder="Category Name" />
                    <Form.Control.Feedback type="invalid">
                      Please provide Category Name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>            
            <Button variant="primary" onClick={this.categoryPopupClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        { /* ./END Category modal popup*/}

        { /* Sub category modal popup*/}
        <Modal show={this.state.subCatPopup} onHide={this.subCatPopupClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Sub-category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="formGridArticletitle">
                      <Form.Label>Sub-Category Name <span className="color-red">*</span></Form.Label>
                      <Form.Control 
                        required 
                        type="input" 
                        placeholder="Sub Category Name" />
                      <Form.Control.Feedback type="invalid">
                        Please provide Sub-Category Name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.subCatPopupClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        { /* ./END Sub category modal popup*/}

        {/* Article list block*/}
        <div className="row">
          <div className="col-3">
            <div className="grey-block">
              Hi
            </div>
          </div>
          <div className="col-9">
            <div className="grey-block p-0 border-0">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date <i className="fa fa-sort"></i></th>
                    <th>Article Title <i className="fa fa-sort"></i></th>
                    <th>Status <i className="fa fa-sort"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>21 Dec 2018</td>
                    <td>Kalyan Ram to Complete with Rajini and Akhil!</td>
                    <td><span className="label label-draft">Draft</span></td>
                  </tr>
                  <tr>
                    <td>20 Dec 2018</td>
                    <td>Rajinikanth Gets Shock from Telugu Producer</td>
                    <td><span className="label label-info">Re-Work</span></td>
                  </tr>
                  <tr>
                    <td>20 Dec 2018</td>
                    <td>Idam Jagath Trailer: Sumanth Turns 'Nightscrawler'</td>
                    <td><span className="label label-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>19 Dec 2018</td>
                    <td>Not allowed to take lunch during ED questioning. TDP MP tells HC</td>
                    <td><span className="label label-danger">Reject</span></td>
                  </tr>
                  <tr>
                    <td>17 Dec 2018</td>
                    <td>Virat Kohli is the world's worst behaved player</td>
                    <td><span className="label label-success">Published</span></td>
                  </tr>
                  <tr>
                    <td>21 Dec 2018</td>
                    <td>Kalyan Ram to Complete with Rajini and Akhil!</td>
                    <td><span className="label label-draft">Draft</span></td>
                  </tr>
                  <tr>
                    <td>20 Dec 2018</td>
                    <td>Rajinikanth Gets Shock from Telugu Producer</td>
                    <td><span className="label label-info">Re-Work</span></td>
                  </tr>
                  <tr>
                    <td>20 Dec 2018</td>
                    <td>Idam Jagath Trailer: Sumanth Turns 'Nightscrawler'</td>
                    <td><span className="label label-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>19 Dec 2018</td>
                    <td>Not allowed to take lunch during ED questioning. TDP MP tells HC</td>
                    <td><span className="label label-danger">Reject</span></td>
                  </tr>
                  <tr>
                    <td>17 Dec 2018</td>
                    <td>Virat Kohli is the world's worst behaved player</td>
                    <td><span className="label label-success">Published</span></td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <div className="row">
                        <div className="col-6 d-flex">
                          Showing
                        <Form.Control as="select" className="mx-2" required style={{ "width": "60px" }}>
                            <option value="">5</option>
                            <option value="">10</option>
                            <option value="">15</option>
                            <option value="">20</option>
                          </Form.Control>
                          entries
                      </div>
                        <div className="col-6 text-right">
                          <Pagination className="float-right">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                          </Pagination>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ./END Article list block*/}

        {/* category block*/}
        <div className="row">
          <div className="col-12">
            <div className="grey-block p-0 border-0">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.no <i className="fa fa-sort"></i></th>
                    <th>Category name <i className="fa fa-sort"></i></th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{"width": "100px"}}>1</td>
                    <td>Category 1
                    <Form.Group controlId="formGridArticletitle">                      
                      <Form.Control required type="input" />
                    </Form.Group>
                    </td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Category 2</td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Category 3</td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ./END category block*/}

        {/* sub category block*/}
        <div className="row">
          <div className="col-12">
            <div className="grey-block p-0 border-0">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.no <i className="fa fa-sort"></i></th>
                    <th>Sub Category name <i className="fa fa-sort"></i></th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{"width": "100px"}}>1</td>
                    <td>Sub Category 1</td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Sub Category 2</td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sub Category 3</td>
                    <td>
                      <a href="javascript:void(0)" className="btn btn-primary mr-2 px-2 py-1"><i className="fa fa-pencil"></i> Edit</a>
                      <a href="javascript:void(0)" className="btn btn-danger px-2 py-1"><i className="fa fa-trash"></i> Delete</a>
                    </td>
                  </tr>                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* ./END sub category block*/}
      </Container>
    );
  }
}

export default Articles