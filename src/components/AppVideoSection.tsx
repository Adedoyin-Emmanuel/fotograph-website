import { useEffect, useRef } from "react";
import $ from "jquery";
import img1 from "./../assets/img-1.png";
import img2 from "./../assets/img-2.png";
import img3 from "./../assets/img-3.png";
import img4 from "./../assets/img-4.png";
import img5 from "./../assets/img-5.png";
import img6 from "./../assets/img-6.png";
import img7 from "./../assets/img-7.png";
import img8 from "./../assets/img-8.png";
import img9 from "./../assets/img-9.png";
import img10 from "./../assets/img-10.png";
import img11 from "./../assets/img-11.png";
import img12 from "./../assets/img-12.png";
import img13 from "./../assets/img-13.png";
import img14 from "./../assets/img-14.png";
import img15 from "./../assets/img-15.png";
import img16 from "./../assets/img-16.png";
import img17 from "./../assets/img-17.png";
import img18 from "./../assets/img-18.png";
import img19 from "./../assets/img-19.png";
import img20 from "./../assets/img-20.png";
import img21 from "./../assets/img-21.png";
import img22 from "./../assets/img-22.png";
import img23 from "./../assets/img-23.png";
import img24 from "./../assets/img-24.png";
import img25 from "./../assets/img-25.png";
import img26 from "./../assets/img-26.png";
import img27 from "./../assets/img-27.png";
import img28 from "./../assets/img-28.png";
import img29 from "./../assets/img-29.png";

const AppVideoSection = (): JSX.Element => {
  const imageTransitionRef = useRef<HTMLImageElement>(null);
  const totalImages = 29;
  const imageTransitionDuration = 2000;

  useEffect(() => {
    const startImageTransition = () => {
      let currentImageIndex = 1;
      setInterval(() => {
        currentImageIndex = (currentImageIndex % totalImages) + 1;
        const imageUrl = getImageUrl(currentImageIndex);
        if (imageTransitionRef.current) {
          $(imageTransitionRef.current).fadeOut(
            imageTransitionDuration / 1,
            function () {
              $(this)
                .attr("src", imageUrl)
                .fadeIn(imageTransitionDuration / 2);
            }
          );
        }
      }, imageTransitionDuration);
    };

    startImageTransition();
  }, []);
  const getImageUrl = (index: number): string => {
    switch (index) {
      case 1:
        return img1;
      case 2:
        return img2;
      case 3:
        return img3;
      case 4:
        return img4;
      case 5:
        return img5;
      case 6:
        return img6;
      case 7:
        return img7;
      case 8:
        return img8;
      case 9:
        return img9;
      case 10:
        return img10;
      case 11:
        return img11;
      case 12:
        return img12;
      case 13:
        return img13;
      case 14:
        return img14;
      case 15:
        return img15;
      case 16:
        return img16;
      case 17:
        return img17;
      case 18:
        return img18;
      case 19:
        return img19;
      case 20:
        return img20;
      case 21:
        return img21;
      case 22:
        return img22;
      case 23:
        return img23;
      case 24:
        return img24;
      case 25:
        return img25;
      case 26:
        return img26;
      case 27:
        return img27;
      case 28:
        return img28;
      case 29:
        return img29;
      default:
        return img1;
    }
  };

  return (
    <section className="m-auto d-flex align-items-center justify-content-center my-4 shadow-lg p-2 brand-dark-color rounded-3 width-toggle-5">
      <img
        ref={imageTransitionRef}
        src={img1}
        alt="fotograph-features"
        className="img-fluid rounded-3 shadow brand-dark-color image-transition"
      />
    </section>
  );
};

export default AppVideoSection;
