import { useState } from "react";
import languages from "../languages";


export default function Buttons() {
    // impostiamo lo stato per il titolo selezionatio
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    // creiamo la funzione per gestire il click sul bottone
    const buttonClick = (language) => {
        setSelectedLanguage(language);
    }

    return (

        <div>
            <div>
                {languages.map((language) => (
                    <button key={language.id} type="button" className="btn btn-primary m-2" onClick={() => buttonClick(language)}>
                        {language.title}
                    </button>
                ))}
            </div>

            <div class="card">
                <div class="card-body">
                    <p>{selectedLanguage.description}</p>
                </div>
            </div>
        </div>
    );
}

{/* <button type="button" class="btn btn-primary">Primary</button> */ }