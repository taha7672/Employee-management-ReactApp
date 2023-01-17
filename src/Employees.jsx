
import { useState } from "react";
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg'
import Teams from './Teams';
const Employees = ({employees, selectedTeam , handelEmployeeCardClick, handelTeamSelectionChange} ) => {
 

  return (
    <main className="container mt-3 p-4">
      <div className="team-select">
        <Teams selectedTeam={selectedTeam} handelTeamSelectionChange={handelTeamSelectionChange} />
      </div>
      <div className="row">
          <div className="card-collection">
            {

              employees.map((employee) => {
                return <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam? 'card card-sty standout': 'card card-sty')}  style={{cursar:"pointer"}} onClick={handelEmployeeCardClick}>
                  {(employee.gender === 'male')? <img src={maleProfile} alt="img" className="car-img-top profile-img" /> 
                  : <img src={femaleProfile} alt="img" className="car-img-top profile-img" />}
                  <div className="card-body">
                    <h5 className="card-title">Name: {employee.fullName}</h5>
                    <p className="card-text"><span className="fw-bold">Designation: </span>{employee.designation}</p>
                    <p className="card-text"><span className="fw-bold">Gender: </span> {employee.gender} </p>
                    <p className="card-text"><span className="fw-bold">TeamName: </span> {employee.teamName}</p>
                  </div>

                </div>
              })
            }
          </div>
        </div>
      
    </main>
  )

}

export default Employees