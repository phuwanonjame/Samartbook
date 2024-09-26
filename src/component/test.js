import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" }
];

const MySelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}  // เปิดใช้งานการค้นหา
      placeholder="Select a fruit"
    />
  );
};

export default MySelectComponent;
