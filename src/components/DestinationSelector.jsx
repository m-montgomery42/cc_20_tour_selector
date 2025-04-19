import React, { useState, useEffect } from "react";

const DestinationSelector = ({ tours, onFilter }) => {
    const [selectedDestination, setSelectedDestination] = useState("All Destinations");

    // Extract all names from tours to be included in the dropdown
    const destinations = [
        "All Destinations",
        ...new Set(tours.map((tour) => tour.name))
    ];
// Default value for the dropdown is "All Destinations"
    const handleFilterChange = (event) => {
        const selected = event.target.value;
        setSelectedDestination(selected);
        onFilter(selected);
    };
// The page will show the selected destination after the user selects it
    return (
        <div className="destination-selector">
            <label htmlFor="destination">Choose a destination: </label>
            <select
                id="destination"
                value={selectedDestination}
                onChange={handleFilterChange}
            >
                {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;
// Task 2 Create Dropdown Filter