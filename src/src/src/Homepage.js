import React from "react";
import { Search, Briefcase, Truck, Home as HomeIcon } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">TIPEZE</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Browse</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="bg-white text-blue-700 px-3 py-1 rounded-lg hover:bg-gray-200">Sign Up</a>
        </nav>
      </header>

      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Find the right professional or service</h2>
        <div className="flex justify-center items-center max-w-lg mx-auto bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search skills, transport, properties..."
            className="flex-1 px-4 py-2 text-black outline-none"
          />
          <button className="bg-orange-500 p-3 text-white">
            <Search />
          </button>
        </div>
      </section>

      <section className="py-12 bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <CategoryCard icon={<Briefcase size={40} />} title="Skills" color="bg-orange-500" />
        <CategoryCard icon={<Truck size={40} />} title="Transportation" color="bg-yellow-500" />
        <CategoryCard icon={<HomeIcon size={40} />} title="Real Estate" color="bg-green-500" />
      </section>

      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-center mb-6">Newsletters, Articles & Adverts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard title="Market Trends" description="Latest updates in services and opportunities." />
          <ContentCard title="Tips & Guides" description="Helpful advice for customers and providers." />
          <ContentCard title="Promotions" description="Special offers from our partners." />
        </div>
      </section>

      <footer className="bg-blue-800 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p className="text-sm">TIPEZE helps you find skilled professionals, transport providers, and property listings easily.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm">Email: info@tipeze.com</p>
            <p className="text-sm">Phone: +123 456 789</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CategoryCard({ icon, title, color }) {
  return (
    <div className={`flex flex-col items-center p-6 rounded-lg text-white ${color} shadow-lg hover:opacity-90 cursor-pointer`}>
      {icon}
      <h4 className="mt-4 text-xl font-bold">{title}</h4>
    </div>
  );
}

function ContentCard({ title, description }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md cursor-pointer">
      <h5 className="text-lg font-semibold mb-2">{title}</h5>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
