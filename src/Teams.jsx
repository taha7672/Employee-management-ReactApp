const Teams = ({selectedTeam, handelTeamSelectionChange} )=>{
    return (
        <div>
 <select className="form-select" aria-label="Default select example" value={selectedTeam} onChange={handelTeamSelectionChange} >
          <option value="TeamA">TeamA</option>
          <option value="TeamB">TeamB</option>
          <option value="TeamC">TeamC</option>
          <option value="TeamD">TeamD</option>
          </select>        </div>
    )
}
export default Teams