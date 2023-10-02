import { Link, useParams } from "react-router-dom";

export default function Pagination(props) {
  const pageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  return (
    <div className="rounded-2xl px-5 py-1 border-2 border-white bg-gray-200 flex items-center justify-between">
      <div>
        {currentPage === Math.ceil(props.filteredCarData.length / 6)
          ? props.filteredCarData.length % 6
          : currentPage > Math.ceil(props.filteredCarData.length / 6)
          ? 0
          : 6}{" "}
          from {props.filteredCarData.length}
      </div>
      <div className="flex items-center">
        <p className="bg-white rounded-xl px-2 py-1 m-2">
          <Link
            to={
              currentPage > 1
                ? `/page/${currentPage - 1}`
                : `/page/${currentPage}`
            }
          >
            ←
          </Link>
        </p>
        <ul className="flex">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="bg-white rounded-xl px-3 py-1 m-2">
              <Link to={`/page/${pageNumber}`}>{pageNumber}</Link>
            </li>
          ))}
        </ul>
        <p className="bg-white rounded-xl px-2 py-1 m-2">
          <Link
            to={
              currentPage < 10
                ? `/page/${currentPage + 1}`
                : `/page/${currentPage}`
            }
          >
            →
          </Link>
        </p>
      </div>
    </div>
  );
}
