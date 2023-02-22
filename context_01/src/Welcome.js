import React from "react";
import { LanguageContext } from "./LanguageContext";

const sayHi = {
    en: {
        helloPhrase: "Welcome in my website",
    },
    it: {
        helloPhrase: "Benvenuto nel mio sito",
    }
}

export class Welcome extends React.Component{
    

    render(){
        return (
            <div>
            <LanguageContext.Consumer>
                { Language => {
                    return(
                        <div>
                            <h1> {sayHi[Language].helloPhrase} {this.props.name}!</h1>
                        </div>
                    )
                }}
            </LanguageContext.Consumer>
            </div>
        ) 
    }
}
