import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";

export function DisplayLanguage() {
    
    const [language, setLanguage] = useState('en')

    function handleLanguageChange(event){
        setLanguage(event.target.value)
    } 

    return(
        <div>
            <select value={language} onChange={handleLanguageChange}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIANO</option>
            </select>    
                <LanguageContext.Provider value={language}>
                    <Welcome name="Alessandro"/>
                </LanguageContext.Provider>          
        </div>
        
    )

} 