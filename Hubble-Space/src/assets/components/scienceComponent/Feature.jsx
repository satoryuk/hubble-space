import React from 'react';

const Feature = () => {
  const features = [
    {
      id: "01",
      title: "What's Up: November 2024",
      description:
        "This month, Saturn shines in the south most of the night, Jupiter rises in the early evening alongside Taurus and Orion, while Mars trails a couple of hours behind, visible high in the early morning sky.",
      image:
        "https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg", // Corrected URL
      alt: "Night sky with stars",
      caption:
        "Jupiter is high overhead before dawn with the bright stars of Taurus and Orion. Jupiter is the bright object at top, right of center.",
      exploreLink: "#",
    },
    {
      id: "02",
      title: "What is a Supermoon?",
      description:
        "A supermoon occurs when the Moon's orbit is closest (perigee) to Earth at the same time the Moon is full. So what's so special about a supermoon? For the interested observer, there's plenty to see and learn.",
      image:
        "https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg", // Corrected URL
      alt: "Supermoon with statue",
      caption:
        "The moon, or supermoon, is seen as it sets over the Martin Luther King Jr. Memorial on Monday, Nov. 14, 2016.",
      exploreLink: "#",
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-12 px-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Featured</h2>
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-8`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={feature.image}
                alt={feature.alt}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 w-full h-auto"
              />
              <p className="text-sm text-gray-600 mt-2">{feature.caption}</p>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-2xl font-bold text-gray-400">{feature.id}</span>
              <h3 className="text-2xl font-semibold mt-2 hover:text-blue-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-700 mt-4">{feature.description}</p>
              <a
                href={feature.exploreLink}
                className="mt-4 inline-flex items-center text-blue-500 font-semibold hover:underline"
              >
                Explore <span className="ml-1 text-red-500">⦿</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
