export default function Button({valor}){
    return(
        <button className="w-20 h-10 bg-slate-700" onClick={()=>setValor(valor + 1)}>Add</button>
    )
}