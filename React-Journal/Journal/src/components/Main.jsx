import { createCard } from "./Card"

export function Main() {
return(
   <div className="main">
    <h2>New Entry</h2>
    <form>
    <label htmlFor="motto" >Motto</label> 
    <textarea inputMode="text" type="text" id="motto" size="1" />
    </form>
    <form>
    <label htmlFor="notes">Notes</label> 
    <textarea inputMode="text" type="text" id="notes" size="1" />
    </form>
    <button className="button" onClick={createCard}>Create</button>    
    </div>
)
}