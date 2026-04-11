import { useState } from 'react';
import AboutService from './aboutservice-slider/AboutService';
import SliderComponent from './aboutservice-slider/SliderComponent';
type typeSliderCards = {
    id: number;
    cardName: string;
    prewiew: string;
    open: string;
    isOpen: boolean;
  }

  

const SlideSection = () => {
  const [SliderCards, setSliderCards] = useState<typeSliderCards[]>([
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

  return (
      <>
        <div className="ml-4.25 mr-5 font-semibold text-3xl leading-[121%] mt-13.75 mb-10">Гарантировано только у нас весь комплекс работ</div>
        
        <div className='block lg:hidden overflow-hidden'><SliderComponent SliderCards={SliderCards} setSliderCards={setSliderCards} /></div>
        <div className='hidden lg:block overflow-hidden'><AboutService SliderCards={SliderCards}/></div>
      </>
  );
}

export default SlideSection;
