import './App.css';
import React, { Component } from 'react'
import Tours from './Components/Tours'
import Loading from './Components/Loading';

const url = 'https://course-api.com/react-tours-project';

class App extends Component {
 constructor(props){
   super(props)
   this.state = {
      tours: [],
      loading: true,
   }
   this.fetchTours = this.fetchTours.bind(this);
   this.removeTour = this.removeTour.bind(this);
 }
  
 removeTour(id){
  this.setState({
    tours: this.state.tours.filter((tour)=> tour.id !== id)
  })
 }

 componentDidMount(){
  this.fetchTours()
}

 async fetchTours (){

  try{
    this.setState({
      loading:true,
    })
    const response = await fetch(url)

    const toursFetched = await response.json()
    console.log(toursFetched)
    this.setState({
      tours:toursFetched,
      loading: false
    })

  }catch(err){
    this.setState({
      loading: false,
    })
    console.log(err)

  }
}

  render() {
 
    if(this.state.loading){
      return (
        <main>
          <Loading/>

        </main>
      )
    }

    if(this.state.tours.length === 0 ){
      return (
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button onClick={this.fetchTours} >Refresh</button>
            </div>
        </main>
      )
    }
    
    return (
      <div>
        <Tours tours={this.state.tours} removeTour = {this.removeTour}/>
      </div>
    )
  }
}

export default App
