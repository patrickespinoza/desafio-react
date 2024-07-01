import React from 'react';

const handleLogout = () => {
  
  localStorage.removeItem('token');
  

  window.location.reload();
};

const LogoutButton = () => {
  return (
    <div>
      <button className="hover:text-[#1d4ed8] hover:underline" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default LogoutButton;
