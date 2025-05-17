import React, {useState} from 'react';

const ContactCard = ({ name, role, image, email, phone}) =>{
    const[showDetails, setShowDetails] = useState(false);

    return(
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl border-gray-200">
        <div className="flex flex-col items-center p-6">
        <img 
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md" 
        src={image} 
        alt={name}
        />
    
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-500 text-sm">{role}</p>

            <button onClick={() => setShowDetails(!showDetails)}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-indigo-600 focus:outine-none transition-all duration-300">
                {showDetails? 'Hide Details':'Show Details'}
            </button>

            {showDetails && (
                <div className="mt-6 w-full text-sm text-gray-700 animate-fade-in">
                    <div className="mt-2">
                        <span className="font-semibold">Email:</span>{''}
                        <a href={'mailto:${email}'} className="text-blue-600 underline">{email}</a>
                        </div>
                        <div className="mt-2">
                            <span className="font-semibold">Phone:</span>{''}
                            <a href={'tel:${phone}'} className="text-blue-600 underline">{phone}</a>
                </div>
                </div>
            )}
        </div>
    </div>

    );
};

export default ContactCard;