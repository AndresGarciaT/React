import React, {useState, useEffect} from 'react';
import { ListReactApp } from './ListReactApp';
import "./style.css"

const MiPrimerHookEffect = () =>{

    //const [textBoxValue, setTextBoxValue] = useState("");

    const [name, setName] = useState("");

    const [lastname, setLastname] = useState("");

    const [catFact, setCatFact] = useState();

    const [isFact, setIsFact] = useState(true);

    // Cada vez que el componente se actualiza
    useEffect(() => {
        console.log("Este se repite")
    })

    // Cada vez que el estado textBoxValue cambia
    // useEffect(() => {
    //     if(textBoxValue.length > 10) {
    //         alert("El texto es muy largo")
    //     }
    // }, [textBoxValue])

    useEffect(()=> {
        console.log("Apellido cambio")
    }, [lastname])

    const callFactAPI = (async () => {
        let res = await fetch("https://catfact.ninja/fact")
        let jsonRes = await res.json()

        return jsonRes
    })

    const renderPage = (() => {
        if(isFact) {
            return(catFact)
        } else {
            return(<ListReactApp/>)
        }
    })

    // Al principio del ciclo de vida del COMPONENTE || Solo aparece una vez por eso usamos el erreglo al final []
    useEffect(() => {
        console.log("Cargo 1 vez")
        callFactAPI().then(res => {
            console.log(res)
            setCatFact(res["fact"])
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div className='container'>
            <section className='colum'>
                {/* <textarea value={textBoxValue} onChange={e => setTextBoxValue(e.target.value)} /> */}
        
                <input type="text" placeholder='Nombre' value={name} onChange={(e)=>(setName(e.target.value))} />
                <input type="text" placeholder='Apellido' value={lastname} onChange={(e)=>(setLastname(e.target.value))} />
            </section>
            <section>
                {renderPage()}
            </section>
            <p>
                Elecciones escolares al mejor maestro del año, el nombre que salga sera el ganador de este año.
            </p>

            <button onClick={() => setIsFact(!isFact)}>Click</button>


            
        </div>
    )

}

export default MiPrimerHookEffect