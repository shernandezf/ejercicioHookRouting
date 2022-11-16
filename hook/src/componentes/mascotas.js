import Mascota from "./mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Mascotas({mascotasL}) { 
 return (
   <div className="container">
     <h2 className="mt-2">Listado de mascotas</h2>
     <hr></hr>
     <Row>
       {mascotasL.map((mascota) => (
         <Col key={mascota.id}>
           <Mascota mascota={mascota} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Mascotas;