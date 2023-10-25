import React from 'react'

export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === 'dark' ? '#18181b' : 'white',
    color: props.mode === 'dark' ? 'white' : '#18181b'
  }
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
              About The Site
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Text Utils is a versatile online tool designed to assist with text manipulation. It offers two primary functions: word and character counting, and text transformation. 
            The word and character counting utility allows users to quickly analyze their text, providing a clear count of words and characters. 
            The text transformation feature provides various options, such as removing extra spaces, converting text to uppercase, or changing it to lowercase.
             Additionally, it permits users to copy the modified text to their clipboard, streamlining the editing process.
              Text Utils is a valuable resource for anyone looking to streamline and enhance their text-related tasks, making it easier to work with textual content efficiently and effectively.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
              Buy me a Coffee
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Feel free to contribute Whatever you want to contribute</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
             My Collection of so-called Pro-projects
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}> Well, You are seeing one right now :) </div>
          </div>
        </div>
      </div>
    </div>
  )
}
