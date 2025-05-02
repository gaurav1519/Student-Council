import React from "react";
import { councilMembers } from "../constants/images";
import Landing from "../Components/Landing";

const Home = () => {
  return (
    <div className="font-sans min-h-screen">
      <Landing />
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">About the Council</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          The Student Council serves as the official voice of the student body,
          organizing events, resolving issues, and creating a vibrant college
          environment. We are a team of elected representatives committed to
          leadership, service, and unity.
        </p>
      </section>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Meet the Council Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition "
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
      <section className="py-16 px-6 text-center">
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
    </div>
  );
};

export default Home;
