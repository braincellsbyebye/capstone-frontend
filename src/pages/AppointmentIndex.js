



function AptIndex() {  
  return (
<>

<div className='header-appointment'>
    <div className='header-circle'>
    </div>
    <div className='header-title'>
    <text>Name</text>
      <br></br>
      <text>UserID</text>
    </div>
      
</div>

<div className="header-image">
    <div className="card-body">
        <img src="/appoint.png" width={1350} height={300}></img>

    <div className="header-title">
         <text>Confirmation</text>
    </div>

        <div className="body-card">
         <div className="body-title">
            <text>Clinic Appointment</text>           
         </div>   
         <div className='clinic-image'>
            <img src="/clinic1.png" width={80} height={80}></img>
          </div>    
        </div>  


        <div className="body-card-one">
          <div className="body-title-one">
            <text>Dental Appointment</text>
          </div>
        <div className="dental-image">
          <img src="/dent1.png" width={80} height={80}></img>
        </div>

        </div>
        </div>
</div>


    </>

  );
  }


export default AptIndex;