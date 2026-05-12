import { FaLinkedin, FaUserPlus } from 'react-icons/fa';

function App() {

  const {
    VITE_PROFILE_NAME,
    VITE_PROFILE_FIRST_NAME,
    VITE_PROFILE_LAST_NAME,
    VITE_PROFILE_TITLE,
    VITE_PROFILE_ORG,
    VITE_PROFILE_EMAIL,
    VITE_PROFILE_PHONE,
    VITE_PROFILE_LINKEDIN_URL,
    VITE_PROFILE_IMAGE_URL,
    VITE_BG_COLOR,
  } = import.meta.env;
  
  const handleSaveContact = () => {

    const vcardLines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `N:${VITE_PROFILE_LAST_NAME};${VITE_PROFILE_FIRST_NAME};;;`,
      `FN:${VITE_PROFILE_NAME}`,
      `ORG:${VITE_PROFILE_ORG}`,
      `TITLE:${VITE_PROFILE_TITLE}`,
      `EMAIL;type=INTERNET;type=WORK:${VITE_PROFILE_EMAIL}`,
      `TEL;type=CELL:${VITE_PROFILE_PHONE}`,
      `URL:${VITE_PROFILE_LINKEDIN_URL}`,
      "END:VCARD"
    ];
    
    const vcardString = vcardLines.join("\r\n");

    const blob = new Blob([vcardString], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    
    link.setAttribute("download", `${VITE_PROFILE_FIRST_NAME}.vcf`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => window.URL.revokeObjectURL(url), 100);
  };

  return (
    <div style={{ backgroundColor: VITE_BG_COLOR || '#f8fafc' }}className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 text-center">
        
        {/* Profile Image */}
        <div className="mx-auto w-32 h-32 mb-5 rounded-full overflow-hidden border-4 border-slate-100 shadow-sm">
          <img 
            src={VITE_PROFILE_IMAGE_URL} 
            alt={VITE_PROFILE_NAME} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl font-bold text-slate-800 mb-1">{VITE_PROFILE_NAME}</h1>
        <p className="text-slate-500 font-medium mb-8">{VITE_PROFILE_TITLE}</p>

        {/* Buttons List */}
        <div className="flex flex-col gap-4">
          
          <button
            onClick={handleSaveContact}
            className="flex items-center justify-center gap-3 w-full py-4 px-6 text-white rounded-2xl transition-all duration-200 transform active:scale-95 hover:scale-105 shadow-md bg-slate-800 hover:bg-slate-900 cursor-pointer"
          >
            <FaUserPlus className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-wide">Save to Contacts</span>
          </button>

          <a
            href={VITE_PROFILE_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 px-6 text-white rounded-2xl transition-all duration-200 transform active:scale-95 hover:scale-105 shadow-md bg-blue-600 hover:bg-blue-700"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="font-semibold text-lg tracking-wide">LinkedIn Profile</span>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;