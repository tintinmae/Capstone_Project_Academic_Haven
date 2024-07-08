import Layout from "@/app/components/layout/Layout";
import SearchBar from "@/app/components/searchbar/SearchBar";
import React from "react";

const Files: React.FC = () => {
  // const handleSearch = (query: string) => {
  //   console.log("Performing search with query:", query);
  //   // Perform search logic here (e.g., fetch data based on query)
  // };
  return (
    <Layout>
      <div>
        {/* <SearchBar onSearch={() => handleSearch} /> */}
      </div>
    </Layout>
  );
};

export default Files;
