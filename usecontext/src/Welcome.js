import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const sayHi = {
    en: {
        helloPhrase: "Welcome in my website ",
    },
    it: {
        helloPhrase: "Benvenuto nel mio sito ",
    }
}

export function Welcome(props){

    const language = useContext(LanguageContext)

    return(
        <h1>{sayHi[language]["helloPhrase"]}{props.name}!</h1>
    )

}