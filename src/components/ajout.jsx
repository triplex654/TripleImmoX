import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";
import NavbarMenu from "./navbar";


function Create(){

    let emptyFormData = {
        "type": "",
        "bedrooms": 0,
        "kitchens": 0,
        "living_rooms": 0,
        "toilets": 0,
        "price": 0,
        "address": "",
        "status": ""
      }
    
const [formData,setFormdata]= useState({...emptyFormData});


    const handleChange= (event)=>{
        let name=event.target.name;
        let val=event.target.value;
        setFormdata({...formData,[name]:val});
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
            axios.post("https://real-estate-api-64hf.onrender.com/api/properties", formData)
            .then((res)=>{ alert("Article enregistré avec succes! "); window.location.href='/'})
            .catch((err)=>{alert("erreur detecté"); console.log(err)})    
        
    }

    return (

        <>
        <NavbarMenu/>
        <div className='mt-5 container-fluid text-start mb-3 text-decoration-none'> 
        <Link to='/' ><span className='bi bi-arrow-left text-black'></span></Link> Retour vers la page d'accueil</div>

        <form className='bg-light rounded-2 p-3 row transition' onSubmit={handleSubmit}>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Type : </label><br/>
            <select className='form-select' name='type' onChange={handleChange}>
              <option value={"appartment"}>Appartement</option>
              <option value={"house"}>Maison</option>
              <option value={"villa"}>Villa</option>
            </select>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de chambres : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='bedrooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de cuisines : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='kitchens'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de salons : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='living_rooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de douches : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='toilets'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Prix : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='price'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Address : </label><br/>
            <textarea className="form-control" name='address' onChange={handleChange}></textarea>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Statut : </label><br/>
            <select onChange={handleChange} className='form-select' name='status'>
              <option value={"available"}>Disponible</option>
              <option value={"under construction"}>En Travaux</option>
              <option value={"occupied"}>Occupé</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <button className="btn btn-success rounded" type='submit'>Enregistrer</button>
          </div>
      </form> 
        </>
  
    )
}

export default Create;