import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/experience" className="hover:text-gray-300">Experience</Link>
      </div>
    </nav>
  );
}