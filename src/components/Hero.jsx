export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brandNavy bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-white flex flex-col justify-center h-full px-6 sm:px-12">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-lilac">
          FIGURE 8 <span className="text-white">Fitness</span>
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-paleRose">
          Your Journey, Our Experience
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          <div className="bg-paleRose text-brandNavy p-4 rounded-lg shadow-lg">Workout Plans</div>
          <div className="bg-lilac text-brandNavy p-4 rounded-lg shadow-lg">Progress Tracking</div>
          <div className="bg-brandOrange text-white p-4 rounded-lg shadow-lg">Calorie Deficit</div>
          <div className="bg-brandNavy text-white p-4 rounded-lg shadow-lg">Community</div>
        </div>

        <button className="mt-8 px-8 py-3 bg-brandOrange hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}