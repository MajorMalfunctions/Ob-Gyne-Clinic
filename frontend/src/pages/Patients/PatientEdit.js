import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PatientEdit = () => {
    const { patientId } = useParams();

    const [ patientData, patientDataChange ] = useState({});

    useEffect(() => {
        // fetch("http://localhost:5050/api/patient/updatePatient" + patientId).then((res) => {
        fetch(`http://localhost:5050/api/patient/singlePatient/` + patientId ).then((res) => {
            return res.json();
        }).then((resp) => {
            idChange(resp._id);
            nameChange(resp.name);
            emailChange(resp.email);
            mobileChange(resp.mobile);
            dobChange(resp.dob);
            ageChange(resp.age);
            addressChange(resp.address);
            avatarChange(resp.avatar);
            activeChange(resp.isActive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id, idChange]=useState("");
    const[name, nameChange]=useState("");
    const[email, emailChange]=useState("");
    const[mobile, mobileChange]=useState("");
    const[dob, dobChange]=useState("");
    const[age, ageChange]=useState("");
    const[avatar, avatarChange]=useState("");
    const[address, addressChange]=useState("");
    const[active, activeChange]=useState(true);
    const[validation, valChange]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      const patientData={ id, name, email, mobile, age, address, avatar, active };

      fetch("http://localhost:5050/api/patient/updatePatient" + patientId,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify( patientData )
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Patient Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e => valChange(true)} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={ e => emailChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input value={mobile} onChange={ e => mobileChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input value={age} onChange={ e => ageChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Birthday</label>
                                        <input value={dob} onChange={ e => dobChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={address} onChange={ e => addressChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Avatar</label>
                                        <input type="upload" value={avatar} onChange={ e => avatarChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e => activeChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default PatientEdit;