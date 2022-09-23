import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { firebase_db } from "../../firebase";


const user =async (email_data:string)=>{
let value_data =  [{
   
     name:"",
     email:"",
     carnum:"" 
}]
  const addCollection =collection(firebase_db,'parking_user');
  

      
    const q = await query(
      addCollection,
      where("email", "==", email_data),
      //orderBy("risk", "desc"),
    
      //limit(1)
    );
    const getdata = await getDocs(q);
    const resultdata = getdata.docs.map(doc => ({ ...doc.data() }));
   
    value_data =JSON.parse(JSON.stringify(resultdata))
    //console.log(resultdata);
   // alert(resultdata) 
 
return value_data
 
}


export default user
