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
      <div className="flex-1 p-4">
        {SliderCards.map((slide: typeSliderCards) => {
          return (
            <div key={slide.id}>
              <h3 className="font-semibold text-4xl leading-[100%] mb-4">{slide.cardName}</h3>
              <p>{slide.open}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutService;
