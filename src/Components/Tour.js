import React from 'react'

// export default function Tour({id,name,age,info,image,price}) {
//   return (
//     <article className="single-tour">
//         <img src={image} alt={name}></img>
//         <footer>
//           <div className="tour-info">
//             <h4>{name}</h4>
//             <h4 className='tour-price'>$ {price}</h4>
//             </div>
//             <p>
//               {`${info.substring(0,200)}...`}
//               <button>Read More</button>
//             </p>
//             <button className='delete-btn'>Not interrested</button>
//         </footer>
     
//     </article>
//   )
// }

export default class Tour extends React.Component {
  constructor(props){
    super(props)
      this.state ={
        readMore: false,
      }
      this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(){
   this.setState({
     readMore : !this.state.readMore,
   })
  }

  render(){

    const {id,name,age,info,image,price,removeTour} = this.props

    return (
      <article className="single-tour">
          <img src={image} alt={name}></img>
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className='tour-price'>$ {price}</h4>
              </div>
              <p>
                {this.state.readMore ? info : `${info.substring(0,200)}...`}
                <button onClick={this.toggleReadMore}>{this.state.readMore ? 'show less': 'show more'}</button>
              </p>
              <button  className='delete-btn' onClick={()=>removeTour(id)}>Not interrested</button>
          </footer>
       
      </article>
    )
  }
  
}

