import React, {Component} from 'react';
import Validation from './Validation';
import Char from './Char';
import { render } from '@testing-library/react';

class CharList extends Coponent {
    state ={
        userInput:''
    }
}

inputChangedHandler = (event)=> {
    this.setState ({userInput: event.target.value});
}
deleteCharHandler =(index)=> {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updateText=text.join('');
    this.setState({userInput: updateText});

    render(){
        const charList = this.state.userInput.split('').map((ch, index) => 
            return <Char
            character={ch}
            key={index}
            clicked={()=> this.deleteCharHandler(index)}/>;

        });
        return (
            <div className="App">
                <input
                    type="text"
            </div>
        )

        }
    }
}