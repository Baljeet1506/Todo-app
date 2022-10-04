import React, {useState, useEffect} from 'react';
/* import {Link} from "react-router-dom;"
import {toast} from "react-toastify"; */
import axios from "axios";
import "./todo.css";

export default function test() {
/* const test = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("");
        setData(response.data);
    };

    useEffect(() =>{
        loadData();
    }, [])
 */

return(
    <div style= {{marginTop: "150px"}}>
<table className="styled-table">
    <thead>
        <tr>
           <th style={{textAlign: "center"}}>No. </th> 
           <th style={{textAlign: "center"}}>Name </th> 
           
        </tr>
    </thead>
    <tbody>
       {/*  {data.map((item, index)=>{
            return( */}
                <tr /* key={item.id} */>
                   {/*  <th scope = "row">{index+1}</th>
                    <td>{item.name}</td> */}
                    <td>
                        {/* <Link to={`/update/${item.id}`}> */}
                       {/*  <button className="btn btn-edit">Edit</button> */}
                        {/* </Link> */}
                        <button className="btn btn-delete">Delete</button>
                    </td>
                </tr>
        {/*     )
        })} */}
    </tbody>

</table>

    </div>
);
    }
