import React from 'react'
import "../component/form.css"


function Form({handleChange,searchQuery,city,query}) {

    
    return (
        <div className ="form-container">
             {(query.cod === 404)?(<p>{query.message}</p>):("")} 
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

                              
                        </div>
                            
                    </div>
           </div>
        </div>
        
        
    )
}

export default Form
