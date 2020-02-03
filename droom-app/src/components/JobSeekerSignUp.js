import React from 'react';

export default function JobSeekerSignUp() {


    return (


        <div className="jobseekerformwrapper">
            <h3> For JobSeekers: </h3>


            <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            // onChange={eventChangeHandler}
            // value={team.name}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter your email here"
            // onChange={eventChangeHandler}
            // value={team.email}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="Enter your role here"
            // onChange={eventChangeHandler}
            // value={team.role}
          />
        </label>
        <input type="submit" />
      </form>


























            
        </div>
    )
}