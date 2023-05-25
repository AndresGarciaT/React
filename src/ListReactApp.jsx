import { useEffect } from "react";

export const ListReactApp = () =>{

    useEffect(() => {
        return(() => {
            alert("suerte el proximo año :)")
        })
    })
    
    // Convierto la lista en arreglo
    const people = [
        'Mario Castañeda-Biologia',
        'Christian Aguilar-Sociales',
        'Jesus Sanchez-Quimica',
        'Martha Ramirez-Ingles',
        'Georgina Rodriguez-Algebra'
    ];

    // .map es para tomar cada uno de los elementos de un arreglo
    const listItems = people.map(function(person) {
        if (person.includes("Creola")) {
            return (
                <li>Yo soy:{person}</li>
            )
        } 
        return (<>
            <li>{person}</li>
            
        </>)
        
    });

    return(
        <>
            {/* El componente va a mostrar la lista people */}
            {listItems}
            {/* El componente va a mostrar la persona en la posición indicada */}
            <h1>EL maestro del año es: {people[3]}</h1>
        </>
    )
}