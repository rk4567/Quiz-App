"use client";

import { useState } from 'react';
import { FaCoins, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { usePoints } from "@/context/PointsContext";
import { useUser } from "@/context/UserContext";
import Profile from './Profile';

const Header = () => {
  const { points } = usePoints();
  const { user, logout } = useUser();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
        {/* Logo / Home Link */}
        <Link
          href="/"
          className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
        >
          Quiz App
        </Link>

        <div className="flex items-center">
          {user && (
            <>
              <button onClick={() => setShowProfile(true)} className="flex items-center mr-4">
                <FaUserCircle className="mr-2" />
                Welcome, {user.username}
              </button>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Points Display */}
        <div className="text-lg font-medium flex">
          <span>
            <FaCoins className="text-yellow-500 text-3xl mr-2" />
          </span>
          <span className="text-gray-300 mr-2">Points:</span>
          <span className="font-semibold text-blue-300">{points}</span>
        </div>
      </header>
      {showProfile && <Profile onClose={() => setShowProfile(false)} />}
    </>
  );
};

export default Header;