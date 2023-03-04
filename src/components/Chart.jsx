import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto"
import axios from "axios";

function Chart() {
  const [user, setUsers] = useState([]);
  const [data, setData] = useState({
        
          
    labels: user?.map((data) => data._id) , 
    datasets: [{
        label:"Last 10 day player Entry",
        data: user?.map((data) => data.count),
        backgroundColor:['teal'],  
        color:['white'],
        borderColor:'teal',
        borderWidth:1,
        width:7


    }]
});


const chart =()=>{
    axios.get(`http://localhost:7007/api/admin/chart`)
    .then((response) => {
        setUsers(response.data.users);
        console.log(response.data.users)
    });
    
    }

  useEffect(() => {
    chart()
}, []);

    useEffect(() => {
        setData({  
            labels: user?.map((data) => data.date), 
            datasets: [{  
                label:"Last 10 day player Entry",
                data: user?.map((data) => data.count)
    
            }]
            })
    } ,[user.length])

  return (
    <div className='w-full'>  
    <Bar data={data} />
</div>
  )
}

export default Chart;
