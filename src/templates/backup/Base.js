
export const Base = () => {

return (

 <div id="page-top">

 <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
     <a class="navbar-brand js-scroll-trigger" href="#page-top">
         <span class="d-block d-lg-none">PROJET TEKOS</span>
         <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./panda.png')} alt="logo" width={170} /></span>
     </a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
     
     <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav">
             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Bienvenue BINH</a></li>
             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Home</a></li>
             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Explore</a></li>
             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Wallet</a></li>
             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Account</a></li>
         </ul>
     </div>
     
 </nav>
 
 {/* <div class="container-fluid p-0">
   
     <section class="resume-section" id="about">
         <div class="resume-section-content">
           
             <div class="container">


             </div>

             <div class="social-icons">
                 <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
                 <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
                 <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
                 <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
             </div>
         </div>
          
     </section>
     
 </div> */}

</div>

    )

}
