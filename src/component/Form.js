import React from 'react'
import "../component/form.css"


function Form({handleChange,searchQuery,city,query}) {

    
    return (
        <div className ="form-container">
            <div className="navigation">
                    
                    <div className="form" >
                        <h1 className="form-title">Weather Status App</h1>
                        <div className ="form-input">
                               <input onChange={handleChange} 
                                className="input" 
                                type="text"  
                                placeholder="Type Location..."
                                value ={city}
                                />
                    
                                <button onClick={searchQuery} className="button">
                                  <i class="fas fa-search icon"></i>
                               </button>

                               {(query.cod ==="404")?(<p>No such location is Found Anywhere</p>):("")} 
                        </div>
                            
                    </div>
           </div>
        </div>
        
        
    )
}

export default Form
