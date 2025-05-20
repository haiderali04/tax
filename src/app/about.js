const About =()=>{
    return(
        <>
        <section className="py-16 bg-white" id="aboutUs">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
     
      <div>
      <h3 className="text-3xl font-semibold mb-8 font-mono text-black text-center ">
            <span className="border-b-[#DF1F38] border-t-0 border-l-0 border-r-0 border-3 p-2">
About Us
            </span>
            </h3>
            <h4 className="text-2xl font-semibold mb-8 font-mono text-black ">
              Expertise You Can Trust:
            </h4>
        <p className="text-lg text-gray-600 mb-6">
          We are a trusted tax law firm dedicated to helping individuals and businesses navigate the complex world of tax regulations. With years of experience, a client-first approach, and a deep understanding of the tax code, we provide practical, reliable legal solutions.
        </p>
        <p className="text-lg text-gray-600">
          Whether you need help with tax planning, audits, international taxation, or business compliance, our goal is to protect your interests and ensure your financial security through personalized legal support.
        </p>
      </div>

     
      <div className="w-full h-full">
        <img src="./about-1.jpg" alt="About Us - Tax Lawyer" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
      </div>

    </div>
  </div>

</section>

<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
 <div className="w-full h-full">
        <img src="./about-2.jpg" alt="About Us - Tax Lawyer" className="w-full h-auto rounded-2xl shadow-lg object-cover" />
      </div>

     
      <div>
      <h4 className="text-2xl font-semibold mb-8 font-mono text-black ">
              Personalized Legal Solutionst:
            </h4>
        <p className="text-lg text-gray-600 mb-6">
          We don’t believe in one-size-fits-all strategies. Every client receives personalized advice tailored to their unique financial and legal situation. Your goals, your concerns—our solutions.
        </p>
        <p className="text-lg text-gray-600">
         With years of experience and a strong reputation for results, our team has successfully represented clients in audits, appeals, and negotiations with tax authorities. We understand the pressure that comes with tax issues and work relentlessly to protect your interests and resolve matters efficiently.
        </p>
      </div>


    </div>
  </div>
</section>

        </>
    )


}

export default About;