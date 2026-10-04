import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[150vh] bg-[#F5EFE4] text-gray-900 pb-20">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F5EFE4] border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <span className="text-[#F06B27] font-bold text-2xl tracking-tighter">M</span>
            <span className="font-semibold text-lg ml-1 text-gray-800">entors Eduserv</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 tracking-wide">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-gray-800 font-bold text-[15px] leading-none">JEE Test Series</span>
            <div className="h-[2px] w-full bg-gray-800 mt-1.5"></div>
          </div>
          <span className="text-[#F06B27] cursor-pointer text-[15px] leading-none">NEET <span className="font-medium text-gray-500">Test Series</span></span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white rounded-full pl-3 pr-4 py-1.5 border border-gray-300 shadow-sm">
            <span className="text-[14px]">📞</span>
            <span className="text-gray-800 font-semibold text-[14.9px] tracking-tight">+91 74629 99520</span>
          </div>
          <button className="flex items-center justify-center bg-[#1EA651] rounded-full w-[44px] h-[34px] shadow-sm hover:opacity-90 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] text-white">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              <path d="M16.5 14.5c-.8.8-1.5.6-2.5 0-1.8-1-3-2.3-4-4-.6-.9-.8-1.6 0-2.4l1-1c.3-.3.3-.8 0-1l-2-3c-.3-.3-.8-.3-1 0l-1.5 1.5c-.4.4-.6 1-.5 1.5.2 1.3 1 3 2.5 4.5 1.5 1.5 3.2 2.3 4.5 2.5.5.1 1.1-.1 1.5-.5l1.5-1.5c.3-.3.3-.8 0-1l-3-2c-.2-.3-.7-.3-1 0z"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sticky Mobile Hero Section (Scrolls behind the rest of the page) */}
      <div className="relative">
        <div className="md:static sticky top-[72px] z-0" style={{ background: 'linear-gradient(180deg, #F5EFE4 0%, #D2C9B9 100%)', width: '100%' }}>
          <section className="max-w-[1440px] mx-auto py-10 px-4 xl:px-[159px] relative">
            <div 
              className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-14 min-h-[323px] w-full max-w-[1122px] mx-auto shadow-2xl rounded-[32px]"
              style={{ background: 'radial-gradient(94.13% 130.56% at 50% 15.28%, #323232 0%, #090909 100%)' }}
            >
              
              {/* Full SVG Background (Includes gradient, border, grid, and blur mask) */}
              <div className="absolute inset-0 z-0 rounded-[32px] pointer-events-none hidden md:block">
                 <img src="/teacher-bg.svg" alt="" className="absolute -top-[14px] -left-[75px] w-[1272px] h-[599px] max-w-none object-cover" />
              </div>

              <div className="relative z-20 md:w-[60%] text-left pt-6 pl-2 md:pl-8">
                <h2 className="text-white font-black text-2xl md:text-[32px] mb-2 tracking-wide flex items-center leading-none">ME<span className="text-[#FF7800]">A</span>ITS</h2>
                <h3 className="text-white text-[38px] md:text-[52px] font-bold mb-4 leading-[1.1] tracking-tight">
                  Mentors Eduserv’s All India<br />Test Series
                </h3>
                <p className="text-[#F06B27] font-bold text-[24px] md:text-[28px] mb-12">JEE Main & Adv 2027</p>
                
                <p className="text-gray-400 text-[13px] font-medium mb-3">Designed by Mr. Anand Jaiswal</p>
                
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F06B27] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Orange Swoosh */}
              <div className="absolute bottom-0 left-[10%] w-[80%] md:w-[60%] h-[120px] z-10 pointer-events-none opacity-80 md:opacity-100 flex items-end">
                 <img 
                   src="/swoosh.svg" 
                   alt="" 
                   className="w-full h-auto object-contain object-bottom transform translate-y-4" 
                   style={{ filter: 'drop-shadow(0px -5px 10px rgba(0,0,0,0.3)) drop-shadow(-182px 195px 49px rgba(0,0,0,0.5))' }} 
                 />
              </div>
              


              {/* Real Teacher Image - Breaking out of the box */}
              <div className="absolute bottom-[-80px] right-[5%] z-20 md:w-auto flex justify-end pointer-events-none">
                 <Image 
                   src="/teacher.png" 
                   alt="Mr. Anand Jaiswal" 
                   width={420} 
                   height={500} 
                   className="object-contain" 
                   style={{ filter: 'drop-shadow(10px 23px 24px rgba(0,0,0,0.25))' }}
                   priority 
                 />
              </div>
            </div>
          </section>
        </div>

        {/* The rest of the content has a solid background so it slides OVER the sticky hero on mobile */}
        <div className="relative z-10 bg-[#FDFDF7] rounded-t-[40px] md:rounded-none mt-4 md:mt-0 pt-8 pb-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:shadow-none">
          
          {/* Pricing Header */}
          <section className="max-w-[1000px] mx-auto px-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h2 className="text-[22px] font-bold mr-2 text-gray-900 tracking-tight">Test Series 2027</h2>
              <span className="bg-[#111111] text-white text-[11px] font-bold px-4 py-1.5 rounded-full cursor-pointer">Class 12</span>
              <span className="bg-white border border-gray-200 text-gray-500 hover:text-gray-800 text-[11px] font-semibold px-4 py-1.5 rounded-full cursor-pointer transition">12th passed</span>
            </div>
            
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#111111] text-white text-[11px] font-bold px-4 py-1.5 rounded-full cursor-pointer">JEE Main + Advanced</span>
              <span className="bg-white border border-gray-200 text-gray-500 hover:text-gray-800 text-[11px] font-semibold px-4 py-1.5 rounded-full cursor-pointer transition">JEE Main</span>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 relative">
              
              {/* Absolute Claim Offer Badge */}
              <div className="absolute -right-4 md:-right-[120px] top-16 md:top-24 z-50 hidden md:flex flex-col items-center pointer-events-auto cursor-pointer transition hover:-translate-y-1" style={{ width: '90px' }}>
                <div className="relative flex flex-col items-center w-full">
                  {/* Gift Icon */}
                  <img src="/gift.png" alt="Gift" className="w-[34px] h-[34px] relative z-10 translate-y-[6px] drop-shadow-md" />
                  
                  {/* White Pill */}
                  <div className="bg-white border border-[#E3E3E3] rounded-[39px] w-[90px] h-[30px] flex items-center justify-center relative z-20" style={{ boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.1), 0px 10px 10px 0px rgba(0,0,0,0.09), 0px 23px 14px 0px rgba(0,0,0,0.05)' }}>
                    <span className="text-[11px] font-bold text-gray-900 leading-none">Claim offer</span>
                  </div>
                  
                  {/* Yellow 10% Off Pill */}
                  <div className="bg-[#FFC34B] rounded-[10px] px-2.5 py-1 absolute bottom-[-12px] z-30 shadow-sm">
                    <span className="text-[10px] font-bold text-gray-900 leading-none block">10% off</span>
                  </div>
                </div>
              </div>

              {/* Card 1: Online Test Pack */}
              <div className="bg-white rounded-[28px] border border-blue-100 overflow-hidden shadow-sm flex flex-col relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500"></div>
                <div className="p-7 md:p-9 flex-grow">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-50 text-gray-500 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">Class 12</span>
                    <span className="bg-gray-50 text-gray-500 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">Online</span>
                  </div>
                  <h3 className="text-[22px] font-bold mb-1 text-gray-900">JEE Main + Advanced 2027</h3>
                  <h4 className="text-blue-600 font-bold text-[17px] mb-6">Online Test Pack</h4>
                  
                  <div className="relative mb-8 mt-2">
                     <div className="bg-gradient-to-r from-[#2857BF] to-[#234285] text-white text-[11px] font-bold py-1.5 px-6 inline-block rounded-r-md relative -left-7 md:-left-9 shadow-md">
                       Attempt from Anywhere
                       <div className="absolute right-[-8px] top-[0] border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[8px] border-l-[#234285]"></div>
                     </div>
                     <div className="absolute right-0 top-0 bg-[#2A2A2A] text-white text-[10px] font-bold py-1 px-3 rounded-full shadow-sm">
                       Grind Mode
                     </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">JEE पकड़ Test series</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2"><span className="text-black font-semibold text-[15px]">✓</span> 6 unit · 6 part tests · 22 full tests</p>
                    </div>
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">पढ़ाव Mock Tests</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> 140+ Mock tests</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2"><span className="text-black font-semibold text-[15px]">✓</span> 160+ PYQ tests</p>
                    </div>
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">आईना Sessions</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> AIR 1 Guidance Sessions</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> Boards vs Competitive Exam Management</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2"><span className="text-black font-semibold text-[15px]">✓</span> Weak Topic Sessions, Based on Your Tests</p>
                    </div>
                    <div className="pt-3">
                      <p className="text-[11px] font-semibold text-gray-400 mb-2">Also Includes</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> Detailed Performance Analysis</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2"><span className="text-black font-semibold text-[15px]">✓</span> Video Solutions for each Test Series Qs</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-7 md:px-9 pb-5 pt-2">
                  <p className="text-[10px] text-gray-400 font-medium mb-0.5">Instant access · Valid 12 months</p>
                  <p className="text-[11px] text-gray-600 font-semibold">Attempt remotely at any time in each test window</p>
                </div>

                <div className="bg-[#262626] p-5 px-7 md:px-9 flex justify-between items-center rounded-b-[28px]">
                  <div>
                    <p className="text-[#F06B27] font-bold text-[22px] leading-none">₹ 1,999</p>
                    <div className="flex items-center gap-2 text-[10px] mt-1">
                      <span className="text-gray-400 line-through">₹ 2,499</span>
                      <span className="text-gray-400 font-medium">Limited time deal</span>
                    </div>
                  </div>
                  <button className="bg-white text-gray-900 font-bold text-[11px] py-2.5 px-5 rounded-full hover:bg-gray-100 transition shadow-sm">
                    View Details
                  </button>
                </div>
              </div>

              {/* Card 2: CBT Plus */}
              <div className="bg-white rounded-[28px] border border-orange-200 overflow-hidden shadow-xl flex flex-col relative transform md:-translate-y-2 z-20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC34B] to-[#C42701]"></div>
                <div className="p-7 md:p-9 flex-grow">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-gray-50 text-gray-500 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">Class 12</span>
                    <span className="bg-gray-50 text-gray-500 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">Online</span>
                    <span className="bg-gray-50 text-gray-500 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">CBT</span>
                  </div>
                  <h3 className="text-[22px] font-bold mb-1 text-gray-900">JEE Main + Advanced 2027</h3>
                  <h4 className="text-orange-600 font-bold text-[17px] mb-6 flex flex-wrap gap-1">
                    <span className="text-[#D32F2F]">CBT Plus</span> <span className="text-gray-700">+</span> <span className="text-blue-600">Online Test Pack</span>
                  </h4>
                  
                  <div className="relative mb-8 mt-2">
                     <div className="bg-gradient-to-r from-[#FFC34B] via-[#F06B27] to-[#C42701] text-white text-[14px] font-bold leading-none py-2 px-6 inline-block rounded-r-md relative -left-7 md:-left-9 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm flex items-center">
                       Nearest CBT Centre @ Patna
                       <div className="absolute right-[-8px] top-[0] border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[8px] border-l-[#C42701]"></div>
                     </div>
                     <div className="absolute right-0 top-0 bg-[#D32F2F] text-white text-[10px] font-bold py-1 px-3 rounded-full shadow-sm">
                       Battle Mode
                     </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">JEE पकड़ Test series</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2"><span className="text-black font-semibold text-[15px]">✓</span> 6 unit · 6 part tests · 22 full tests</p>
                    </div>
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">पढ़ाव Mock Tests</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> 140+ Mock tests</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-center gap-2"><span className="text-black font-semibold text-[15px]">✓</span> 160+ PYQ tests</p>
                    </div>
                    <div>
                      <span className="bg-[#F06B27] text-white text-[14px] font-bold leading-none px-3 py-1 rounded inline-block mb-2.5">आईना Sessions</span>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> AIR 1 Guidance Sessions</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> Boards vs Competitive Exam Management</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2"><span className="text-black font-semibold text-[15px]">✓</span> Weak Topic Sessions, Based on Your Tests</p>
                    </div>
                    <div className="pt-3">
                      <p className="text-[11px] font-semibold text-gray-400 mb-2">Also Includes</p>
                      <p className="text-[15px] font-bold text-gray-900 flex items-start gap-2 mb-2"><span className="text-red-500 font-bold text-[15px]">✓</span> Centre-Based CBT Tests</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2 mb-2"><span className="text-black font-semibold text-[15px]">✓</span> Detailed Performance Analysis</p>
                      <p className="text-[15px] font-normal leading-none text-gray-700 flex items-start gap-2"><span className="text-black font-semibold text-[15px]">✓</span> Video Solutions for each Test Series Qs</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-7 md:px-9 pb-5 pt-2">
                  <p className="text-[10px] text-gray-400 font-medium mb-0.5">Instant access · Valid 12 months</p>
                  <p className="text-[11px] text-gray-600 font-semibold">Attempt remotely at any time in each test window (Online)</p>
                </div>

                <div className="bg-[#262626] p-5 px-7 md:px-9 flex justify-between items-center rounded-b-[28px]">
                  <div>
                    <p className="text-[#F06B27] font-bold text-[22px] leading-none">₹ 3,999</p>
                    <div className="flex items-center gap-2 text-[10px] mt-1">
                      <span className="text-gray-400 line-through">₹ 4,299</span>
                      <span className="text-gray-400 font-medium">Limited time deal</span>
                    </div>
                  </div>
                  <button className="bg-white text-gray-900 font-bold text-[11px] py-2.5 px-5 rounded-full hover:bg-gray-100 transition shadow-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-[1100px] mx-auto mt-24 px-4 mb-16 relative">
            
            {/* Background decorative shapes */}
            <div className="absolute -left-6 bottom-0 w-24 h-24 bg-blue-500 rounded-[20px] transform -rotate-12 z-0 rounded-bl-[40px]"></div>
            <div className="absolute -right-4 bottom-[-10px] w-20 h-20 bg-gray-500 rounded-[16px] transform rotate-12 z-0"></div>

            <div className="bg-[#111111] rounded-[32px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative shadow-2xl z-20">
               
               {/* Left Side: Text */}
               <div className="md:w-1/2 text-left z-20 mb-10 md:mb-0 relative">
                 <h3 className="text-gray-300 text-[15px] font-medium mb-1">Stuck?</h3>
                 <h2 className="text-white text-3xl md:text-[40px] font-bold tracking-tight leading-tight">Get a free Roadmap</h2>
               </div>
               
               {/* Right Side: Form */}
               <div className="w-full md:w-[400px] flex flex-col gap-3 z-20 relative">
                 <div className="flex items-center bg-[#2A2A2A] rounded-full overflow-hidden shadow-inner border border-white/5">
                   <div className="px-5 py-3.5 text-white text-sm font-bold bg-[#333333] border-r border-[#444]">
                     +91
                   </div>
                   <input 
                     type="tel" 
                     placeholder="10-digit mobile number" 
                     className="w-full bg-transparent text-white px-5 py-3.5 outline-none text-[15px] placeholder-gray-500"
                   />
                 </div>
                 <button className="w-full bg-[#F06B27] hover:bg-orange-600 text-white font-bold py-3.5 rounded-full transition shadow-[0_4px_14px_0_rgba(240,107,39,0.39)] text-[16px]">
                   Get Your RoadMap
                 </button>
               </div>

               {/* Center Decorative Line with Dots (Absolute) */}
               <div className="absolute left-0 top-1/2 md:top-[65%] w-full flex items-center z-10 opacity-80 pointer-events-none">
                 <div className="w-[10%] border-t border-dashed border-gray-600"></div>
                 <div className="flex items-center gap-4 px-4">
                   <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                   <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                   <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                   <div className="w-4 h-4 rounded-full bg-amber-600"></div>
                   <div className="w-4 h-4 rounded-full bg-[#F06B27]"></div>
                   <div className="w-4 h-4 rounded-full bg-red-500"></div>
                   <div className="w-4 h-4 rounded-full bg-red-700"></div>
                   <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                   <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                 </div>
                 <div className="flex-grow border-t border-gray-600"></div>
               </div>
               
            </div>
            
            <p className="text-[#333333] font-bold text-center mt-10 tracking-tight text-[15px]">
              Built to Boost Your Preparation
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
