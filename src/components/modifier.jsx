import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import NavbarMenu from "./navbar";
import axios from "axios";

function Modifier(){
const {id}=useParams();
const [formdata,setFormData]=useState(null);


const handleChange =(event)=>{
let name=event.target.name;
let val=event.target.value;
setFormData({...formdata,[name]:val});

}

const handleSubmit=(event)=>{
event.preventDefault();
axios.put(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`,formdata)
.then(()=>{
alert('object modifié avec succes !')
window.location.href="/";
})
.catch(()=>{alert("une erreur a ete detecte !")})

}

useEffect(
    ()=>{
axios.get(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`)
.then((res)=> setTimeout(()=>setFormData(res.data),1000))
.catch((err)=> console.log(err))
    },
[id])
    return (
        <>
        <NavbarMenu/>
        <div className='mt-5 container-fluid text-start mb-3 text-decoration-none'> 
        <Link to='/' ><span className='bi bi-arrow-left text-black'></span></Link> Retour vers la page d'accueil</div>
        {
          formdata ? <form className='row' onSubmit={handleSubmit}>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Type : </label><br/>
            <select className='form-select' value={formdata.type} name='type' onChange={handleChange}>
              <option value={"appartment"}>Appartement</option>
              <option value={"house"}>Maison</option>
              <option value={"villa"}>Villa</option>
            </select>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de chambres : </label><br/>
            <input className="form-control" min={0} type='number' value={formdata.bedrooms} onChange={handleChange} name='bedrooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de cuisines : </label><br/>
            <input className="form-control" min={0} type='number' value={formdata.kitchens} onChange={handleChange} name='kitchens'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de salons : </label><br/>
            <input className="form-control" min={0} type='number' value={formdata.living_rooms} onChange={handleChange} name='living_rooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de douches : </label><br/>
            <input className="form-control" min={0} type='number' value={formdata.toilets} onChange={handleChange} name='toilets'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Prix : </label><br/>
            <input className="form-control" min={0} type='number' value={formdata.price} onChange={handleChange} name='price'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Address : </label><br/>
            <textarea className="form-control" name='address' value={formdata.address} onChange={handleChange}></textarea>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Statut : </label><br/>
            <select onChange={handleChange} value={formdata.status} className='form-select' name='status'>
              <option value={"available"}>Disponible</option>
              <option value={"under construction"}>En Travaux</option>
              <option value={"occupied"}>Occupé</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <button className="btn btn-success rounded" type='submit'>Enregistrer</button>
          </div>
      </form> : <div className='d-flex p-5 rounded-4 flex-column justify-content-center align-items-center'>
        <span className='h5'>Chargement de la page en cours...</span>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
        }
        </>
    )
}

export default Modifier