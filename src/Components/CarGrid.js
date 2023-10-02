import CarCard from "./CarCard";
import { useParams } from "react-router-dom";

export default function CarGrid(props) {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  const carsPerPage = 6;
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;

  const carData = props.cars.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-3 my-4 gap-4">
      {carData.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}
