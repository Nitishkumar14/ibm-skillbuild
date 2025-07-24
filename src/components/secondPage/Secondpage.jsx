import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/Rectangle 20.png";
import img2 from "../../assets/Rectangle 21.png";
import img3 from "../../assets/Rectangle 24.png";
import img4 from "../../assets/Rectangle 26.png";
import img5 from "../../assets/Rectangle 21.png";
import img6 from "../../assets/Rectangle 26.png";
import img7 from "../../assets/Rectangle 24.png";
import img8 from "../../assets/Rectangle 26.png";
import img9 from "../../assets/Rectangle 21.png";

const SecondPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      src: img1,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img2,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img3,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img4,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: "https://img.freepik.com/premium-photo/man-holding-mobile-phone-while-standing-farm_1048944-18724812.jpg",
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img5,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img6,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img7,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img8,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
    {
      src: img9,
      description:
        "PM Kisan Yojana की 18वीं किस्त का लाभ लेना है तो तुरंत करें, ये काम नहीं रुक सकता है।",
      link: "https://www.youtube.com/watch?v=9CpuXdqiosI",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (items.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="h-[900px] pt-10 bg-[#E5FFEF]">
      <center className="pt-10" data-aos="fade-up">
        <h1 className="text-6xl font-semibold text-black">NEWS</h1>
      </center>
      <div className="border-4 h-[615px] ml-10 mr-10 mt-20 rounded-[24px] border-[#8a9791]">
        <div className="relative w-full overflow-hidden pt-10 mx-auto px-20">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 rounded-full z-10 bg-[#93B6B1] text-black font-bold text-[25px] px-[22px] py-3 hover:bg-gray-600"
            >
              &lt;
            </button>

            <div className="flex w-full transform transition-transform duration-700 ease-in-out">
              {items
                .slice(currentIndex, currentIndex + 4)
                .map((item, index) => (
                  <div key={index} className="w-1/4 px-2" data-aos="fade-up">
                    <div className="bg-[#E5FFEF] rounded-[30px] h-[520px] object-cover border-2 border-[#bbbfbd] shadow-lg">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.src}
                          alt="news"
                          className="w-full pr-3 h-[290px] object-cover rounded-t-[30px]"
                        />
                      </a>
                      <div className="px-4 py-4">
                        <p className="text-[21px] text-center font-semibold text-black mt-6">
                          {item.description}
                        </p>
                        <p className="text-center mt-4">
                          <Link
                            to="/readmore"
                            className="text-blue-500 text-[20px] font-semibold"
                          >
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-[#93B6B1] rounded-full text-black font-bold text-[25px] px-[22px] py-3 hover:bg-gray-600"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;