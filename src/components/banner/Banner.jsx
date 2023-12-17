const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse relative">
          <img
            src="images/profile.jpg"
            className=" lg:pl-60 h-80 rounded-lg "
            
          />
        <img src="images/sideimage.jpg" alt="" className="w-40 md:w-40 lg:w-40 hidden sm:hidden md:block lg:absolute lg:-top-20 lg:-right-20 z-50"/>
  
        <button className="btn lg:absolute top-80 right-44 btn-accent">Frontend Developer</button>
  
  
          <div>
              <p>Hi I'm <br /></p>
            <h1 className="text-5xl font-bold">Md. Shofiqul Islam</h1>
            <p className="py-6">
              I am a frontend <b>react Developer</b>. <br />
  
  
              <button className="btn btn-accent mt-10 "><a href="resume.pdf" download="resume.pdf" >download resume </a></button>
  
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  