import React, { useState, useEffect } from "react";

const WelcomeModel = ({ closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    const currentTime = new Date().getTime();

    if (!hasSeenWelcome || currentTime - hasSeenWelcome > 3600000) {
      setIsModalOpen(true);
      localStorage.setItem("hasSeenWelcome", currentTime);
    }
  }, []);


  const handleClose = () => {
    setIsModalOpen(false);
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-full max-h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1687509674244-2c3aec308050?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Welcome"
              className="w-full h-[50vh] object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black bg-opacity-50 rounded-t-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Welcome to Our Website
              </h3>
              <p className="text-base leading-relaxed text-gray-200 mb-6">
                We are delighted to have you here. Explore our various projects and categories, and let us know if you have any questions!
              </p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeModel;

