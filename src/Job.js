import React, { useState } from 'react';
import "./Job.css";
import { useNavigate } from "react-router-dom";

function Job({ state, dispatch }) {

    const [flag, setFlag] = useState(false);

    let navigate = useNavigate();

    const formvalid = (e) => {
        e.preventDefault();
        console.log("Triggered")
        setFlag(true);
        if (state.title !== "" && state.des !== "" && state.exp !== "" && state.remote !== "" && state.ctc !== "" && state.etype !== "" && state.year !== "" && state.city !== "" && state.state !== "" && state.zip !== "")
            navigate("/v1jobs/job");
    };

    const handleChange = (e) => {
        dispatch({
            type: "changethis",
            field: e.target.name,
            payload: e.target.value
        })
    }

    return (
        <div className="job">
            <form noValidate className={!flag ? "form" : "form form__invalid"}>
                <h1 className='form__heading'>Post Your Job</h1>
                <div className="form__fields">
                    <label htmlFor="inputTitle">Job Title</label>
                    <input type="text" name="title" className="form__fieldsInput" id="inputTitle" placeholder="Software Engineering" value={state.title} required onChange={(e) => handleChange(e)} />
                    <div className="form__fieldsInvalid">Please Enter Job Title.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputDescription">Description</label>
                    <textarea className="form__fieldsInput" id="inputDescription" name="des" onChange={(e) => handleChange(e)}
                        placeholder="Describe the responsibilities of the job." required></textarea>
                    <div className="form__fieldsInvalid">Please Enter Job Description.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputExp">Experience (In Years)</label>
                    <input type="number" className="form__fieldsInput" id="inputExp" placeholder="0" required name="exp" onChange={(e) => handleChange(e)} />
                    <div className="form__fieldsInvalid">Please Enter Experience.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputSkills">Skills</label>
                    <input type="text" className="form__fieldsInput" id="inputSkills" placeholder="Reactjs" required name="skills" onChange={(e) => handleChange(e)} />
                    <div className="form__fieldsInvalid">Please Enter Skills.</div>
                </div>

                <div className="form__fields">
                    <div><label htmlFor="inputSkills">Remote</label></div>
                    <div className="form__fieldsCheck">
                        <input className="fieldsCheck__input" type="radio" id="inlineRadio1"
                            value="yes" required name="remote" onChange={(e) => handleChange(e)} />
                        <label className="fieldsCheck__label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form__fieldsCheck">
                        <input className="fieldsCheck__input" type="radio" id="inlineRadio2"
                            value="no" required name="remote" onChange={(e) => handleChange(e)} />
                        <label className="fieldsCheck__label" htmlFor="inlineRadio2">No</label>
                    </div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputctc">CTC</label>
                    <input type="number" className="form__fieldsInput" id="inputctc" placeholder="10 LPA" required name="ctc" onChange={(e) => handleChange(e)} />
                    <div className="form__fieldsInvalid">Please Enter CTC.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputState">Employement Type</label>
                    <select id="inputState" className="form__fieldsInput" required name="etype" onChange={(e) => handleChange(e)}>
                        <option selected disabled value="">Choose</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Volunteer</option>
                        <option>Temporary</option>
                    </select>
                    <div className="form__fieldsInvalid">Please Select Employement Type.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputYear">Graduating Year</label>
                    <input type="number" className="form__fieldsInput" id="inputYear" placeholder="2020" required name="year" onChange={(e) => handleChange(e)} />
                    <div className="form__fieldsInvalid">Please Enter Year.</div>
                </div>

                <div className="form__fields">
                    <label htmlFor="inputLocation">Job Location</label>
                    <div className="form__row">
                        <div className="form__fields flex6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form__fieldsInput" id="inputCity" required name="city" onChange={(e) => handleChange(e)} />
                            <div className="form__fieldsInvalid">Please Enter City.</div>
                        </div>
                        <div className="form__fields flex4">
                            <label htmlFor="inputState">State</label>
                            <input type="text" className="form__fieldsInput" id="inputState" required name="state" onChange={(e) => handleChange(e)} />
                            <div className="form__fieldsInvalid">Please Enter State.</div>
                        </div>
                        <div className="form__fields flex2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form__fieldsInput" id="inputZip" required name="zip" onChange={(e) => handleChange(e)} />
                            <div className="form__fieldsInvalid">Please Enter Zip.</div>
                        </div>
                    </div>
                </div>

                <button type="submit" className="form__button" onClick={formvalid}>Post Job</button>
            </form>
        </div>
    );
}

export default Job;
