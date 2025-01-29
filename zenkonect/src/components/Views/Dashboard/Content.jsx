const Content = () => {
  return (
    <div className="rounded-lg bg-gray-100 w-4/5 m-3 backdrop-blur-md bg-gray-100/50 rounded-lg shadow-lg border border-white/20">
      <div className="swiper flex items-center justify-center bg-white gap-5 rounded-lg p-8">
        <div className="person">
          <div className="image">
            <img
              loading="lazy"
              className="rounded-lg w-full"
              src="https://picsum.photos/150/150?random=1.jpg"
              alt="person"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-sm">Susan Jones</h3>
            <p className="text-xs">Teacher</p>
          </div>
        </div>
        <div className="person">
          <div className="image">
            <img
              loading="lazy"
              className="rounded-lg w-full"
              src="https://picsum.photos/150/150?random=2.jpg"
              alt="person"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-sm">Mike Brown</h3>
            <p className="text-xs">Designer</p>
          </div>
        </div>
        <div className="person">
          <div className="image">
            <img
              loading="lazy"
              className="rounded-lg w-full"
              src="https://picsum.photos/150/150?random=3.jpg"
              alt="person"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-sm">Emily White</h3>
            <p className="text-xs">Architect</p>
          </div>
        </div>
        <div className="person">
          <div className="image">
            <img
              loading="lazy"
              className="rounded-lg w-full"
              src="https://picsum.photos/150/150?random=4.jpg"
              alt="person"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-sm">David Lee</h3>
            <p className="text-xs">Software Developer</p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-8 ">
        <div className="w-1/3 rounded-lg bg-white p-[1vw] flex flex-col items-center justify-center">
          <h3 className="font-semibold text-lg text-center">
            Swipe to match people
          </h3>
          <p className="my-20 text-center">
            Swipe to connect with like-minded people and discover new
            friendships or sparks that could turn into something more.
          </p>
          <button className="px-8 py-4 mx-auto bg-[#30E938] text-white text-center">
            Swipe
          </button>
        </div>
        <div className="w-1/3 rounded-lg bg-white p-[1vw]">
          <h3>Chat Request</h3>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block bg-[#77bd7c] text-white p-1 rounded-full my-2 text-sm w-24">
                Accept
              </button>
              <button className="block bg-[#fa6684] text-white p-1 rounded-full my-2 text-sm w-24">
                Decline
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block bg-[#77bd7c] text-white p-1 rounded-full my-2 text-sm w-24">
                Accept
              </button>
              <button className="block bg-[#fa6684] text-white p-1 rounded-full my-2 text-sm w-24">
                Decline
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block bg-[#77bd7c] text-white p-1 rounded-full my-2 text-sm w-24">
                Accept
              </button>
              <button className="block bg-[#fa6684] text-white p-1 rounded-full my-2 text-sm w-24">
                Decline
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block bg-[#77bd7c] text-white p-1 rounded-full my-2 text-sm w-24">
                Accept
              </button>
              <button className="block bg-[#fa6684] text-white p-1 rounded-full my-2 text-sm w-24">
                Decline
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded-lg bg-white p-[1vw]">
          <h3>You may like</h3>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block text-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.9987 1.55503C6.32536 0.655026 5.24536 0.0683594 4.0387 0.0683594C1.99203 0.0683594 0.332031 1.73503 0.332031 3.79503C0.332031 4.58836 0.458698 5.32169 0.678698 6.00169C1.73203 9.33502 4.9787 11.3284 6.58536 11.875C6.81203 11.955 7.18536 11.955 7.41203 11.875C9.0187 11.3284 12.2654 9.33502 13.3187 6.00169C13.5387 5.32169 13.6654 4.58836 13.6654 3.79503C13.6654 1.73503 12.0054 0.0683594 9.9587 0.0683594C8.75203 0.0683594 7.67203 0.655026 6.9987 1.55503Z"
                    fill="#47DD5D"
                  />
                </svg>
              </button>
              <button className="block text-center">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69138 8.69138C8.53388 8.84888 8.33438 8.92237 8.13488 8.92237C7.93538 8.92237 7.73588 8.84888 7.57838 8.69138L4.45988 5.57288L1.34137 8.69138C1.18387 8.84888 0.984375 8.92237 0.784875 8.92237C0.585375 8.92237 0.385875 8.84888 0.228375 8.69138C-0.076125 8.38688 -0.076125 7.88288 0.228375 7.57838L3.34687 4.45988L0.228375 1.34137C-0.076125 1.03687 -0.076125 0.532875 0.228375 0.228375C0.532875 -0.076125 1.03687 -0.076125 1.34137 0.228375L4.45988 3.34687L7.57838 0.228375C7.88288 -0.076125 8.38688 -0.076125 8.69138 0.228375C8.99588 0.532875 8.99588 1.03687 8.69138 1.34137L5.57288 4.45988L8.69138 7.57838C8.99588 7.88288 8.99588 8.38688 8.69138 8.69138Z"
                    fill="#EA627F"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block text-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.9987 1.55503C6.32536 0.655026 5.24536 0.0683594 4.0387 0.0683594C1.99203 0.0683594 0.332031 1.73503 0.332031 3.79503C0.332031 4.58836 0.458698 5.32169 0.678698 6.00169C1.73203 9.33502 4.9787 11.3284 6.58536 11.875C6.81203 11.955 7.18536 11.955 7.41203 11.875C9.0187 11.3284 12.2654 9.33502 13.3187 6.00169C13.5387 5.32169 13.6654 4.58836 13.6654 3.79503C13.6654 1.73503 12.0054 0.0683594 9.9587 0.0683594C8.75203 0.0683594 7.67203 0.655026 6.9987 1.55503Z"
                    fill="#47DD5D"
                  />
                </svg>
              </button>
              <button className="block text-center">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69138 8.69138C8.53388 8.84888 8.33438 8.92237 8.13488 8.92237C7.93538 8.92237 7.73588 8.84888 7.57838 8.69138L4.45988 5.57288L1.34137 8.69138C1.18387 8.84888 0.984375 8.92237 0.784875 8.92237C0.585375 8.92237 0.385875 8.84888 0.228375 8.69138C-0.076125 8.38688 -0.076125 7.88288 0.228375 7.57838L3.34687 4.45988L0.228375 1.34137C-0.076125 1.03687 -0.076125 0.532875 0.228375 0.228375C0.532875 -0.076125 1.03687 -0.076125 1.34137 0.228375L4.45988 3.34687L7.57838 0.228375C7.88288 -0.076125 8.38688 -0.076125 8.69138 0.228375C8.99588 0.532875 8.99588 1.03687 8.69138 1.34137L5.57288 4.45988L8.69138 7.57838C8.99588 7.88288 8.99588 8.38688 8.69138 8.69138Z"
                    fill="#EA627F"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block text-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.9987 1.55503C6.32536 0.655026 5.24536 0.0683594 4.0387 0.0683594C1.99203 0.0683594 0.332031 1.73503 0.332031 3.79503C0.332031 4.58836 0.458698 5.32169 0.678698 6.00169C1.73203 9.33502 4.9787 11.3284 6.58536 11.875C6.81203 11.955 7.18536 11.955 7.41203 11.875C9.0187 11.3284 12.2654 9.33502 13.3187 6.00169C13.5387 5.32169 13.6654 4.58836 13.6654 3.79503C13.6654 1.73503 12.0054 0.0683594 9.9587 0.0683594C8.75203 0.0683594 7.67203 0.655026 6.9987 1.55503Z"
                    fill="#47DD5D"
                  />
                </svg>
              </button>
              <button className="block text-center">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69138 8.69138C8.53388 8.84888 8.33438 8.92237 8.13488 8.92237C7.93538 8.92237 7.73588 8.84888 7.57838 8.69138L4.45988 5.57288L1.34137 8.69138C1.18387 8.84888 0.984375 8.92237 0.784875 8.92237C0.585375 8.92237 0.385875 8.84888 0.228375 8.69138C-0.076125 8.38688 -0.076125 7.88288 0.228375 7.57838L3.34687 4.45988L0.228375 1.34137C-0.076125 1.03687 -0.076125 0.532875 0.228375 0.228375C0.532875 -0.076125 1.03687 -0.076125 1.34137 0.228375L4.45988 3.34687L7.57838 0.228375C7.88288 -0.076125 8.38688 -0.076125 8.69138 0.228375C8.99588 0.532875 8.99588 1.03687 8.69138 1.34137L5.57288 4.45988L8.69138 7.57838C8.99588 7.88288 8.99588 8.38688 8.69138 8.69138Z"
                    fill="#EA627F"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-b-gray-300">
            <div className="details flex items-center gap-2">
              <img
                src="https://picsum.photos/200/200?random=5.jpg"
                alt="person"
                className="rounded-lg w-16 h-16"
              />
              <div>
                <span className="block">Susan Jones</span>
                <small className="block">Doctor</small>
              </div>
            </div>
            <div className="action">
              <button className="block text-center">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.9987 1.55503C6.32536 0.655026 5.24536 0.0683594 4.0387 0.0683594C1.99203 0.0683594 0.332031 1.73503 0.332031 3.79503C0.332031 4.58836 0.458698 5.32169 0.678698 6.00169C1.73203 9.33502 4.9787 11.3284 6.58536 11.875C6.81203 11.955 7.18536 11.955 7.41203 11.875C9.0187 11.3284 12.2654 9.33502 13.3187 6.00169C13.5387 5.32169 13.6654 4.58836 13.6654 3.79503C13.6654 1.73503 12.0054 0.0683594 9.9587 0.0683594C8.75203 0.0683594 7.67203 0.655026 6.9987 1.55503Z"
                    fill="#47DD5D"
                  />
                </svg>
              </button>
              <button className="block text-center">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.69138 8.69138C8.53388 8.84888 8.33438 8.92237 8.13488 8.92237C7.93538 8.92237 7.73588 8.84888 7.57838 8.69138L4.45988 5.57288L1.34137 8.69138C1.18387 8.84888 0.984375 8.92237 0.784875 8.92237C0.585375 8.92237 0.385875 8.84888 0.228375 8.69138C-0.076125 8.38688 -0.076125 7.88288 0.228375 7.57838L3.34687 4.45988L0.228375 1.34137C-0.076125 1.03687 -0.076125 0.532875 0.228375 0.228375C0.532875 -0.076125 1.03687 -0.076125 1.34137 0.228375L4.45988 3.34687L7.57838 0.228375C7.88288 -0.076125 8.38688 -0.076125 8.69138 0.228375C8.99588 0.532875 8.99588 1.03687 8.69138 1.34137L5.57288 4.45988L8.69138 7.57838C8.99588 7.88288 8.99588 8.38688 8.69138 8.69138Z"
                    fill="#EA627F"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
