import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    name: "Shirley Fultz",
    title: "Designer",
    img: "/",
    content:
      "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
  },
  {
    name: "Shane Robinett",
    title: "CTO, Atentiv LLC",
    content:
      "Haroon is a great UI/UX developer.  He has worked well with our distributed teams to build out the worlds best ADHD digital therapeutic solution.  Without his knowledge and creativity we would never have been as successful.",
  },
];
export default function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2100}
    >
      <>
        {testimonials.map((item) => (
          //@ts-ignore
          <Testimonial key={item} item={item} />
        ))}
      </>

      <div />
    </Carousel>
  );
}

interface Item {
  item: {
    name: string;
    title: string;
    img: string;
    content: string;
  };
}

function Testimonial({ item: { name, title, img, content } }: Item) {
  return (
    <div>
      <img src={`/images/${img}.png`} />
      <div className="myCarousel">
        <h3>{name} </h3>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
