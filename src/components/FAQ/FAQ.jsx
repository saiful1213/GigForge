/* eslint-disable react-refresh/only-export-components */

const FAQ = () => {
   return (
      <div className="my-32">
         <h1 className="font-bold text-3xl text-center mb-12">Programming & Tech FAQs</h1>
         <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" checked="checked" />
               <div className="collapse-title text-xl font-medium">
                  What is Web programming?
               </div>
               <div className="collapse-content">
                  <p>Web programming or development use code to focus on the website functionality and ensure it works and is easy to use. It involves markup, writing, network security and coding which is client and server side. The most popular web programming languages are HTML, XML, JavaScript, PHP, ASP.Net and Python.</p>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
                  How do I choose the right freelance programmer for my project?
               </div>
               <div className="collapse-content">
                  <p>With so many programming services, it’s a challenge to choose the right programmer. Formulate a clear brief, decide on a budget, deadlines and scope. Select a programmer based not only on their skills and experience but also on how well you might work and communicate.</p>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
                  Do I need to prepare something for my programmer?
               </div>
               <div className="collapse-content">
                  <p>Yes, good documentation and a clear brief are crucial for the success of getting the desired result for your project. Formulate your initial high level idea and brainstorm it until you have a clear vision. Next, turn your idea into detailed functionality requirements for the backend programming and detail your technical requirements (platform, devices etc.) Also add non-functional requirements e.g. performance, security, load and clearly specify the scope of the project.</p>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
                  What type of services can I find in Programming & Tech?
               </div>
               <div className="collapse-content">
                  <p>Starting with web development for client-side (frontend) and server-side (backend), the category also offers specialists in Wordpress and e-commerce development, mobile or desktop apps, support & cybersecurity, as well as user testing and QA.</p>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
                  How do I find good developers on Fiverr?
               </div>
               <div className="collapse-content">
                  <p>Fiverr offers a huge choice of developers, so refine your requirements to determine whether you need a full-stack developer - proficient at both backend (server-side) and frontend (client-side) or a more narrow specialist. Get quotes and discuss your needs with at least 3 developers for an informed decision.</p>
               </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
               <input type="radio" name="my-accordion-4" />
               <div className="collapse-title text-xl font-medium">
                  Can I hire developers in less than 48 hours?
               </div>
               <div className="collapse-content">
                  <p>Yes, on Fiverr we have developers worldwide available 24/7. If you need urgent bug fixing, have a cyber security emergency or a server load issue, you can be sure that a professional on Fiverr is within reach. Publish a buyer request or make direct contact for best results.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;