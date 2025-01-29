import React from 'react';
import { Home, Heart, Users, MessageSquare, Settings, HelpCircle, LogOut } from 'lucide-react';
import dashImg from "../assets/dashImg.png";
import slideImg from "../assets/slideImg.png";
import likeImg from "../assets/likeImg.png";
import chatReq from "../assets/chatReq.png";
import advertImg from "../assets/advertImg.png";

export default function DatingApp() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col items-center space-x-3">
            <img 
              src={dashImg}
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
            <div className='text-center'>
              <p className="font-semibold">Haley, 25</p>
              <a href="#">Edit Profile</a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-3 text-pink-500 bg-pink-50">
            <Home className="mr-3" size={24} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <Heart className="mr-3" size={24} />
            <span>Matches</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <Users className="mr-3" size={24} />
            <span>People Nearby</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <MessageSquare className="mr-3" size={24} />
            <span>Chats</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <Settings className="mr-3" size={24} />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <HelpCircle className="mr-3" size={24} />
            <span>Help Center</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500">
            <LogOut className="mr-3" size={24} />
            <span>Log Out</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">People Nearby</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={`slideImg ${i}`}
                  alt={`Person ${i}`}
                  className="w-56 h-60 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow h-full">
            <h2 className="text-xl font-semibold p-4 border-b">Recent Activities</h2>
            <div className="overflow-y-auto" style={{ height: "calc(100vh - 300px)" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center space-x-3 p-4 hover:bg-gray-50 border-b">
                  <img
                    src={slideImg}
                    alt={`Activity ${i}`}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">Jessica</span> liked your photo
                    </p>
                    <p className="text-xs text-gray-500">20m ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Swipe Match and Advertisement */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="mx-auto">
                <h3 className="text-xl font-semibold mb-2">Swipe To Match With People</h3>
                <p className="text-gray-600 mb-4">
                  Swipe to match with like-minded people and discover new connections!
                </p>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
                  Start Swiping
                </button>
              </div>
            </div>

            {/* Advertisement */}
            <div className="bg-white rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">ADVERTISE WITH US!</h3>
              <div className="bg-gray-100 p-4 rounded">
                <img
                  src={advertImg}
                  alt="Advertisement"
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Column 3 - You May Like and Chat Requests */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">You May Like</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <img
                        src={likeImg}
                        alt={`Suggestion ${i}`}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="font-medium">Samuel Rodriguez</span>
                    </div>
                    <button className="text-pink-500 hover:text-pink-600">
                      <Heart size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Requests */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Chat Requests</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <div className="flex items-center space-x-3">
                      <img
                        src={chatReq}
                        alt={`Request ${i}`}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Samuel Rodriguez</p>
                        <p className="text-xs text-gray-500">2 min ago</p>
                      </div>
                    </div>
                    <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      Accept
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
