import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClear=()=>{
        setText("");
    }
    const handlePermutation=()=>{
        let characters=text.split('');
        for(let i=characters.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [characters[i],characters[j]]=[characters[j],characters[i]];
        }
        setText(characters.join(''));
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    < >
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}/>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handlePermutation}>Random Permutation</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Time Expected to read: {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text area to get preview"}</p>
    </div>
    </> 
  )
}

TextForm.propTypes={
    heading:PropTypes.string
}