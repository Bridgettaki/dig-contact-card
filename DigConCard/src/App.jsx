import React from 'react';
import ContactCard from './ContactCard'

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 flex items-center justify-center p-6">
      <ContactCard
        name="Bridget Sibanda"
        role="Risk Taker"
        image=""
        email="takalanibridget@icloud.com"
        phone="+27 69 187 4631"
        />
    </div>
  );
}

export default App;
