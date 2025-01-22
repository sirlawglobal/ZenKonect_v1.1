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
      </div>
    </div>
  );
};

export default Content;
