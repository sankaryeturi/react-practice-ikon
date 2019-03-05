import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './refinements.css';

class Refinments extends Component {

  render(){
    const { handleChange,filterClick,click,clearCategory } = this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="filter-wrapper">
              <div className="filter-title">
                <label>Refinement List By</label>
                <span className="clearall-check" onClick={e => click(e)}>Clear All</span>

              </div>
              <div className="filter-options">
                <label>By Category</label>
                <span className="clear-check" onClick={e => clearCategory(e)}>clear</span>
                <Form>
                  {['checkbox'].map(type => (
                    <div key={`Political`} className="mb-1">
                      <Form.Check
                        type={type}
                        custom
                        id={`Political`}
                        label={`Political`}
                        value={`Political`}
                        name={`Political`}
                        onChange={e => filterClick(e)}
                      />
                    </div>
                  ))}

                  {['checkbox'].map(type => (

                    <div key={`movies`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`movies`}

                        label={`Movies`}

                        value={`Movies`}

                        name={`Movies`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                  {['checkbox'].map(type => (

                    <div key={`lifestyle`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`lifestyle`}

                        label={`Lifestyle`}

                        value={`Lifestyle`}

                        name={`Lifestyle`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                </Form>

              </div>

              <div className="filter-options">

                <label>By Sub Category</label>

                <span className="clear-check">clear</span>

                <Form>

                  {['checkbox'].map(type => (

                    <div key={`subcat-1`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`subcat-1`}

                        label={`Sub Category`}

                        value={`subcat-1`}

                        name={`subcat-1`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                  {['checkbox'].map(type => (

                    <div key={`subcat-2`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`subcat-2`}

                        label={`Sub Category`}

                        value={`subcat-2`}

                        name={`subcat-2`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                  {['checkbox'].map(type => (

                    <div key={`subcat-3`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`subcat-3`}

                        label={`Sub Category`}

                        value={`subcat-3`}

                        name={`subcat-3`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                </Form>

              </div>

              <div className="filter-options">

                <label>By Status</label>

                <span className="clear-check">clear</span>

                <Form>

                  {['checkbox'].map(type => (

                    <div key={`approved`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`Approved`}

                        label={`Approved`}

                        value={`Approved`}

                        name={`Approved`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                  {['checkbox'].map(type => (

                    <div key={`pending`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`pending}`}

                        label={`Pending`}

                        value={`Pending`}

                        name={`Pending`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                  {['checkbox'].map(type => (

                    <div key={`rejected`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`rejected}`}

                        label={`Rejected`}

                        value={`Rejected`}

                        name={`Rejected`}

                        onChange={e => filterClick(e)}

                      />



                    </div>

                  ))}

                </Form>

              </div>

              <div className="filter-options">

                <label>By Status</label>

                <span className="clear-check">clear</span>

                <Form>
                  {['checkbox'].map(type => (

                    <div key={`date`} className="mb-1">

                      <Form.Check

                        type={type} custom

                        id={`date}`}

                        label={`Between Dates`}

                        value={`Dates`}

                        name={`Dates`}

                        onChange={e => filterClick(e)}

                      />

                    </div>

                  ))}

                </Form>

              </div>

            </div>

          </div>
          <div className="col-sm-3">

            search content
            
  </div>
        </div>
      </div>
    );
  }
}

export default Refinments;