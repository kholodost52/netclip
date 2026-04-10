import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlideSection() {
  const [SliderCards, setSliderCards] = useState([
    {
      id: 1,
      cardName: "Стиллизация кадра под концепцию съемки ",
      prewiew:
        "* Декоративные подсветки, концептуальный реквизит, предметы интерьера  ",
      open: "* Декоративные подсветки, концептуальный реквизит, предметы интерьера - все, как в кино! Мы выстроим кадр, как это делаем для рекламы  ",
      isOpen: false,
    },
    {
      id: 2,
      cardName: "Съемка, монтаж и цветокоррекция специалистами уровня ТОП",
      prewiew: "Наша команда снимает и производит рекламу  ",
      open: "Наша команда снимает и производит рекламу, где самые высокие требования  к видеопроизводству  ",
      isOpen: false,
    },
    {
      id: 3,
      cardName: "Разработка и внедрение графики и звуковых эффектов",
      prewiew:
        "Если у вас своя готовая презентация, то мы просто внедрим ее в кадр с учетом эстетики и концептуального решения. Мы добавим звуковые эффекты, и...  ",
      open: "Если у вас своя готовая презентация, то мы просто внедрим ее в кадр с учетом эстетики и концептуального решения. Мы добавим звуковые эффекты, и вы удивитесь тому, как ваш видеоконтент превратится в “голливудский” шедевр",
      isOpen: false,
    },
    {
      id: 4,
      cardName: "Ваш внешний образ: стиль и make-up artist",
      prewiew:
        "+ 5000 р. к бюджету, и мы пригласим отличного визажиста, который сделает и мейк...",
      open: "+ 5000 р. к бюджету, и мы пригласим отличного визажиста, который сделает и мейк, и прическу. Мы также обсудим с вами ваш внешний образ, чтобы он сочетался с цветовой игрой кадра",
      isOpen: false,
    },
    {
      id: 5,
      cardName: "Арт-дирекшон и режиссура монтажа ",
      prewiew:
        "Знаете почему некоторые видео позитивно влияют на ваш имидж и вызывают чувство гордости,  а...",
      open: "Знаете почему некоторые видео позитивно влияют на ваш имидж и вызывают чувство гордости,  а некоторые работают против вас? Потому что там нет режиссуры и арт-дирекшона.",
      isOpen: false,
    },
    {
      id: 6,
      cardName: "Готовый видеопродукт в киноэстетике ",
      prewiew:
        "Мы снимаем в S-log и уделяем расстановке света и цветокоррекции столько...",
      open: "Мы снимаем в S-log и уделяем расстановке света и цветокоррекции столько внимания, сколько рекламным роликам, поэтому ваш видеоконтент будет точно играть на руку вашему  имиджу.  ",
      isOpen: false,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    variableheight: false,
    variableweight: false,
  };
  const toggleState = (id: number) => {
    setSliderCards(
      SliderCards.map((card) =>
        card.id === id ? { ...card, isOpen: !card.isOpen } : card,
      ),
    );
  };

  return (
    <Slider {...settings}>
      {SliderCards.map((slide) => (
        <div key={slide.id} className="w-70 h-85">
          <div className=" h-full bg-[#dfdfdf] mt-5.25 ml-4 mr-6 ">
            <div className="pt-5.75 pr-12 pb-9.75 pl-4">
              <h3 className="text-xl font-semibold leading-[140%] mb-12">
                {slide.cardName}
              </h3>
              {slide.isOpen ? (
                <p className="font-normal text-sm leading-[143%]">
                  {slide.open}
                </p>
              ) : (
                <p className="font-normal text-sm leading-[143%] bg-linear-to-b from-[#111] to-[rgba(17,17,17,0)] bg-clip-text text-transparent">
                  {slide.prewiew}
                </p>
              )}
              <div className="flex justify-center mt-5.5">
                <button onClick={() => toggleState(slide.id)}>
                  {slide.isOpen ? (
                    // <svg
                    //   width="24"
                    //   height="24"
                    //   viewBox="0 0 24 24"
                    //   fill="none"
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   transform="scale(1, -1)"
                    // >
                    //   <path
                    //     d="M22.5674 6.43712C22.2698 6.13945 21.7861 6.13945 21.4884 6.43712L12 15.9441L2.49303 6.43712C2.19536 6.13945 1.71163 6.13945 1.41396 6.43712C1.11629 6.7348 1.11629 7.21852 1.41396 7.51619L11.4419 17.5441C11.5907 17.6929 11.7768 17.7674 11.9814 17.7674C12.1674 17.7674 12.3721 17.6929 12.5209 17.5441L22.5488 7.51619C22.8651 7.21852 22.8651 6.7348 22.5674 6.43712Z"
                    //     fill="#111111"
                    //     fill-opacity="0.56"
                    //   />
                    // </svg>
                    <div></div>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5674 6.43712C22.2698 6.13945 21.7861 6.13945 21.4884 6.43712L12 15.9441L2.49303 6.43712C2.19536 6.13945 1.71163 6.13945 1.41396 6.43712C1.11629 6.7348 1.11629 7.21852 1.41396 7.51619L11.4419 17.5441C11.5907 17.6929 11.7768 17.7674 11.9814 17.7674C12.1674 17.7674 12.3721 17.6929 12.5209 17.5441L22.5488 7.51619C22.8651 7.21852 22.8651 6.7348 22.5674 6.43712Z"
                        fill="#111111"
                        fill-opacity="0.56"
                      />
                    </svg>
                  )}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
