import React, { Component } from 'react';
import Articles from './Articles';

class ArticlesContainer extends Component {

  constructor(props) {
    super(props);

    // get the URL parameter
    const parems =this.props.match.params;

    // defining the article form object
    this.state = {
      fields: {}
    };
    

    this.handleChange = this.handleChange.bind(this);    
    // pass dynamic form data based on url parameter
    if((!parems.articleId == "") || (!parems.articleId == "undefined") || (!parems.articleId == undefined)) {
      fetch("http://localhost:4000/Articles/" + parems.articleId)      
      .then(result => {
        return result.json();
      })
      .then(
        data => this.setState({ articleFormData:data })
      )          
    } 
  }

  // article form submission
  articleSubmit = e => {
    alert()
    e.preventDefault();
    fetch('http://ikondev1.cloudapp.net/api/auth_db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data:this.state.articleFormData
        // articleTitle: this.articleFormData.fields.articleTitle,
        // articleLanguage : this.articleFormData.fields.languageInfo,
        // articleCategory : this.articleFormData.fields.categoryInfo,
        // articleSuvCategory : this.articleFormData.fields.subCategoryInfo,
        // articleDescription : this.articleFormData.fields.articleDescription,
        // articleKeywords : this.articleFormData.fields.articleKeywords,
      }),
    })
    .then(resp => resp.json())
    .then(function(response) {
      
    });
  }

  // input onchange functionality
  handleChange(field, e){       
    let fieldsVal = this.state.articleFormData;
    fieldsVal[field] = e.target.value;        
    //this.setState({fieldsVal});
    console.log(this.state.articleFormData);
  }

  render() {
    return (
      <Articles
        {...{
          articleSubmit: this.articleSubmit,
          articleFormData: this.state,
          handleChange: this.handleChange
        }}
      />
    );
  }
}

export default (ArticlesContainer);