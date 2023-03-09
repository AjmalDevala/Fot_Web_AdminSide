import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto"
import Instance from "./config/Instance";

function Graph() {
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

const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = (date) => {
  const dateObj = new Date(date);
  const updatedDate = dateObj.toLocaleDateString("en-US", options);
  return updatedDate;
};

const chart =()=>{
  Instance.get(`/admin/chart`)
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
            labels: user?.map((data) =>formattedDate(data?.date)), 
            datasets: [{  
                label:"Last 10 day player Entry",
                data: user?.map((data) => data.count)
    
            }]
            })
    } ,[user.length])

  return (
    <div className='w-full'>  
    <Line data={data} />
</div>
  )
}

export default Graph;
