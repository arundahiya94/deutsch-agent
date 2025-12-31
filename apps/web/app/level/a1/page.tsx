"use client";

import React, { useState } from "react";

// --- Mock Link/Router Components ---
const Link = ({ href, className, children, onClick }) => (
  <a href={href} className={className} onClick={onClick || ((e) => {
    // Prevent navigation for demonstration purposes if no specific onClick is provided
    e.preventDefault();
    console.log(`Navigating to: ${href}`);
  })}>
    {children}
  </a>
);

// --- Emoji Icon Definitions (Consistent 7xl size) ---
const IconGreetings = () => <span className="text-7xl">🙏</span>;
const IconNumbers = () => <span className="text-7xl">#️⃣ ⏰</span>;
const IconFamily = () => <span className="text-7xl">👨‍👨‍👧‍👦 🏠</span>;
const IconRoutine = () => <span className="text-7xl">🗓️ 💼</span>;
const IconFood = () => <span className="text-7xl">🍔 ☕</span>;
const IconBody = () => <span className="text-7xl">💪 ❤️</span>;
const IconClothes = () => <span className="text-7xl">👗 👕</span>;
const IconWeather = () => <span className="text-7xl">🌤️ ☃️</span>;
const IconTravel = () => <span className="text-7xl">✈️ 🎡</span>;
const IconDirections = () => <span className="text-7xl">⬅️ ➡️</span>;


// --- Topic Data (A1) ---

const a1Topics = [
  { number: 1, title: "Grüßen & Vorstellen", description: "Say hello, introduce yourself, and ask basic questions.", icon: <IconGreetings />, color: "bg-indigo-500", path: "greetings" },
  { number: 2, title: "Zahlen & Zeit", description: "Count, tell the time, and discuss dates and appointments.", icon: <IconNumbers />, color: "bg-pink-500", path: "numbers" },
  { number: 3, title: "Familie & Wohnen", description: "Describe family members, home, and simple rooms/furniture.", icon: <IconFamily />, color: "bg-green-500", path: "family-home" },
  { number: 4, title: "Alltag & Beruf", description: "Discuss daily routines, simple jobs, and free time activities.", icon: <IconRoutine />, color: "bg-yellow-500", path: "daily-work" },
  { number: 5, title: "Essen & Trinken", description: "Order food/drinks, express preferences, and buy groceries.", icon: <IconFood />, color: "bg-red-500", path: "food-drink" },
  { number: 6, title: "Körper & Gesundheit", description: "Name body parts, talk about health, and express feelings.", icon: <IconBody />, color: "bg-purple-500", path: "body-health" },
  { number: 7, title: "Kleidung & Farben", description: "Describe clothing, colors, and express basic opinions on style.", icon: <IconClothes />, color: "bg-teal-500", path: "clothes-colors" },
  { number: 8, title: "Wetter & Jahreszeiten", description: "Discuss the weather, seasons, and make simple plans.", icon: <IconWeather />, color: "bg-cyan-500", path: "weather-seasons" },
  { number: 9, title: "Ferien & Urlaub", description: "Talk about holidays, travel plans, and where you come from.", icon: <IconTravel />, color: "bg-orange-500", path: "holidays-travel" },
  { number: 10, title: "Wegbeschreibung", description: "Ask for and give simple directions to a location.", icon: <IconDirections />, color: "bg-lime-500", path: "directions" },
];


// --- Sub-Components ---
const ReadHubButton = ({ level, navigate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Navigating to: /level/${level.toLowerCase()}/read-hub`);
    navigate('read-hub');
  };
  return (
    <Link
      href={`/level/${level.toLowerCase()}/read-hub`}
      className="flex flex-col items-center justify-center p-6 rounded-xl text-center shadow-lg transition hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 bg-red-600 text-white min-h-[100px] w-full"
      onClick={handleClick}
    >
      <span className="text-4xl">📚</span>
      <span className="text-xl font-bold mt-2">Reading Hub</span>
      <p className="text-sm opacity-90 mt-1">Stories, Articles & Texts for {level}</p>
    </Link>
  );
};

const TopicCard = ({ number, title, icon, color, levelPath, isSelected, onClick }) => {
  
  const actions = [
    { name: "Learn", route: `${levelPath}/learn`, color: "bg-indigo-600", icon: "🧠" },
    { name: "Practice", route: `${levelPath}/practice`, color: "bg-teal-600", icon: "📝" },
    { name: "YouTube", route: `${levelPath}/youtube`, color: "bg-red-600", icon: "📺" }, 
  ];

  const baseClasses = "rounded-xl shadow-lg transition duration-300 overflow-hidden border-4 cursor-pointer flex-shrink-0 w-64 snap-center"; 
  const selectedClasses = "border-indigo-600 shadow-2xl scale-[1.05]";
  const unselectedClasses = "border-white hover:shadow-xl";

  return (
    <div 
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
      onClick={onClick}
    >
      
      {/* Main Card Header (Clickable Area) */}
      <div 
        className={`p-4 ${color} text-white transition duration-300 ease-in-out`}
        style={{
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
      >
        <div className="text-center">
            <span className="text-3xl font-extrabold opacity-70 block mb-1">
                {number}.
            </span>
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="mt-1 text-center">
            {icon}
        </div>
      </div>

      {/* Action Bar (Only visible/relevant if selected) */}
      <div 
        className={`p-4 transition-all duration-300 ease-in-out bg-gray-50 ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="grid grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.route}
              className={`
                flex flex-col items-center justify-center p-3 rounded-lg text-center
                ${action.color} text-white shadow-md transition hover:scale-[1.03] 
                hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50
              `}
              style={{ minHeight: '70px' }}
            >
              <span className={`text-xl`}>{action.icon}</span>
              <span className="text-xs font-semibold mt-1">{action.name}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
             <span className="font-semibold">Selected Topic: {title}</span>
        </div>
      </div>
    </div>
  );
};


// ----------------------------------------------------------------------
// --- A1TopicsPage Content Component ---
// ----------------------------------------------------------------------

const A1TopicsPageContent = ({ navigate }) => {
  const level = "A1";
  const levelDescription = "You understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.";

  const [selectedTopicNumber, setSelectedTopicNumber] = useState(null);

  const handleTopicClick = (number) => {
    setSelectedTopicNumber(prevNumber => prevNumber === number ? null : number);
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-6xl">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          Deutsch Agent: <span className="text-indigo-600">{level} Topics</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg text-center mb-8">
          {levelDescription}
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Select a Topic for Activities:
        </h2>

        {/* 1. Horizontal Topic Scroll Container */}
        <div 
            className="flex space-x-6 pb-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {a1Topics.map((topic) => (
              <TopicCard
                key={topic.number}
                number={topic.number}
                title={topic.title}
                icon={topic.icon}
                color={topic.color}
                levelPath={`/level/${level.toLowerCase()}/${topic.path}`}
                isSelected={selectedTopicNumber === topic.number}
                onClick={() => handleTopicClick(topic.number)}
              />
            ))}
        </div>
        
        {/* Helper text for scrolling */}
        <p className="text-center text-sm text-gray-500 mt-4 mb-12">
            ⬅️ Scroll horizontally to see all topics ➡️
        </p>
        
        {/* 2. Reading Hub Button Section (MOVED BELOW TOPICS) */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <ReadHubButton level={level} navigate={navigate} />
        </div>

      </div>

      <footer className="mt-20 text-sm text-gray-400">
        © {new Date().getFullYear()} DeutschAgent
      </footer>
    </main>
  );
};

// ----------------------------------------------------------------------
// --- UPDATED Component: MockPdfViewer ---
// ----------------------------------------------------------------------

const MockPdfViewer = ({ navigate, book }) => {
    // Note: In a real app, 'book.fileUrl' would point to a publicly accessible PDF link.
    // Here, we use a public domain PDF for the demonstration of the viewer component.
    const displayUrl = book.isMocked ? 
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" : // Generic public PDF
        book.fileUrl; // Simulated uploaded file path

    return (
        <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-gray-100">
            <div className="w-full max-w-6xl">
                <button 
                    onClick={() => navigate('read-hub')}
                    className="mb-8 text-red-600 hover:text-red-800 flex items-center font-semibold"
                >
                    <span className="text-2xl mr-2">⬅️</span> Back to Reading Hub
                </button>

                <div className="p-4 border-4 border-indigo-600 rounded-xl shadow-2xl bg-white">
                    <h1 className="text-3xl font-extrabold text-indigo-700 mb-4 text-center">
                        📖 Reading: {book.title}
                    </h1>
                    
                    <div className="relative w-full" style={{ height: '85vh' }}>
                        <p className="text-sm text-gray-500 italic mb-2 text-center">
                            Loading PDF from: {displayUrl}
                            {book.isMocked && <span className="text-red-500 font-semibold"> (Simulated PDF for demonstration)</span>}
                        </p>
                        
                        {/* The key change: Using <iframe> for native PDF embedding */}
                        <iframe 
                            src={displayUrl} 
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title={`PDF Viewer for ${book.title}`}
                        >
                            <p className="p-4 bg-yellow-100 text-yellow-800">Your browser does not support inline PDFs. You can download the file here.</p>
                        </iframe>
                    </div>
                </div>
            </div>
            <footer className="mt-20 text-sm text-gray-400">
                © {new Date().getFullYear()} DeutschAgent
            </footer>
        </main>
    );
};

// ----------------------------------------------------------------------
// --- ReadingHubPage (The Dynamic Upload View) ---
// ----------------------------------------------------------------------

const ReadingHubPage = ({ navigate, books, setBooks }) => {
    const [file, setFile] = useState(null); 
    const [uploadStatus, setUploadStatus] = useState('');

    const getNextId = () => books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1;

    const createTitleFromFilename = (filename) => {
        const baseName = filename.replace(/\.(pdf|txt|epub)$/i, '');
        const formattedTitle = baseName.replace(/[-_]/g, ' ').split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return formattedTitle;
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (!/\.(pdf|txt|epub)$/i.test(selectedFile.name)) {
                setUploadStatus('⚠️ Only PDF, TXT, or EPUB files are supported.');
                setFile(null);
            } else {
                setFile(selectedFile);
                setUploadStatus(`File ready: ${selectedFile.name}`);
            }
        } else {
            setFile(null);
            setUploadStatus('');
        }
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        
        if (!file) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        const title = createTitleFromFilename(file.name);
        const description = `Uploaded text from file: ${file.name}`;
        const newId = getNextId();
        
        const newBook = {
            id: newId,
            title: title,
            description: description,
            // We use the mock path here, but the viewer will load the generic PDF for display
            fileUrl: `/mock-upload/${newId}-${file.name}`, 
            uploadedAt: new Date().toLocaleString(),
            isMocked: true, // Flag to indicate using the generic URL for viewing
        };

        setBooks(prevBooks => [...prevBooks, newBook]);
        setFile(null); 
        setUploadStatus(`"${newBook.title}" uploaded successfully!`);

        e.target.reset();

        setTimeout(() => {
            setUploadStatus('');
        }, 3000);
    };
    
    const handleViewBook = (book) => {
        navigate('view-book', book);
    };

    return (
        <main className="flex min-h-screen flex-col items-center px-4 py-16 bg-red-50">
            <div className="w-full max-w-4xl">
                <button 
                    onClick={() => navigate('topics')}
                    className="mb-8 text-indigo-600 hover:text-indigo-800 flex items-center font-semibold"
                >
                    <span className="text-2xl mr-2">⬅️</span> Back to A1 Topics
                </button>

                <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
                    📚 A1 Reading Hub
                </h1>
                <p className="text-gray-600 text-lg text-center mb-12">
                    Upload your own **PDF/TXT/EPUB** files to create your personal reading library.
                </p>

                {/* --- Upload Form (File-based) --- */}
                <div className="bg-white p-6 rounded-xl shadow-xl mb-12 border-l-4 border-red-600">
                    <h2 className="text-2xl font-bold mb-4 text-red-600">Upload a Reading Text</h2>
                    <form onSubmit={handleFileUpload} className="space-y-4">
                        <div>
                            <label htmlFor="book-file" className="block text-sm font-medium text-gray-700 mb-2">Select File (PDF, TXT, EPUB)</label>
                            <input
                                id="book-file"
                                type="file"
                                accept=".pdf, .txt, .epub"
                                onChange={handleFileChange}
                                className="block w-full text-sm text-gray-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-indigo-50 file:text-indigo-700
                                    hover:file:bg-indigo-100"
                            />
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <button
                                type="submit"
                                disabled={!file}
                                className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md transition duration-150 ${file ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'}`}
                            >
                                Upload Text (Simulated)
                            </button>
                            {uploadStatus && (
                                <p className={`text-sm font-semibold ${uploadStatus.includes('successfully') ? 'text-green-600' : (uploadStatus.includes('ready') ? 'text-indigo-600' : 'text-red-600')}`}>
                                    {uploadStatus}
                                </p>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            *Note: The actual file cannot be stored locally. Viewing any uploaded book will display a **generic PDF** for demonstration purposes.
                        </p>
                    </form>
                </div>
                
                {/* --- Dynamic Book List --- */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Uploaded Books ({books.length})</h2>
                {books.length === 0 ? (
                    <p className="text-gray-500 italic p-6 bg-white rounded-xl shadow">No books have been uploaded yet. Upload your first text using the form above!</p>
                ) : (
                    <div className="space-y-4">
                        {books.slice().reverse().map((book) => (
                            <div key={book.id} className="p-4 bg-white rounded-lg shadow flex justify-between items-center hover:shadow-lg transition">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                                    <p className="text-sm text-gray-600">{book.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">Uploaded: {book.uploadedAt}</p>
                                </div>
                                <button 
                                    onClick={() => handleViewBook(book)}
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition font-semibold"
                                >
                                    Read Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};


// ----------------------------------------------------------------------
// --- Main Export Component (Mock Router/App Wrapper) ---
// ----------------------------------------------------------------------

const AppWrapper = () => {
    // Mock Router State
    const [currentPage, setCurrentPage] = useState('topics'); 
    const [currentBook, setCurrentBook] = useState(null); 
    
    // Global State for Dynamically Uploaded Books (Empty by default)
    const [uploadedBooks, setUploadedBooks] = useState([]);

    const navigate = (page, data = null) => {
        setCurrentPage(page);
        setCurrentBook(data); 
    };

    if (currentPage === 'read-hub') {
        return <ReadingHubPage navigate={navigate} books={uploadedBooks} setBooks={setUploadedBooks} />;
    }
    
    if (currentPage === 'view-book' && currentBook) {
        return <MockPdfViewer navigate={navigate} book={currentBook} />;
    }

    // Default to the A1 Topics Page
    return <A1TopicsPageContent navigate={navigate} />;
};

// Export the AppWrapper as the main page component
export default AppWrapper;