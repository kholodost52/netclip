type typeSliderCards = {
  id: number;
  cardName: string;
  prewiew: string;
  open: string;
  isOpen: boolean;
};

type Props = {
  SliderCards: typeSliderCards[];
};

const AboutService = ({ SliderCards }: Props) => {
  return (
    <div className="flex">
      <ul className="grid grid-cols-3 gap-13.25">
        {SliderCards.map((slide: typeSliderCards) => {
          return (
            <li key={slide.id}>
              <h3 className="font-semibold text-4xl leading-[100%] mb-4">{slide.cardName}</h3>
              <p>{slide.open}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutService;
