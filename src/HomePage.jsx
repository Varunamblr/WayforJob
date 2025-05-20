
import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Gateway to the Right Career
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Search jobs, build resumes, and unlock career tips in one place.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="text" placeholder="Job Title" className="px-4 py-2 rounded-md text-black w-full md:w-1/3" />
          <input type="text" placeholder="Location" className="px-4 py-2 rounded-md text-black w-full md:w-1/3" />
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100">
            Search
          </button>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{ title: "Job Listings", icon: "💼" }, { title: "Resume Builder", icon: "📄" }, { title: "Interview Tips", icon: "🎯" }, { title: "Paid Resources", icon: "💰" }].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((job) => (
            <div key={job} className="bg-white p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <p className="text-sm text-gray-600 mb-1">ABC Corp • Remote</p>
              <p className="text-sm text-gray-600 mb-4">$70k - $90k</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Job Hunt Today</h2>
        <p className="mb-6">Join thousands of professionals finding their dream jobs.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100">
          Create Your Free Profile
        </button>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-8 px-4 text-center">
        <p>© 2025 WayforJob. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
