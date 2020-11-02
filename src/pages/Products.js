import React from 'react';
import axios from 'axios';

class Products extends React.Component {
  constructor(props){
  super(props);
  this.state={
    title: '',
    description: '',
    Aname: '',
  }
  }
  onANameChange = (event) => {
    this.setState({Aname: event.target.value}) 
  }
  onTitleChange = (event) => {
    this.setState({title: event.target.value})
  }
  onDescriptionChange = (event) => {
    this.setState({description: event.target.value})
  }
  onSubmitokay = () =>{
    const user = {
      title: this.state.title,
      description: this.state.description,
      Aname: this.state.Aname
    }
    console.log(user)
 axios.post('http://localhost:5000/users/add', user)
  
    .then(res => console.log(res.data));
  }


  render(){
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
      <input className="form-control my-3" placeholder="Article Title" onChange= {this.onTitleChange}/>
      <textarea className="form-control my-3" placeholder="Article Description (minimum 50 words)" onChange={this.onDescriptionChange}>
      </textarea>
      <input className="form-control my-3" placeholder="Article Author" onChange={this.onANameChange} />
      <button  className="btn btn-primary float-right" onClick={this.onSubmitokay} onSubmit={(e) => {
                        window.location = '/';
                    }}>Submit</button> 
      "<img alt ="Get a life"src="http://images.ctfassets.net/v3n26e09qg2r/2iRIlCy9uVqGkcO275gYPP/57fdf0c6c0e07399f62b9eab0b347873/HS_COM_desktop-sun.svg"></img>
    </div>
    )
} }

export default Products;

