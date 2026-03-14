function Header({name}) {
    return(
    <div className="bg-red-400 flex text-white  justify-between">

      <img src="src/assets/banner.png" alt="banner loading"  height={24} width={100}/>
      {name ?
        (
          <div className="flex gap-5 mr-5">
            <p>welcome  {name}</p>
            <span>logout</span>
          </div>) 
          
              :

          (<p>login</p>) }

    </div>
    )
    
}
export default Header;