"use client";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
    {
      id: 2,
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
    {
      id: 3,
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
    {
      id: 4,
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
    {
      id: 5,
      question: "What will be delivered and when?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
    {
      id: 6,
      question: "How do I clean and maintain my Comfortly chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloremque modi cumque inventore ratione repellat.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 border-4 border-blue-500">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Questions Looks Here
          </h2>
          <p className="text-gray-500">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </h3>
                <button className="text-blue-500 text-xl font-bold">+</button>
              </div>
              <p className="text-gray-600 mt-4 text-sm hidden">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
