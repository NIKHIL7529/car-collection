import person from "../images/people.png";
import petrol from "../images/petrol.png";
import average from "../images/average.png";
import wheel from "../images/wheel.png";
import heart from "../images/heart.png";

export default function CarCard(props) {
  return (
    <div className="bg-gray-200 rounded-2xl p-5 border-2 border-white">
      <img
        src={props.car.imageSrc}
        alt={props.car.name}
        className="rounded-2xl h-72 w-screen"
      />
      <div className="flex my-3 justify-between items-center">
        <h1 className="text-2xl">{props.car.name}</h1>
        <p className="rounded-xl border-dashed px-3 py-0 border-blue-500 border-2">
          {props.car.year}
        </p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex  my-3 items-center">
          <img src={person} alt="person" className="h-5 mr-1" />
          {props.car.people} People
        </div>
        <div className="flex  my-3 items-center">
          <img src={petrol} alt="fuelType" className="h-5 mr-1" />
          {props.car.fuelType}
        </div>
        <div className="flex  my-3 items-center">
          <img src={average} alt="average" className="h-5 mr-1" />
          {props.car.fuelEfficiency}km/1-litre
        </div>
        <div className="flex  my-3 items-center">
          <img src={wheel} alt="wheel" className="h-5 mr-1" />
          {props.car.transmission}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl inline">${props.car.price}</p>/month
        </div>
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-lg m-3">
            <img src={heart} alt="heart" className="h-5 m-1 p-1" />
          </div>
          <p className="bg-blue-500 text-white rounded-xl p-2">Rent Now</p>
        </div>
      </div>
    </div>
  );
}
