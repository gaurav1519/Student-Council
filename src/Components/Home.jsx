import React from "react";

const councilMembers = [
  {
    name: "Aarav Sharma",
    role: "President",
    image: "https://via.placeholder.com/150",
    description:
      "Leading the student council with a focus on innovation and unity.",
  },
  {
    name: "Meera Iyer",
    role: "Vice President",
    image: "https://via.placeholder.com/150",
    description:
      "Assisting in leadership duties and managing council operations.",
  },
  {
    name: "Kunal Rao",
    role: "Sports Head",
    image: "https://via.placeholder.com/150",
    description:
      "Promoting fitness and organizing sports events across campus.",
  },
  {
    name: "Anjali Verma",
    role: "Cultural Head",
    image: "https://via.placeholder.com/150",
    description:
      "Driving cultural initiatives and student engagement activities.",
  },
  {
    name: "Ritika Sen",
    role: "Discipline Incharge",
    image: "https://via.placeholder.com/150",
    description:
      "Ensuring order and implementing discipline policies effectively.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Student Council Members
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {councilMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4">{member.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
