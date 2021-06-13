function Search() {
  return (
    <div className="relative w-full md:w-3/5 mx-auto">
      {/* Icon */}
      <i className="mdi mdi-magnify text-xl text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>

      {/* Input */}
      <input
        type="text"
        className="px-3 pl-10 py-2 w-full md:text-lg rounded-md focus:outline-none focus:ring focus:ring-green-500 transition-all"
        placeholder="Masukan nama surat.."
      />
    </div>
  )
}

export default Search
