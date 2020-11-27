import { useEffect,useState } from 'react'
import { getcookInstruction } from '../../service/cookInstruction/cookInstruction.js'
function useCookInstruction() {
    const [cookInstruction, setCookInstruction]=useState([]);
    useEffect (()=> {
      getcookInstruction()
            .then(data => setCookInstruction(data));
    },[setCookInstruction]);
    return cookInstruction;
}
export default useCookInstruction;