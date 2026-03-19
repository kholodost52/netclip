import { useState } from "react";
import AccardeonHeroItem from "./AccardeonHeroItem";

const AccardeonHero = () => {
  const [isOpenAccardeonHero, setIsOpenAccardeonHero] = useState(false);

  if (isOpenAccardeonHero == true) {
    return (
      <div className="mt-5 lg:hidden">
        <AccardeonHeroItem isOpenAccardeonHero={isOpenAccardeonHero} />
        <div className="flex justify-center">
          <button
            onClick={() => {
              setIsOpenAccardeonHero(!isOpenAccardeonHero);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="scale(1, -1)"
            >
              <path
                d="M22.5674 6.43712C22.2698 6.13945 21.7861 6.13945 21.4884 6.43712L12 15.9441L2.49303 6.43712C2.19536 6.13945 1.71163 6.13945 1.41396 6.43712C1.11629 6.7348 1.11629 7.21852 1.41396 7.51619L11.4419 17.5441C11.5907 17.6929 11.7768 17.7674 11.9814 17.7674C12.1674 17.7674 12.3721 17.6929 12.5209 17.5441L22.5488 7.51619C22.8651 7.21852 22.8651 6.7348 22.5674 6.43712Z"
                fill="#111111"
                fill-opacity="0.56"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5 lg:hidden">
        <AccardeonHeroItem isOpenAccardeonHero={isOpenAccardeonHero} />
        <div className="flex justify-center">
          <button
            onClick={() => {
              setIsOpenAccardeonHero(!isOpenAccardeonHero);
            }}
          >
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
          </button>
        </div>
      </div>
    );
  }
};

export default AccardeonHero;
