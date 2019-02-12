import React, { Component } from 'react';
import Articles from './Articles';

class ArticlesContainer extends Component {

  componentDidMount () {
    const { handle } = this.props.match.params;
  }

  constructor(props) {
    super(props);
    const parems =this.props.match.params;
    this.articleFormData = {
      fields: {
        articleTitle: ''
      },
      errors: {
        languageInfo: false,
        categoryInfo: false,
        subCategoryInfo: false,
        articleTitle: false,
        articleKeywords: false
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    // pass dynamic form data based on url parameter
    if((!parems.articleId == "") || (!parems.articleId == "undefined") || (!parems.articleId == undefined)) {
      this.articleFormData = {
        fields: {
          articleTitle: 'This is test article',
          languageInfo: 'en',
          categoryInfo: 'cat2',
          subCategoryInfo: 'subCat2',
          articleDescription: 'This is test description',
          articleKeywords: 'Test Keyword'
        },
        errors: {}
      };
    } 
  }

  // article form submission
  articleSubmit = e => {
    alert()
    e.preventDefault();

     if(this.handleValidation()){
      //console.log(this.articleFormData);  
     }

    fetch('http://ikondev1.cloudapp.net/api/auth_db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        articleTitle: this.articleFormData.fields.articleTitle,
        articleLanguage : this.articleFormData.fields.languageInfo,
        articleCategory : this.articleFormData.fields.categoryInfo,
        articleSuvCategory : this.articleFormData.fields.subCategoryInfo,
        articleDescription : this.articleFormData.fields.articleDescription,
        articleKeywords : this.articleFormData.fields.articleKeywords,
      }),
    })
    .then(resp => resp.json())
    .then(function(response) {
      
    });
  }

  // input onchange functionality
  handleChange(field, e){   
    let fieldsVal = this.articleFormData.fields;
    fieldsVal[field] = e.target.value;        
    //this.setState({fieldsVal});
  }

  // form validation
  handleValidation(){
    let fields = this.articleFormData.fields;
    let errors = {};
    let formIsValid = true;
    //console.log(this.articleFormData.fields);
    
    //article title
    if(!fields["articleTitle"]){
      formIsValid = false;
      this.articleFormData.errors.articleTitle = true;
      //errors["articleTitle"] = "Cannot be empty";
      //console.log("error");
    }

    //Name
    if(!fields["languageInfo"]){
      formIsValid = false;
      errors["languageInfo"] = "Cannot be empty";
    }

    if(!fields["categoryInfo"]){
      formIsValid = false;
      errors["categoryInfo"] = "Cannot be empty";
    }

    if(!fields["subCategoryInfo"]){
      formIsValid = false;
      errors["subCategoryInfo"] = "Cannot be empty";
    }

    //this.setState({errors: errors});
     //console.log(errors);
    return formIsValid;

  }

  render() {
    return (
      <Articles
        {...{
          articleSubmit: this.articleSubmit,
          articleFormData: this.articleFormData,
          handleChange: this.handleChange
        }}
      />
    );
  }
}

export default (ArticlesContainer);