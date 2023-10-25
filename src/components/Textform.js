import React, { useState } from 'react'
let c = ""
export default function Textform(props) {
    const [text, setText] = useState("Enter text here")
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleOnClick = () => {
        c = text
        c = c.toUpperCase()
        setText(c)
        props.showAlert("Converted to Uppercase","Success")
    }
    const lowerClick = () => {
        c = text
        c = c.toLowerCase()
        setText(c)
        props.showAlert('converted to lowercase','Success')
    }
    const clrTxt = () => {
        c = ""
        setText(c)
        props.showAlert("Text is cleared",'Success')
    }
    const copyText=()=>{
        var text=document.getElementById("floatingTextarea2")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text is copied","Success")
    }
    const clearSpace=()=>{
        let t=text.split(/[ ]+/)
        setText(t.join(" "))
    }
    return (
        <>
            <div>
                <div className="form-floating">
                    <h1 mb-2='true'>{props.heading}</h1>
                    <textarea className="form-control mx-1" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleOnChange}></textarea>
                    <button disabled={text.length===0} type="button" className="btn btn-primary btn-sm my-2 mx-3" onClick={handleOnClick}>Uppercase</button>
                    <button disabled={text.length===0} type="button" className="btn btn-secondary btn-sm my-2 mx-3" onClick={lowerClick}>lowercase</button>
                    <button disabled={text.length===0} type="button" className="btn btn-primary btn-sm my-2 mx-3" onClick={clrTxt}>Clear text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-primary btn-sm my-2 mx-3" onClick={copyText}>copy text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-primary btn-sm my-2 mx-3" onClick={clearSpace}>clear extra spaces</button>
                </div>
                <div className="summary mx-2" >Your Text Summary
                    <div className="words my-3 ">No of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</div>
                    <div className="charcters my-2 ">No of characters: {text.length}</div>
                    <div className="preview mx-2" >
                        <h2>Preview</h2>
                        <div className="previewtext my-2 "><p>{text.length>0?text:"Nothing to Preview !!"}</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}
