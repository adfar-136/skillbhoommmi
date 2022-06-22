import React,  { useState } from 'react'

export default function Message(props) {
    const [text, setText] = useState("");
    const onChangee = (event)=> {
        // console.log("event handled")
        setText(event.target.value)
    }
    const onUpCase = ()=> {
    //    console.log("Upper case was clicked")
    let upper = text.toUpperCase();
    setText(upper)
    }
    const onClear= ()=> {
        //    console.log("Upper case was clicked")
        setText("")
        }
    const onLowCase = ()=> {
        //    console.log("Upper case was clicked")
        let lower = text.toLowerCase();
        setText(lower)
        }
  const onCopy = ()=> {
    var text = document.getElementById("Box");
    text.select();
    text.setSelectionRange(0,9999)
    navigator.clipboard.writeText(text.value);
    }
  const onWhiteSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    }
    // setText("dcgfcgsdfc")
  return (
    <>
   <div className='container my-3' style={{color : props.mode === 'dark'?'white':'#247dac'}}>
    <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter you text here</label>
    <textarea className="form-control" value={text} onChange={onChangee} id="Box" rows="9" 
    style ={{backgroundColor : props.mode === 'dark'?'#247dac':'white',color : props.mode==='dark'?'white':'#247dac' }}></textarea>
    </div>
    <button type="button" onClick={onUpCase} className="btn btn-primary mx-1">Upper</button>
    <button type="button" onClick={onLowCase} className="btn btn-primary mx-1">Lower</button>
    <button type="button" onClick={onClear} className="btn btn-primary mx-1">Clear</button>
    <button type="button" onClick={onCopy} className="btn btn-primary mx-1">Copy</button>
    <button type="button" onClick={onWhiteSpaces} className="btn btn-primary mx-1">Remove WhiteSpaces</button>
    
    </div>
    <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} letters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to see the preview"}</p>
      
    </div>
   
    </>
  )
}
