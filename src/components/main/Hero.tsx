import AccardeonHero from "./Accardeon/AccardeonHero";

const Hero = () => {
  return (
    <div className="ml-4 mr-3.5 lg:mt-10">
      <div className="lg:flex lg:justify-center">
        <div className="lg:max-w-133 lg:mr-12">
          <h1 className="text-3xl leading-[150%] font-semibold lg:max-w-134 lg:text-5xl">
            Снимем вас <br /> в нашей студии как <br className="lg:hidden" />
            голливудскую звезду{" "}
          </h1>
          <div className="font-medium text-xl leading-[150%] hidden lg:block">
            Netclip - агентство мультимедийного контента и проведения прямых
            трансляций. Находясь на стыке дизайна, видеопроизводства и
            технологий потокового вещания, мы предлагаем самые современные
            решения в области видеомаркетинга для бизнеса и блогинга. Студия
            находится в Москве, рядом с метро ВДНХ.
          </div>
        </div>

        <AccardeonHero />
        <div className="transform-[scale(1)] mt-10 mb-14 m-w-127 lg:mt-0">
          <img src="src/img/heroimg.png"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
