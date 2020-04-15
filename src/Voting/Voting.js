import React, {Component} from 'react';
import './Voting.css';

class Voting extends Component{
    constructor(props){
        super(props);
        this.state={languages:[
            {name: 'PhP', vote: 0},
            {name: 'Python', vote: 0},
            {name: 'JavaScript', vote: 0},
            {name: 'Java', vote: 0}
           
        ]
        
        }
        
    }
    vote(i){
        let newVote =[...this.state.languages];
        newVote[i].vote++;
        this.setState({languages:newVote});

    }

    render(){

        return(
        <>
         <h1>Vote your language </h1>
            <div className="languages">
                {
                    this.state.languages.map((l, index) =>
                    <div key={index} className="language">
                        <div className='voteCount'>{l.vote}</div>
                        <div className='languageName'>{l.name}</div>
                        <button onClick={this.vote.bind(this, index)}>Click Here</button>
                    </div>
                    )

                    }
            </div>
        </>
        )
    }
  

}
export default Voting;