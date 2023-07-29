import React from 'react';
import data,{imgdata} from './Data';
import Cards from './Cards';
import Imgcard from './Imgcard';
import Newcard from './Newcard';
import newcarddata from './Newcarddata';





const Allcards = () => {
 
  return (
    
    <div className="container">
      <div className="row">
        {data.map((values)=>(
          <Cards
          header={values.header}
          title={values.title}
          text={values.text}
          />

        ))}
       

   
    
  
      <div className="row">
        {imgdata.map((values) => (
          <Imgcard
            key={values.id}
            imgsrc={values.imgsrc}
            imgtitle={values.imgtitle}
            imgtext={values.imgtext}
            imgbtn={values.imgbtn}
          />
          
        ))}
             <div className="row">
     
          {newcarddata.map((values)=>
         
              <Newcard 
              oldtitle={values.oldtitle}
              oldtext={values.oldtxte}
              oldimg={values.oldimg}
              />
            )
          }
          </div>
         </div>
         </div></div>
         
   
  
     
  );
}

export default Allcards;
