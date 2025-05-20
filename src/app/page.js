import Image from "next/image";
import Navbar from "./components/nav";
export default function Home() {
  return (
    <>
     
    



     <section
      className="relative bg-center bg-cover bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
    >
     
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 inset-0"></div>
{/* <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div> */}
     
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



    

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8 font-mono text-black ">
            <span className="border-b-[#DF1F38] border-t-0 border-l-0 border-r-0 border-3 p-2">
Our Services
            </span>
            </h3>
          <div className="grid gap-8 md:grid-cols-3 text-left text-black ">
            <div className="bg-white p-6  shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
             
              <h4 className="text-xl font-bold mb-2 text-center">Tax Planning</h4>
              <p>Strategic tax planning to help you save money and plan for future financial goals with expert advice and personalized strategies.</p>
            </div>

<div className="bg-white p-6 rounded-lg shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2 text-center">Tax Return Preparation</h4>
              <p>Filing federal, state, and local tax returns for individuals and businesses. We prepare and file accurate tax returns for individuals and businesses, ensuring full compliance and maximum deductions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2 text-center">Audit Representation</h4>
              <p>Professional support and defense during IRS audits and tax investigations. 
We provide expert representation during IRS or state tax audits. Our team handles all 
   and defends your rights throughout the process.

              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2 text-center">Business Tax Services</h4>
              <p>Tax compliance and optimization for startups, freelancers, and corporations.
             From entity structuring to payroll, sales tax, and quarterly filings—we handle it all so you can focus on growth.
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2 text-center">Estate and Inheritance Tax Services</h4>
              <p>TProper estate planning can significantly reduce the tax burden on your heirs. We assist clients with structuring their estates in a tax-efficient manner, helping preserve wealth across generations. 
              </p>
            </div>

             <div className="bg-white p-6 rounded-lg shadow font-serif text-gray-700 bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2 text-center">Payroll Tax Assistance </h4>
              <p>We assist employers with proper payroll tax setup, reporting, and filing. From small businesses to large enterprises, we ensure compliance with federal, state, and local payroll tax laws.
              </p>
            </div>
          </div>
        </div>
      </section>

  


<iframe
className=" w-full " data-aos="fade-up" data-aos-delay="200"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2339354836295!2d74.3590902!3d31.435226099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478eb95bd8ec86eb%3A0xe3939c368c045dbe!2sMubashir%20%26%20company!5e0!3m2!1sen!2s!4v1747727748751!5m2!1sen!2s"
  width="600"
  height="400"
  style={{ border: 0 }}
  allowFullScreen  
  loading="lazy"
/>



     

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="./logo.svg" className="h-12 me-3" alt="FlowBite Logo" />
           
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Address (144 St 4, Awan Market, Lahore, 54600)</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Email address</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">03014810410</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline " target="#">Facebook</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline" target="#">Instagram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Mubashir & Company™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a> */}
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a> */}
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        <p>TaxLegalExperts. All rights reserved.</p>
      </footer>
    </>
  );
}
