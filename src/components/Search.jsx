import { useState } from "react";
import logo from "./../logo.svg";
let currentCity = "";
let currentGuest = 0;

function Search(props) {
  const [changeInput, setChangeInput] = useState(null);
  const [location, setLocation] = useState(null);
  const [guests, setGuests] = useState({ children: 0, adults: 0, total: null });
  const [city, setCity] = useState("");
  currentCity = city;
  currentGuest = guests.total;

  return props.form ? (
    <div className="ml-8 mt-4">
      <img className="w-64 mt-2 ml-0 lg:w-36" src={logo} alt="logo" />
      <div
        onClick={() => setChangeInput("location")}
        className={
          changeInput !== "location"
            ? "text-[2.5rem] w-[80vw] p-4 border-2  rounded-3xl border-[#BDBDBD] mt-32 ml-20 lg:text-[1.2rem] lg:w-[50vw] lg:ml-[20%] lg:mt-8"
            : "border-black text-[2.5rem] w-[80vw] p-4 border-2  rounded-3xl mt-32 ml-20 lg:text-[1.2rem] lg:w-[50vw] lg:ml-[20%] lg:mt-8"
        }
      >
        <p className="text-[#333333] font-medium">Location</p>
        {location === null && <p className="text-[#BDBDBD]">Add location</p>}
        {location !== null && <p className="">{location}</p>}
      </div>
      <div
        className={
          changeInput !== "guest"
            ? "text-[2.5rem] w-[80vw] p-4 border-2 border-[#BDBDBD] rounded-3xl ml-20 lg:text-[1.2rem] lg:w-[50vw] lg:ml-[20%]"
            : "text-[2.5rem] w-[80vw] p-4 border-2 border-black rounded-3xl ml-20 lg:text-[1.2rem] lg:w-[50vw] lg:ml-[20%]"
        }
        onClick={() => setChangeInput("guest")}
      >
        <p className="font-medium">Guests</p>
        {guests.total === null ? (
          <p className="text-[#BDBDBD]">Add Guests</p>
        ) : (
          <p className="">{guests.total}</p>
        )}
      </div>
      {changeInput === "location" && (
        <div className="text-5xl mt-4 ml-20 lg:ml-[20%] lg:text-2xl cursor-pointer">
          <div
            onClick={() => {
              setLocation("Helsinki, Finland");
              setCity("Helsinki");
            }}
            className="flex mt-8"
          >
            <span className="material-symbols-outlined text-5xl lg:text-3xl">
              location_on
            </span>
            <p className="">Helsinki, Finland</p>
          </div>
          <div
            onClick={() => {
              setLocation("Turku, Finland");
              setCity("Turku");
            }}
            className="flex mt-8"
          >
            <span className="material-symbols-outlined text-5xl lg:text-3xl">
              location_on
            </span>
            <p className="">Turku, Finland</p>
          </div>
          <div
            onClick={() => {
              setLocation("Vaasa, Finland");
              setCity("Vaasa");
            }}
            className="flex mt-8"
          >
            <span className="material-symbols-outlined text-5xl lg:text-3xl">
              location_on
            </span>
            <p className="">Vaasa, Finland</p>
          </div>
          <div
            onClick={() => {
              setLocation("Oulu, Finland");
              setCity("Oulu");
            }}
            className="flex mt-8"
          >
            <span className="material-symbols-outlined text-5xl lg:text-3xl">
              location_on
            </span>
            <p className="">Oulu, Finland</p>
          </div>
        </div>
      )}
      {changeInput === "guest" && (
        <div className="text-[2.7rem] mt-4 ml-20 lg:text-[1.2rem] lg:ml-[20%]">
          <div className="adults">
            <p className="font-semibold">Adults</p>
            <p className="text-[#BDBDBD]">Ages 13 and above</p>
            <div className="flex text-5xl mt-4 lg:text-2xl">
              <button
                className="pt-1 pb-1 pr-6 pl-6 border border-black rounded-3xl"
                onClick={() =>
                  guests.adults > 0 &&
                  setGuests({
                    children: guests.children,
                    adults: guests.adults - 1,
                    total: guests.children + (guests.adults - 1),
                  })
                }
              >
                -
              </button>
              <p className="ml-4 mr-4 mt-4">{guests.adults}</p>
              <button
                className="p-4 border border-black rounded-3xl"
                onClick={() =>
                  guests.adults >= 0 &&
                  setGuests({
                    children: guests.children,
                    adults: guests.adults + 1,
                    total: guests.children + (guests.adults + 1),
                  })
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="children mt-6">
            <p className="font-semibold">Children</p>
            <p className="text-[#BDBDBD]">Ages 2-12</p>
            <div className="flex text-5xl mt-4 lg:text-2xl">
              <button
                className="pt-1 pb-1 pr-6 pl-6 border border-black rounded-3xl "
                onClick={() =>
                  guests.children > 0 &&
                  setGuests({
                    children: guests.children - 1,
                    adults: guests.adults,
                    total: guests.children - 1 + guests.adults,
                  })
                }
              >
                -
              </button>
              <p className="ml-4 mr-4 mt-4">{guests.children}</p>
              <button
                className="p-4 border border-black rounded-3xl"
                onClick={() =>
                  guests.children >= 0 &&
                  setGuests({
                    children: guests.children + 1,
                    adults: guests.adults,
                    total: guests.children + 1 + guests.adults,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={props.showResults}
        className="w-80 mt-16 ml-52 pt-8 pb-8 bg-[#EB5757] text-white rounded-3xl  hover:bg-[#EB5758] lg:w-52 lg:pb-6 lg:pt-4 lg:ml-[35%]"
      >
        <span className="text-5xl ml-6 material-symbols-rounded lg:text-3xl">
          search
        </span>
        <button className="text-6xl ml-4 lg:text-4xl">Search</button>
      </div>
    </div>
  ) : (
    <div className="lg:flex">
      <img className="w-64 mt-4 ml-10 lg:w-36 lg:mt-4" src={logo} alt="logo" />
      <button
        onClick={props.showForm}
        className="inline-flex w-max mt-20 ml-24 pt-8 pb-8 pr-12 pl-16
    text-[#333333] rounded-3xl shadow-lg shadow-slate-400/50 lg:mt-8 lg:ml-[58%] lg:pt-4 lg:pb-4 lg:pr-8 lg:pl-8"
      >
        <p
          className={
            location === null
              ? "mt-3 mr-4 text-[2.7rem] text-[#BDBDBD] lg:text-[1.2rem] lg:mt-1"
              : "mt-3 mr-4 text-[2.7rem] text-black lg:text-[1.2rem] lg:mt-1"
          }
        >
          {location === null ? "Add location" : location}
        </p>
        <div className="bg-gray-100 h-24 w-1 ml-4 lg:h-8"></div>
        <p
          className={
            guests.total === null
              ? "mt-3 ml-8 mr-6 text-[2.7rem] text-[#BDBDBD] lg:text-[1.2rem] lg:mt-1"
              : "mt-3 ml-8 mr-6 text-[2.7rem] text-black lg:text-[1.2rem] lg:mt-1"
          }
        >
          {guests.total === null ? "Add guests" : guests.total + " guests"}
        </p>
        <div className="bg-gray-100 h-24 w-1 ml-4 lg:h-8"></div>
        <span className="text-7xl mt-2 ml-12 text-[#EB5757] material-symbols-rounded lg:text-3xl lg:mt-0">
          search
        </span>
      </button>
    </div>
  );
}
export default Search;
export { currentCity, currentGuest };
