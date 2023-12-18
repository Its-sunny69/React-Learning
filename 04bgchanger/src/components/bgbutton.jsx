import React from "react";

function Bgbutton({btntext, colorname, changeFnc}) {

    return (
        <button 
          onClick={changeFnc}
          className='flex justify-center p-2 rounded-3xl text-slate-800 shadow-lg'
            style={{backgroundColor: colorname}}
          >{btntext}</button>
    )
}

export default Bgbutton;