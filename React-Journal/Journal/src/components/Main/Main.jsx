import { createCard } from "../Card"
import './Main.css'

export function Main() {
return(
   <div className="main">
    <h2>New Entry</h2>
    <form className="form" >
    <label className="label" htmlFor="motto" >Motto</label><br/>
    <input inputMode="text" type="text" id="motto"  />
    </form>
    <form className="form">
    <label className="label" htmlFor="notes">Notes</label> <br/>
    <input inputMode="text" type="text" id="notes"/>
    </form>
    <button className="button" onClick={createCard}>Create</button>    
    </div>
)
}