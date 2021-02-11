import React,{useState} from 'react';

const Appp = () => {
  const[email ,setemail]= useState("");
  const[password ,setpassword]= useState("");
  const[newentry ,setnewentry]=useState([ ]);
  const submitform =(e)=>{
    e.preventDefault();
    const allentry = {email:email , password:password};

    setnewentry([ ...newentry ,allentry]);
     console.log(newentry);
    
  }
    
 return(
      <>
             <form action="" id="form"  onSubmit={submitform}>
              <h1>
             <div  >
                <label htmlFor="email">EMAIL</label>
                <input type="text" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e) =>setemail(e.target.value)}
                />
                  
              </div>
              <div id="password">
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" id="password" autoComplete="off" value={password}
                onChange={(e) => setpassword(e.target.value)}
                />
                    
              </div>
              <button type="submit">Login</button>
              </h1>   
             </form>
          <div>
                 {
                    newentry.map((curElem) => {
                        return(
                               <div className="sht">
                                 <p>{curElem.email}</p>
                                 <p>{curElem.password}</p>
                               </div>

                        )
                    })

                 }
         </div>
       </>
    )

}

export default Appp