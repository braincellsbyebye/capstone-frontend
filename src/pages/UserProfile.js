

function UserProfile() {   
  return (
<>

<div className='user-header'>      
</div>

<div className='title-section'>
    <text class="content-name">CONTENT</text>
        <div class="card-section">
         <div class="card-image">
            <img src="/record.png" width={50} height={40}></img>
          
            <img src="/record.png" width={50} height={40}></img>
         </div>
            
        </div>
        <div class="card-section-one">
        <div class="card-image-one">
          <img src="/certi.png" width={50} height={40}>
            </img>
        </div>
        </div>

     <div className='title-sec'>
        <text class="content-preference">PREFERENCES</text>
        <div class="card-section-two">
        <div class="card-image-two">
          <img src="/pol.png" width={40} height={40}>
            </img>
        </div>
        </div>
        <div class="card-section-three">
        <div class="card-image-three">
          <img src="/log.png" width={40} height={40}>
            </img>
        </div>
        </div>
     </div>
    
</div>



    </>

  );
  }


export default UserProfile;