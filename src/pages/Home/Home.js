import Search from 'components/Search/Search'

function Home() {
  return (
    <div>
      <p className="mb-4 text-3xl md:text-4xl text-green-800 text-center">
        <i className="mdi mdi-magnify mr-2"></i>
        Cari surat
      </p>

      {/* Search */}
      <Search />
    </div>
  )
}

export default Home
