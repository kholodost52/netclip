

const AccardeonHeroItem = (props: { isOpenAccardeonHero: boolean; }) => {
  const FAQHero = {
    open:"Netclip - агентство мультимедийного контента и проведения прямых трансляций. Находясь на стыке дизайна, видеопроизводства и технологий потокового вещания, мы предлагаем самые современные решения в области видеомаркетинга для бизнеса и блогинга. Студия находится в Москве, рядом с метро ВДНХ.",
    close:'Netclip - агентство мультимедийного контента и проведения прямых трансляций. Находясь на стыке дизайна, видеопроизводства и технологий потокового вещания, мы предлагаем самые ...'
  };

  if(props.isOpenAccardeonHero) {
    return <div>
      <div
        className="font-semibold text-normal leading-[143%] transition-transform">
        {FAQHero.open}
      </div>
    </div>
  } else {
    return <div>
      <div
        className="font-semibold text-normal leading-[143%] bg-[linear-gradient(180deg,#111_0%,rgba(17,17,17,0)_100%)] bg-clip-text text-transparent transition-transform">
        {FAQHero.close}
      </div>
    </div>
  }
}

export default AccardeonHeroItem;
