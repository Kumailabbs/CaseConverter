import React, {useState} from "react";
export default function(){
    const [text, newText] = useState('Enter your text here');
    const handleTolowCase = ()=>{
       let lowerText = text.toLowerCase();
       newText(lowerText);
    }
    const handleToUpperCase = ()=>{
      let uppText = text.toUpperCase();
      newText(uppText);
    }
  
    // Removier of free space
const handleToRemoveCase = ()=>{
    let rmText = text.split(/[ ]+/);
    newText(rmText.join(" "))
}
    const handleOnclick = (event)=>{
      newText(event.target.value);
    }
    const handleToCopy = ()=>{
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    return(
        <>
          <div className="container">
            <div className="row">
               <div className="col-lg-6 textArea-left">              
                  <div className="mb-5">
                  <div className='container details'>
        <p>Words: {text.split(" ").length} | Characters: {text.length} | {0.008 * text.split(" ").length} minutes read</p>
        <p></p> 
      </div>
                    <textarea className="form-control" id="my-box" value={text} onChange={handleOnclick} rows="9" ></textarea> 
                  </div>
               </div>
               <div className="col-lg-6 nav-right">
               <span className="box_txt">Change my text to...</span>
                     <nav className="navbar navbar-blue bg-blue">
                       <div className="container-fluid nav-1">
                       <button type="button" className="btn mx-1" onClick={handleTolowCase}>ConvertToLowerCase</button>
                       </div>
                     </nav>
                     <nav className="navbar navbar-blue bg-blue">
                      <div className="container-fluid nav-2">
                      <button type="button" className="btn mx-1" onClick={handleToUpperCase}>ConvertToUpperCase</button>
                      </div> 
                     </nav>
                     <nav className="navbar navbar-blue bg-blue">
                      <div className="container-fluid nav-3">
                      <button type="button" className="btn mx-1" onClick={handleToRemoveCase}>RemoveExtraSpace</button>
                      </div> 
                     </nav>
                     <nav className="navbar navbar-blue bg-blue">
                      <div className="container-fluid nav-3">
                      <button type="button" className="btn mx-1" onClick={handleToCopy}>Copy To Clipboard</button>
                      </div> 
                     </nav>
                  </div>
            </div>
          </div>
        </>
    );
}