import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Articles from './Articles';
import { FETCH_ARTICLEINFO, CREATE_ARTICLE, setRoutines} from './articles.action';
import SideNav from '../../components/common/SideNav';
import Header from '../../components/common/Header/Header';
import TitleBar from '../../components/common/TitleBar';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
    //articleFetch: () => dispatch(firebaseLogout()),
    articleCreate: () => dispatch(), 
    //articleView: () => dispatch(setExercises()),
});

class ArticlesContainer extends Component {

  constructor(props) {
    super(props);

    // get the URL parameter
    const parems =this.props.match.params;

    // defining the article form object
    this.state = {
      fields: {},
      articleFormData: {
        fields: {}
      },
      valArr: []
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
    console.log(field)
    fieldsVal[field] = e.target.value;        
    //this.setState({fieldsVal});
    console.log(this.state.articleFormData);
  }

  //article filter
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
  
  render() {
    return (
      <div style={{width: "100%"}}>
        <SideNav />
        <div style={{marginLeft: "150px"}}>
          <Header />
          <TitleBar />
          <Articles
            {...{
                  articleSubmit: this.articleSubmit,
                  articleFormData: this.state,
                  handleChange: this.handleChange,
                  filterClick: this.filterClick,
                  click:this.click,
			            clearCategory:this.clearCategory
                }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ArticlesContainer);