import React, {useState, useEffect} from 'react'
import './CentralBox.css';
import { v4 as uuidv4 } from "uuid";


export default function CentralBox() {
    const [values, setValues] = useState({
        websiteName: "",
        websiteUrl: "",
        id:uuidv4()
    })

    const [bookMarklist, setbookMarklist] = useState([]);

    

    const remove = (id) =>{
        console.log(id);
        const arr = [...bookMarklist];
        let i = arr.indexOf(bookMarklist.find(e => e.id === id));
        arr.splice(i,1);
        setbookMarklist(arr);
        console.log(bookMarklist);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setbookMarklist([...bookMarklist, values]);
        console.log(bookMarklist);
        
    }


    useEffect(() => {console.log('List Change Occured', bookMarklist);  setValues({websiteName:"",websiteUrl:"",id:uuidv4()});},[bookMarklist]);

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});

    }


    return (
        <div className="centralizedBox">
            <form onSubmit={handleSubmit}>
                <p>Website Name</p>
                <input type="text" name = "websiteName" value={values.websiteName} onChange={handleChange} />
                <p>Website URL</p>
                <input type="text" name = "websiteUrl" value={values.websiteUrl} onChange={handleChange} />
                <button className="addButton" type="submit">Add BookMark</button>
            </form>

            {<div className="bookMarklist">
                <ul>{ bookMarklist.map((data) => (
                    <li key={data.id}><a href={`http://${data.websiteUrl}`} >{data.websiteName}</a><span><img src="https://img.icons8.com/color/48/000000/trash.png" onClick={() => remove(data.id)} alt="Delete" /></span></li>
                    ))}</ul>
            </div>}
        </div>
    )
}