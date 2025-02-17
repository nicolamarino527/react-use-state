import { useState } from "react";
import languages from "../languages"


export default function Buttons() {
    // impostiamo lo stato per il titolo selezionatio
    const [selectedTitle, selectedDescription] = useState(languages[0])

    // creiamo la funzione per gestire il click sul bottone
    const buttonClick = (lenguage) => {
        setDescription(lenguage)
    }

    return (

        <div>
            test
        </div>
    );
}

{/* <button type="button" class="btn btn-primary">Primary</button> */ }