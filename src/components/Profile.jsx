"use client";

import { useUser } from "@/context/UserContext";

const Profile = ({ onClose }) => {
  const { user } = useUser();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <h3 className="text-xl mb-2">Quiz History</h3>
        <div className="space-y-4">
          {user.progress.length > 0 ? (
            user.progress.map((result, index) => (
              <div key={index} className="p-4 border rounded">
                <p><strong>Subject:</strong> {result.subject}</p>
                <p><strong>Difficulty:</strong> {result.difficulty}</p>
                <p><strong>Score:</strong> {result.score}</p>
                <p><strong>Percentage:</strong> {result.percentage}%</p>
                <p><strong>Date:</strong> {new Date(result.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No quiz history yet.</p>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;