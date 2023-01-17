import { useState } from "react"
const GroupedTeamMember = ({ employees, selectedTeam, setTeam }) => {
    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
    function groupTeamMembers() {
        var teams = [];
        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
        var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);
        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
        var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);
        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
        var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);
        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
        var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);
        return teams;


    }
    function handelTeamClick(event) {
        const teamName = event.currentTarget.children[0].id;
        const transformedData = groupedEmployees.map((item) => item.team === teamName ? { ...item, collapsed: !item.collapsed } : item);
        setGroupedData(transformedData);
        setTeam(teamName);
    }


    return (
        <main className="container">
            {
                groupedEmployees.map((item) => {
                    return (
                        <div className="card mt-2" key={item.team} style={{ cursor: "pointer" }} onClick={handelTeamClick}>
                            <h4 className="card-header" id={item.team} >
                                Team Name : {item.team}
                            </h4>
                            <div id={"collapse_" + item.item}
                                className={item.collapsed === true ? "collapse" : " "}>
                                <hr />
                                {
                                    item.members.map((member) => {
                                        return (
                                            <div className="mt-2 teamDetail" key={member.id} >
                                                <h5> Name : {member.fullName}</h5>
                                                <p> Designation : {member.designation}</p>
                                            </div>

                                        )
                                    }
                                    )
                                }

                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default GroupedTeamMember