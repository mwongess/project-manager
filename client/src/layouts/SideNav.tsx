const SideNav = () => {
  return (
    <div className="h-full ">
      <div className=" flex md:flex-col md:justify-between h-full px-2">
        <input className="bg-[#2b283d] p-2 rounded" type="search" name="" id="" placeholder="Search here " />
        <div>
          <h3>FAVORITES</h3>
        </div>
        <div>
          <h3>ALL PROJECTS</h3>
        </div>
        <div>
          <h3>ARCHIVES</h3>
        </div>
        <div>
          <button>New Project</button>
        </div>
      </div>
    </div>
  )
}

export default SideNav