import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="py-3 mb-5 flex justify-between">
      {/* Logo */}
      <Link to="/">
        <p className="m-0 text-2xl text-green-800">Al-Quran Digital</p>
      </Link>

      {/* Lang */}
      <select className="bg-white py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-green-500 transition-all">
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default Header
