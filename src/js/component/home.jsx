import React from "react";

import { NavBar } from "./NavBar";

import { Jumbotron } from "./Jumbotron";

import { Card } from "./Card";

import { Footer } from "./Footer";

const Home = () => {
  const cardData = [
    {
      imageSrc:
        "https://www.alouetteanimalhospital.ca/wp-content/uploads/sites/308/2022/06/pettips.jpg",
      title: "Card Title 1",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
      title: "Card Title 2",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://www.petsmall.pk/wp-content/uploads/2023/08/Homepage-banner-Studio-Pets.jpg",
      title: "Card Title 3",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://i.pinimg.com/originals/f6/09/22/f6092208d3918d1461b60f118cf68a2b.jpg",
      title: "Card Title 4",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://cdn.firstcry.com/education/2023/01/19165304/Names-Of-Pet-Animals-In-English-For-Kids.jpg",
      title: "Card Title 5",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://www.treehugger.com/thmb/Ocxi8FYaubDwjOwria6FNpGjJjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-953005498-4ca60c6c2c5f4b0e881b2746ad5f17ef.jpg",
      title: "Card Title 6",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://media.greenmatters.com/brand-img/adx_sa-nk/0x0/hedgehog-held-in-hand-1685980925542.jpg",
      title: "Card Title 7",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://petallianceorlando.org/wp-content/uploads/2023/11/GivingTues-3-768x384.png",
      title: "Card Title 8",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://s3.amazonaws.com/zenplannerwordpress-stack0/wp-content/uploads/sites/33/2021/03/16213533/tired-dog.jpg",
      title: "Card Title 9",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
    {
      imageSrc:
        "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg",
      title: "Card Title 10",
      description:
        "Lorem ipsum and some yada yada bada bing bada boom multi pass.",
    },
  ];

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Jumbotron
              title="A Warm welcome!"
              message="lorem ipsum..."
              buttonLabel="Call to action"
            />
          </div>
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 mb-3">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
