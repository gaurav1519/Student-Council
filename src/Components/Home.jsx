import React from "react";
import Footer from "./Footer";

const councilMembers = [
  {
    name: "Aarav Sharma",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1634476542932-eebf84bd61d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGdlJTIwZHJlc3MlMjBzaW5nbGUlMjBib3lzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D", // Replace with actual base64 or hosted image
  },
  {
    name: "Isha Verma",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1667890786332-42c2cbd8d695?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxnZSUyMGRyZXNzJTIwc2luZ2xlJTIwYm95cyUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    name: "Rahul Mehra",
    role: "General Secretary",
    image:
      "https://images.unsplash.com/photo-1742518424556-839a9846adee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMHNpbmdsZSUyMGJveXMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Sneha Patil",
    role: "Cultural Secretary",
    image:
      "https://images.unsplash.com/photo-1696960181436-1b6d9576354e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwc2luZ2xlJTIwZ2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Student Council 2025</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Empowering student voices and shaping our campus community.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">About the Council</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          The Student Council serves as the official voice of the student body,
          organizing events, resolving issues, and creating a vibrant college
          environment. We are a team of elected representatives committed to
          leadership, service, and unity.
        </p>
      </section>

      {/* Members Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet the Council Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events/Initiatives Section */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Council Initiatives</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          We host events, workshops, and campaigns for student welfare, social
          awareness, and campus engagement. Stay tuned for our upcoming drives,
          fests, and leadership forums!
        </p>
        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
          View Events
        </button>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
