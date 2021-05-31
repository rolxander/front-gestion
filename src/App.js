
import React, { useState } from 'react'
const axios = require('axios')

function App(){
  const [data,setData] = useState([])
  const converterBase64 = ( archivos ) =>{
    let Files = []
  //  console.log(archivos)
    Array.from( archivos ).forEach( archivo =>{
      let reader = new FileReader();
      reader.readAsDataURL( archivo );
      reader.onload = function (){
        let arrayAuxiliar = []; 
        var base64 = reader.result;
        let data_text = base64.split(',');
        arrayAuxiliar.push(data_text[1])
        let info = archivo["name"].split(".")
        arrayAuxiliar.push(info[0])
        arrayAuxiliar.push(info[1])
        Files.push(arrayAuxiliar);
        setData(...data,Files)
    //    console.log(data)
      }
    })
  }
  return(<>
    <div className = "App">
      <input type="text"/>
      <input type = "file" multiple onChange ={(e)=>{
        converterBase64(e.target.files)
        
        }}/>
      <button onClick = {(e) =>{
      
        e.preventDefault();
        console.log(data)
        let send = false
        Object.keys(data).map((key)=>{
          if(data[key][2]  === "pdf" || data[key][2]  === "docx" || data[key][2]  === "txt"  ){
            send = true
          } 
          return  null
        });
        if(!send){
          console.log("no se puede enviar el archivo no pertenece a los formatos aceptados")
        }else{
          axios({
            method:'POST',
            url:'http://localhost:4000/api',
            data: data,
            headers: { 'content-type': 'application/json'}

   })
   .then((response)=>{
      console.log(response)
   }) 
   .catch((err)=>{

    console.log(err)
   });

        }
      }}>submit</button>
    </div>
  </>)
}
export default App;
