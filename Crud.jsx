import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function Crud(){

    const [data,setData]=useState([]);
    const [names,setName]=useState("");
    const [age,setAge]=useState("");
    const [city,setCity]=useState("");
    const [modal,setModal]=useState(false);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(isNaN(age)){
            alert("Age must be a number");
            return;
        }
        if(age<=0 || age>90 || !Number.isInteger(Number(age))){
            alert("Age must be a positive number");
            return;
        }
        setData([...data,{name:names,age:age,city:city}]);
        setName("");
        setAge("");
        setCity("");
        setModal(false);
    }

    const handleDelete=(index)=>{
        const newData=[...data];
        newData.splice(index,1);
        setData(newData);
    }
    const handleEdit=(index)=>{
        const item=data[index];
        setName(item.name);
        setAge(item.age);
        setCity(item.city);
        handleDelete(index);
        setModal(true);
    }
   
return(
    <>

    <button className="btn btn-primary" onClick={()=>setModal(true)}>
        Add
    </button>
    {modal &&(<div className="modal show d-block">
                <div className="modal-dialog">
                    <div className="modal-header"></div>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit} className="text-center">
                            <input type="text" placeholder="name" value={names} onChange={(e) => setName(e.target.value)}required /><br/>
                            <input type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} required/><br/>
                            <input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)}required /><br/>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={()=>setModal(false)}>Cancel</button>
                        </form>


                    </div>

                </div>

            </div>)}
            <div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div></>

    
                        )
}export default Crud;
