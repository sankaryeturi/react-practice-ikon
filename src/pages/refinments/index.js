import React, { Component } from 'react';
import Refinments from './Refinments';

class RefinmentContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			valArr: []
		}
	}

	filterClick = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		const val = target.value;
		let { valArr } = this.state;
		let index = valArr.indexOf(val);
		if (index != -1)
			valArr.splice(index, 1);
			else
		  valArr.push(val);
		this.setState({ valArr });
		console.log(this.state.valArr);

	}

	 

	click = (event) => {
		console.log(event);
		document.querySelectorAll('input[type=checkbox]').forEach( event => event.checked = false );
		this.state = {
			valArr: []
		}
	}

	clearCategory = (event) => {
		document.querySelectorAll('input[type=checkbox]').forEach( event => event.checked = false );
	}

	  // article form submission

	  /* articleSubmit = e => {

	  

		e.preventDefault();

	 

		 if(this.handleValidation()){

		  console.log(this.articleFormData); 

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

	 

	   input onchange functionality

	handleChange(field, e){ 

	 

		console.log(this.articleFormData);

		let fields = this.articleFormData.fields;

		fields[field] = e.target.value;       

		this.setState({fields});

	  } */

	 

	 

	render() {

		return (

		  <Refinments

			{...{
			filterClick: this.filterClick,
			click:this.click,
			clearCategory:this.clearCategory
			}}

		  />

		);

	  }

}

 

export default (RefinmentContainer);