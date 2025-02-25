import { useEffect, useState } from "react";
import DarkSwitch from './DarkSwitch';


export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("ไทย");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[118px] ${
        isScrolled ? "bg-[rgba(0,0,0,0.5)] shadow-md text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-[30px]">
        {/* โลโก้ */}
        <div className="absolute left-0 pl-40">
          <a href="#default">
            <img
              // src={isScrolled ? "/images/PTT_Full_Icon_Color.svg" : "public/images/Full_Logo_PTT_white.png"}
              src={"public/images/Full_Logo_PTT_white.png"}
              alt="Company Logo"
              className="h-18 w-auto transition-all duration-300"
            />
          </a>
        </div>

        {/* เมนูหลัก */}
        <ul className="flex-grow flex justify-center space-x-15 font-medium items-center"> 
          <li><a href="#" className="text-[20px] relative hover:text-[#00AEEF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:h-[3px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[linear-gradient(to_right,#06b6d4,#3b82f6)]">หน้าแรก</a></li>
          <li><a href="#" className="text-[20px] relative hover:text-[#00AEEF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:h-[3px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[linear-gradient(to_right,#06b6d4,#3b82f6)]">เกี่ยวกับเรา</a></li>
          <li><a href="#" className="text-[20px] relative hover:text-[#00AEEF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:h-[3px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[linear-gradient(to_right,#06b6d4,#3b82f6)]">ข้อมูลสิ่งแวดล้อม</a></li>
          <li><a href="#" className="text-[20px] relative hover:text-[#00AEEF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:h-[3px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[linear-gradient(to_right,#06b6d4,#3b82f6)]">ข่าวสารและกิจกรรม</a></li>
          <li><a href="#" className="text-[20px] relative hover:text-[#00AEEF] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:h-[3px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[linear-gradient(to_right,#06b6d4,#3b82f6)]">ติดต่อเรา</a></li>
        </ul>

        {/* เมนูเปลี่ยนภาษา */}
        <div className="flex space-x-5">
          <button
            onClick={() => setLanguage("EN")}
            className={`text-[22px] w-11 h-11 flex items-center justify-center border-1 rounded-full text-lg transition 
              ${language === "EN" ? "bg-[#00AEEF] border-[#00AEEF] text-white" : "bg-transparent border-white"}
              hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:text-white`}
            style={{ borderColor: isScrolled ? "white" : "white", color: isScrolled ? "white" : "white" }}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ไทย")}
            className={`text-[22px] w-11 h-11 flex items-center justify-center border-1 border-white rounded-full text-lg hover:bg-[#00AEEF] transition ${
              language === "ไทย" ? "bg-[#00AEEF] border-[#00AEEF] text-white" : "bg-transparent"
            }`}
            style={{ borderColor: isScrolled ? "white" : "white", color: isScrolled ? "white" : "white" }}
            >
            ไทย
          </button>
        </div>

        {/* สวิตช์โหมด */}
        <DarkSwitch />
        {/* ปุ่มเปิดเมนูบนมือถือ */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* เมนูสำหรับมือถือ */}
      <ul className={`md:hidden absolute top-full left-0 w-full bg-white text-black shadow-lg
        flex flex-col items-center space-y-4 py-4 transform transition-transform duration-300 origin-top
        ${isOpened ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}>
        <li><a href="#" className="hover:text-gray-600">หน้าแรก</a></li>
        <li><a href="#" className="hover:text-gray-600">เกี่ยวกับเรา</a></li>
        <li><a href="#" className="hover:text-gray-600">ข้อมูลสิ่งแวดล้อม</a></li>
        <li><a href="#" className="hover:text-gray-600">ข่าวสารและกิจกรรม</a></li>
        <li><a href="#" className="hover:text-gray-600">ติดต่อเรา</a></li>
        <li><button className="hover:text-gray-600">EN</button></li>
        <li><button className="hover:text-gray-600">TH</button></li>
        
      </ul>
    </nav>
  );
}
