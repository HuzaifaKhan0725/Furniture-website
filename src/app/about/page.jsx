export default function About() {
  const features = [
    {
      id: 1,
      title: "Next day as standard",
      description:
        "Order before 3pm and get your order the next day as standard.",
      icon: "🚚", // Replace with an appropriate icon
    },
    {
      id: 2,
      title: "Made by true artisans",
      description:
        "Handmade crafted goods made with real passion and craftsmanship.",
      icon: "🛠️", // Replace with an appropriate icon
    },
    {
      id: 3,
      title: "Unbeatable prices",
      description:
        "For our materials and quality, you won’t find better prices anywhere.",
      icon: "💰", // Replace with an appropriate icon
    },
    {
      id: 4,
      title: "Recycled packaging",
      description:
        "We use 100% recycled to ensure our footprint is more manageable.",
      icon: "♻️", // Replace with an appropriate icon
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* About Us Section */}
      <section className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">About Us - Comforty</h2>
        <p className="text-base leading-relaxed mb-6">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>
        <button className="bg-teal-900 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition">
          View collection
        </button>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-center text-2xl font-bold mb-6">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
