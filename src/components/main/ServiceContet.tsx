import React from "react";


const services = [
    { id: 1, text: "Обучающее видео" },
    { id: 2, text: "Онбординг видео для бизнеса" },
    { id: 3, text: "Медицинская лекция" },
    { id: 4, text: "Ролик-инструкция со спикером" },
    { id: 5, text: "Хай-класс видеовизитка" },
    { id: 6, text: "Прямая трансляция" },
    { id: 7, text: "Интервью и кулинарные ток-шоу" },
    { id: 8, text: "Блогинг" },
    { id: 9, text: "Вебинар" }
  ];

const ServiceContet = () => {
  return (
    <div className="bg-[#dfdfdf] w-screen">
      <div className="ml-4 mr-3.5">
        <h2 className="text-center text-3xl leading-[100%] font-semibold min-w-76 min-h-14 pt-14 mb-10 lg:text-5xl">
          Сделаем под ключ <br className="lg:hidden" />
          на топовом уровне
        </h2>
        <div className="">
          <ul className="lg:mr-16.5 lg:ml-16.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-17.25">
            
            {services.map((service) => (
            <li className="text-xl font-semibold leading-[140%] flex items-center gap-3 mb-6 lg:text-4xl lg:mb-20 lg:max-w-105 lg:max-h-18">
              <img src="src/img/checkpoint.png" alt="" className="w-10 lg:w-12"/>
              {service.text}
            </li>))}
            <div className="mb-9.25 lg:mb:21.25"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceContet;
