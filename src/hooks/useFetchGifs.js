import { useEffect, useState } from "react"; // Indica a los componenetes cuando debe renderizacer cual algo cambia
import { getGifs } from "../helpers/getGifs";

export const useFethGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    // Cuando se desea que se ejecute una funcion cuando el codigo es renderizado por primera vez
    useEffect(() => {
        getGifs(category).then((imgs => {
            setstate({
                data: imgs,
                loading: false
            })
        }))
    }, [category])



    return state;
}