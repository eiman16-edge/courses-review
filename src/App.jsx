import CardsGrid from "./components/CardsGrid.jsx";

export default function App() {
  return (
    <>
      <div className="content-text">
        <h2>
          Explore <span className="sep">skill courses</span>
        </h2>
        <p>Online video courses with new additions published every month.</p>
      </div>
      <CardsGrid />
    </>
  );
}
