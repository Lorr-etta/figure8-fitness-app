import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: "💪",
      title: "Workout Plans",
      description: "Personalized workout routines tailored to your fitness level and goals",
      bgColor: "bg-paleRose",
      textColor: "text-brandNavy"
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your fitness journey with detailed analytics and insights",
      bgColor: "bg-lilac",
      textColor: "text-brandNavy"
    },
    {
      icon: "🔥",
      title: "Calorie Management",
      description: "Track your nutrition and maintain the perfect calorie deficit",
      bgColor: "bg-brandOrange",
      textColor: "text-white"
    },
    {
      icon: "👥",
      title: "Community",
      description: "Connect with like-minded fitness enthusiasts and share your progress",
      bgColor: "bg-brandNavy",
      textColor: "text-white"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brandNavy mb-4">
            Why Choose Figure 8 Fitness?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive fitness platform combines cutting-edge technology with proven fitness principles to help you achieve your goals faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
