// src/components/UserBox.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserBox() {
  const [userData, setUserData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    

     axios.get('http://localhost/dashboard/BD/')
       .then((response) => {
         console.log(response.data.items);
         setUserData(response.data.items);
         setIsLoading(false);
       })
       .catch((error) => {
         console.error('Error fetching data:', error);
         setIsLoading(false);
       });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const cajasVista = userData.slice(0,4).map((userData)=>(
    <div key={userData.id} className="sm:w-full md:w-1/3 lg:w-fit bg-white rounded-lg p-4 m-4 shadow-md border border-[#122A3D]">
      <p className="text-xl font-semibold bg-[#122A3D] rounded-md text-white p-3">{userData.Nombre}</p>
          
      <p>Lugar de Nacimiento: {userData.LugarNacimiento}</p>
      <p>Edad: {userData.Edad}</p>
      <p>Fecha de Nacimiento: {userData.FechaNacimiento}</p> 
  
    </div>))

  return (
    <div className=" w-full h-full flex justify-center bg-[#D4DDE3]">
      <div className='w-11/12 flex flex-row flex-wrap content-start justify-center'>
      {
        cajasVista
      }  
      </div>
    </div>
  );
}

export default UserBox;
