import logo from '../../public/logo.jpeg';
import blankImage from '../assets/image.png';
import NavbarMenu from './navbar';
import './details.css';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Details(){
    const {id}=useParams();
    const [logement,setLogement]=useState(null);

    const url=`https://real-estate-api-64hf.onrender.com/api/properties/${id}`;

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setTimeout(setLogement(response.data),1000)
            console.log(response.data)
        }).
        catch((err)=> console.log(err))
    } , [id]);

    var properties_images_link = {
        house: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        appartment: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        villa: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
    }

    const getLogementImageLink = (type) => {
        if(type === "house") {
            return properties_images_link.house;
        } else if(type === "appartment" || type === "appartement") {
            return properties_images_link.appartment;
        } else if(type === "villa") {
            return properties_images_link.villa;
        } else {
            return properties_images_link.house;
        }
    };

    return (
        <>
        <NavbarMenu/>
        <div className='mt-5 container-fluid text-start mb-3 text-decoration-none'> 
        <Link to='/' ><span className='bi bi-arrow-left text-black'></span></Link> Retour vers la page d'accueil</div>
        <div className='container-fluid'>
        <div className="row">
            <div className="col-lg-8">
                <img className='min-h-25 bg-gray object-fit-cover rounded-3' height={"300px"} width={"500px"} src={logement?getLogementImageLink(logement?.type):blankImage} ></img>
            </div>

            <div className="col-lg-4 bg-light rounded-3 shadow-sm ">
                <div className='float-md-start p-3 fw-bold'>
                    <span className='bi bi-map pe-2'> {logement?logement.address:
                         <div className="spinner-grow" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>
                        }</span>
                </div> <br></br>
                <div className='container-fluid d-flex'>
                    <div className='col-2 d-block ms-1'>
                        <div className='fw-bold fs-4 text-center'>{logement?logement.bedrooms:
                             <div className="spinner-grow" role="status">
                             <span className="visually-hidden">Loading...</span>
                         </div>}</div>
                        <div> Chambres</div>
                    </div>
                    <div className='col-3 d-block ms-1'>
                        <div className='fw-bold fs-4 text-center'>{logement?logement.living_rooms:
                             <div className="spinner-grow" role="status">
                             <span className="visually-hidden">Loading...</span>
                         </div>}</div>
                        <div>Salons</div>
                    </div>
                    <div className='col-3 d-block ms-1'>
                        <div className='fw-bold fs-4 text-center'>{logement?logement.kitchens:
                             <div className="spinner-grow" role="status">
                             <span className="visually-hidden">Loading...</span>
                         </div>}</div>
                        <div>Cuisines</div>
                    </div>
                    <div className='col-3 d-block ms-1'>
                        <div className='fw-bold fs-4 text-center'>{logement?logement.toilets:
                             <div className="spinner-grow" role="status">
                             <span className="visually-hidden">Loading...</span>
                         </div>}</div>
                        <div>Douches</div>
                    </div>
                </div>

                <section className=' mt-3 ms-3 fw-bolder fs-3 w-100 text-start'>{logement?Number(logement.price) :
                     <div className="spinner-grow" role="status">
                     <span className="visually-hidden">Loading...</span>
                 </div>} FCFA</section>

                <div className='mt-4 bg-gray bg-info p-2 border-5 shadow-lg h-25 rounded-2'>
                        <img className='rounded-5 col-2 float-lg-start' title='Triple Immo X' src={logo}></img>
                        <a href='tel:620938485' className='btn bg-black text-light border-2 rounded-2 float-lg-end'>Contact</a>
                    </div>
            </div>
        </div>

        <div className='row mt-5 bg-info p-4 rounded-3'>
            <div className='col-lg-2 p-2 rounded-3 ps-4 d-flex border-5 bg-light btn-border-gray me-4'>
                <div className='bi bi-map pe-3 fs-5 text-center'></div>
                <div>
                    <div className='text-gray'>Localisation</div>
                    <div className=' fw-bolder'>{logement?logement.address:
                         <div className="spinner-grow" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>}</div>
                </div>
            </div>

            <div className='col-lg-2 p-2 rounded-3 ps-4 d-flex border-5 bg-light btn-border-gray me-4'>
                <div className='bi bi-house pe-3 fs-5 text-center'></div>
                <div>
                    <div className='text-gray'>Type</div>
                    <div className=' fw-bolder'>{logement?logement.type:
                         <div className="spinner-grow" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>}</div>
                </div>
            </div>

            <div className='col-lg-2 p-2 rounded-3 ps-4 d-flex border-5 bg-light btn-border-gray me-4'>
                <div className='bi bi-trophy pe-3 fs-5 text-center'></div>
                <div>
                    <div className='text-gray'>Prix</div>
                    <div className=' fw-bolder'>{logement?Number(logement.price):
                         <div className="spinner-grow" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>} FCFA</div>
                </div>
            </div>

            <div className='col-lg-2 p-2 rounded-3 ps-4 d-flex border-5 bg-light btn-border-gray me-4'>
                <div className='bi bi-bag pe-3 fs-5 text-center'></div>
                <div>
                    <div className='text-gray'>Chambres</div>
                    <div className=' fw-bolder'>1-{logement?logement.living_rooms:
                         <div className="spinner-grow" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>}</div>
                </div>
            </div>

            <div className='col-lg-2 p-2 rounded-3 ps-4 d-flex border-5 bg-light btn-border-gray me-4'>
                <div className='bi bi-bank pe-3 fs-5 text-center'></div>
                <div>
                    <div className='text-gray'>Etat</div>
                    <div className={`fw-bolder ${logement?(logement.status == "disponible"? "text-info":
                        logement.status == "occupe"? "text-warning":"text-danger"
    ):
    <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
</div>}`}>{logement?logement.status:
 <div className="spinner-grow" role="status">
 <span className="visually-hidden">Loading...</span>
</div>}</div>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}

export default Details