 import './home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import NavbarMenu from './navbar';
import axios from 'axios';

 function Home(){

    const [logements,setLogements]=useState([]);
    const url=`https://real-estate-api-64hf.onrender.com/api/properties`;
    var [dataloaded,setDataLoaded]=useState(false);



    useEffect(()=>{
        if(!dataloaded){
                axios.get(url)
                .then((response)=>{
                    if(typeof(response.data) == 'object' && response.data?.length >0){
                        setTimeout(()=>{ setLogements(response.data) ; setDataLoaded(true)} ,2000)
                    }
                })
                .catch((err)=> console.log(err)) }
    });

const houseDelete= (index=>{
    const newlist=logements.splice(index,1)
    setLogements([...logements])
})

function countTotal(){
    if(logements.length ===0)
        return 0;
    else{
        let s=0
        logements.forEach(data=>{
            s+=Number(data.price)
            })
        return s 
        }
    }

    return (
        <>
    <NavbarMenu/>
<div>
    <Link to='/create'>
    <button className='btn btn-primary float-start mt-4 mb-5'>
    <i className='bi bi-house-add'></i> Nouveau logement
    </button>
    </Link>

    <div className='float-end'>
    <h4>Total:</h4>
    <div className='btn btn-info font-weight-bold'>{countTotal()} XAF</div>
    </div>
</div>

<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col" className='bg-dark text-light'>Numero</th>
      <th scope="col" className='bg-dark text-light'>Type</th>
      <th scope="col" className='bg-dark text-light'>Prix</th>
      <th scope="col" className='bg-dark text-light'>Adresse</th>
      <th scope="col" className='bg-dark text-light'>Statut</th>
      <th scope="col" className='bg-dark text-light'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        dataloaded == false ?
        <>
        <tr>
          <td colSpan={8} className='bg-gray text-black'>Chargement ...</td>
        </tr>
      </> :
  
    ( ( logements.length === 0  && dataloaded) ?
    <tr>
     <td colSpan={8} className="text-center font-weight-bold text-danger p-3">
        Pas d'élément dans notre tableau
        </td>
    </tr>
    :
    logements.map((data,index)=>(
                
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{data.type}</td>
                <td>{Number(data.price)}</td>
                <td>{data.address}</td>
                <td>
                <span className={`badge p-2 ${
                    data.status === "available" ? "alert alert-info"
                    :data.status === "under construction" ? "alert alert-dark"
                    : "alert alert-danger"
                }` } >
                    {data.status}
                </span>
            </td>
            <td>
                <Link to={`details/${data.id}`}> <button className='btn btn-primary text-light'><i className="bi bi-eye"></i></button></Link>
                <Link to={`modifier/${data.id}`}><button className='btn btn-warning'><i className='bi bi-pencil-square'></i></button></Link>
            <button className='btn btn-danger'><i className='bi bi-trash' onClick={()=>{houseDelete(index)}}></i></button>
            </td>
            </tr>
    )) )

}
  </tbody>
</table>
        </>
    )

 }
 
export default Home;