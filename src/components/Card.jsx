const RatingStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 mt-1  lg:w-8 lg:h-8 lg:ml-36 lg:mt-2"
    >
      <polygon
        points="12 2 15.09 8.82 22 9.82 17 14 18.18 21.94 12 19.47 5.82 21.94 7 14 2 9.82 8.91 8.82 12 2"
        fill="rgba(235, 87, 87, 0.72)"
      />
    </svg>
  );
};

export default function Card(props) {
  return (
    <div className="ml-7 mt-16 mb-10 lg:mb-0 lg:mt-10">
      <img
        className="rounded-3xl h-[30vh] w-[94vw] lg:h-[30vh] lg:w-[30vw]"
        src={props.ImgUrl}
        alt={props.title}
      />
      <div className="flex mt-8 mb-2">
        {props.superHost && (
          <p className="text-[#4F4F4F] text-4xl font-semibold border-2 border-[#4F4F4F] p-4 rounded-full lg:text-lg lg:p-2">
            superHost
          </p>
        )}
        <p
          className={
            props.superHost
              ? "text-[2.8rem] mt-2 ml-4 text-[#828282] lg:text-xl lg:mt-2"
              : "text-5xl mt-4 ml-4 text-[#828282] lg:text-xl lg:mt-0"
          }
        >
          {props.type + ". "}
          {props.beds !== null ? props.beds + " beds" : null}
        </p>
        <div className="flex lg:relative absolute right-10  lg:left-4">
          <RatingStar />
          <p className="text-5xl ml-0 mt-2 text-[#4F4F4F] lg:text-2xl">
            {props.rating}
          </p>
        </div>
      </div>
      <p className="text-[#4F4F4F] text-[2.78rem] mt-6 ml-4 font-medium lg:text-xl lg:ml-4">
        {props.title}
      </p>
    </div>
  );
}
