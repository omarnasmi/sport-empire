import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function InfoContainer(props) {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const backgroundColor = hovered ? '#44bd32' : '#353b48';
  const borderColor = hovered ? '#4cd137' : '#353b48';

  return (
    <div
      className="bg-gray-800 text-white rounded-lg border-2 border-white p-4 flex flex-col items-center justify-center w-1/3"
      style={{ backgroundColor, borderColor, transition: 'all 0.3s ease-in-out' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={props.image} alt={props.title} className="w-16 h-16 mb-4" />
      <h1 className="text-2xl  lg:text-3xl font-bold">{props.title}</h1>
      <h2 className="text-lg ">{props.subtitle}</h2>
    </div>
  );
}

function InfoSection(props) {
  return (
    <div className="relative bg-gray-600 px-6 py-6 rounded-md border-black">
      <h1 className="text-white text-4xl py-5">{props.sectionTitle}</h1>
      <div className="flex space-x-3">
        {props.infoData.map((info, index) => (
          <InfoContainer key={index} title={info.title} subtitle={info.subtitle} image={info.image} />
        ))}
      </div>
      <a href="#" className="text-gray-200">Show more...</a>
    </div>
  );
}

function Discover() {
  // Define data for each InfoSection
  const sectionsData = [
    {
      sectionTitle: 'See our latest articles',
      infoData: [
        { title: 'Calorie Calculator', subtitle: 'Calculate your daily calorie needs', image: '/src/assets/react.svg' },
        { title: 'Fat loss article', subtitle: 'Learn how to lose fat effectively', image: '/src/assets/react.svg' },
        { title: 'Full body workout', subtitle: 'Get a full body workout in just 30 minutes', image: '/src/assets/react.svg' }
      ]
    },
    {
        sectionTitle: 'See our latest Workouts',
        infoData: [
          { title: 'Calorie Calculator', subtitle: 'Calculate your daily calorie needs', image: '/src/assets/react.svg' },
          { title: 'Fat loss article', subtitle: 'Learn how to lose fat effectively', image: '/src/assets/react.svg' },
          { title: 'Full body workout', subtitle: 'Get a full body workout in just 30 minutes', image: '/src/assets/react.svg' }
        ]
      },
      {
        sectionTitle: 'Find the best tools',
        infoData: [
          { title: 'Calorie Calculator', subtitle: 'Calculate your daily calorie needs', image: '/src/assets/react.svg' },
          { title: 'Bench Press PR', subtitle: 'Learn how to lose fat effectively', image: '/src/assets/react.svg' },
          { title: 'Full body workout', subtitle: 'Get a full body workout in just 30 minutes', image: '/src/assets/react.svg' }
        ]
      },
  ];

  return (
    <div className="space-y-10">
      {sectionsData.map((section, index) => (
        <InfoSection key={index} sectionTitle={section.sectionTitle} infoData={section.infoData} />
      ))}
    </div>
  );
}

export default Discover;
