const Header = ({selectedTeam, teamMemberCount} )=>{
    return (

        <div className="header">
            <h3 className="text-center">Mamber Allocation </h3>
            <h3 className="text-center">{selectedTeam } has {teamMemberCount} {teamMemberCount === 1? 'Member': 'Members'} </h3>
        </div>
    )
}
export default Header