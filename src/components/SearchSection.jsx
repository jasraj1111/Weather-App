import { FaLocationCrosshairs } from "react-icons/fa6";

const SearchSection = ({getWeatherDetails,searchInputRef}) => {
    const API_KEY = process.env.REACT_APP_API_KEY;


    const handleCitySearch = (e) =>{
        e.preventDefault();
        const searchInput = e.target.querySelector(".search-input");
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
        getWeatherDetails(API_URL); // Fetches weaather details for entered city

    };

    const handleLocationSearch = () =>{
      navigator.geolocation.getCurrentPosition(
        position =>{
          const {latitude,longitude} = position.coords;
          const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
          getWeatherDetails(API_URL); // Fetches weaather details for users current location
          
          window.innerWidth >= 768 && searchInputRef.current.focus();
        },
        () => {
          alert("Location access DENIED. Please enable permissions to use this feature.");
        }
      )
    }
    

  return (
    <div className="search-section">
    <form action="#" className="search-form" onSubmit={handleCitySearch}>
    <span className="material-symbols-rounded">search</span>  
    <input type="search" placeholder="Enter a city" ref={searchInputRef} className="search-input" required />
    </form>
    <button className="location-button" onClick={handleLocationSearch}>
    <FaLocationCrosshairs />
    </button>
  </div>
  )
}

export default SearchSection