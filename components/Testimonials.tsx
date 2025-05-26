import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    name: "Shane Robinett",
    title: "CTO, Atentiv LLC",
    img: "/shane-robinett.jpg",
    content:
      "Haroon is a great UI/UX developer. He has worked well with our distributed teams to build out the worlds best ADHD digital therapeutic solution. Without his knowledge and creativity we would never have been as successful.",
  },
  {
    name: "Joe Rensin",
    title: "CEO, Bondbury",
    img: "/joe.webp",
    content:
      "Haroon does excellent work and looks for alternative solutions. He is a great team player and has a positive attitude. I highly recommend him.",
  },
  {
    name: "Jason Spanomanolis",
    title: "CEO, Jslytics",
    img: "/jason.jpeg",
    content:
      "Great freelancer, Thanks so much! Great communication and delivery",
  },
];
export default function Testimonials() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      interval={5100}
    >
      {/* @ts-ignore  */}
      {testimonials.map((item) => (
        //@ts-ignore
        <Testimonial key={item} item={item} />
      ))}
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
      <img src={`${img ? img : "/user.jpg"}`} />
      <div className="myCarousel">
        <h3>{name} </h3>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
