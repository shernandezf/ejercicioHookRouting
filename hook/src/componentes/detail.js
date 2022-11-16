import { useParams } from "react-router-dom";

export default function Detail({mascotasL}) {
 let mascotaF
 const params = useParams();
 const renderPet = () => {
    mascotasL.map(mascota =>{
        if(mascota.id==params.mascotaId){
           mascotaF=mascota
        } 
    })
  };
  return (
   <div>
     {renderPet()}
     <h2>{mascotaF.nombre}</h2>
     <img src={mascotaF.foto} />
     <h3>{mascotaF.raza}</h3>
   </div>
 );
}