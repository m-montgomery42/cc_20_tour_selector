import React, { useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import './styles/styles.css';

// Root component for app
function App() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  // Function to remove tour by its ID
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Function to filter tours by destination
  const filterTours = (destination) => {
    if (destination === "All Destinations") {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination));
    }
  };

  // Update filtered tours whenever tours change
  React.useEffect(() => {
    setFilteredTours(tours);
  }, [tours]);

  return (
    <>
      <div>
        {tours.length === 0 && <p>No tours available</p>}
      </div>
      <main>
        <h1>Tour Explorer</h1>
        {/* ender the DestinationSelector only if there are tours available */}
        {tours.length > 0 && (
          <DestinationSelector tours={tours} onFilter={filterTours} />
        )}
        {/* Pass state and handler to children */}
        <Gallery tours={filteredTours} setTours={setTours} onRemove={removeTour} />
      </main>
    </>
  );
 }
export default App;