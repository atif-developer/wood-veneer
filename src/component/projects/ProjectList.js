import React,{useState} from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { projectData } from "../../db/project-db";
import Card from "../cardProject/Card";

const ProjectList = () => {
    window.scrollTo(0, 0);

    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
    };
    
    const filteredData = projectData.filter((card) =>
      card.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div>
      <Head />
      <Header />
      <div className="bg-white mt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900">
             Projects
          </h2>
          <p className="leading-relaxed my-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleSearchChange}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Projects By Title..."
                />
              </div>
            </form>
          </div>
          <h1 className="mb-2">
            Number of Projects {filteredData?.length}{" "}
          </h1>
          <div className="border-b-2"></div>
          <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-3">
            {filteredData.map((item) => (
              <div key={item.id}>
                <Card img={item.img} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;
