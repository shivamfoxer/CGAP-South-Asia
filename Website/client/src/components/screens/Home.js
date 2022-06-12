import React from 'react'
import logo from './women.jpeg';
import Po from './po.png'
const land = () => {
    
  return (
    <div>
      <img src={logo} alt="Logo" style={{width:"100%",backgroundColor:"grey"}}/>;
      
      <p style={{color:"white", fontFamily: "monospace",fontWeight:"bold",fontSize:"2rem",textAlign:"center",marginTop:"-62%",marginLeft:"2%",marginRight:"2%"}}>CGAP (pronounced as see-gæp) is a think-tank working towards gender inclusion in South Asian politics </p>
      <p style={{color:"white", fontFamily: "monospace",fontWeight:"bold",fontSize:"1.5rem",textAlign:"center",}}>
We Believe
Gender Inclusion and Diversity in Politics = Gender Equal Society </p>

    <img src={Po} alt="Logo" style={{width:"100%",backgroundColor:"grey"}}/>;
    </div>
  )
}

export default land
