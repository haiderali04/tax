const Hero =()=>{
    return(
        <>
        
        <section
      className="relative bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
    >
     
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 inset-0"></div>

     
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-mono">
          Trusted Tax Lawyers at Your Service
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl mx-auto text-white  font-mono">
          We solve tax problems and help businesses grow with legal confidence.
        </p>
        <a
          href="tel:+923014810410"
          className="bg-[#DF1F38] hover:bg-[#DF1F38] text-white px-6 py-3 rounded font-semibold font-serif"
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
        
        </>
    )
}

export default Hero ;