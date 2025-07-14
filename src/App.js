import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GamePage from "./GamePage";

function App() {
  const games = [
    { name: "Ateş ve Su", slug: "ates-ve-su", description: "2 kişilik klasik macera oyunu." },
    { name: "Zombi Kaçışı", slug: "zombi-kacisi", description: "Engellerden kaç, zombilerden kurtul!" },
    { name: "Park Etme Ustası", slug: "park-etme", description: "Dikkatlice arabanı park et." },
    { name: "Koş Tospik Koş", slug: "kurt-tospik", description: "Komik ve eğlenceli refleks oyunu." },
    { name: "Basketbol Efsanesi", slug: "basketbol", description: "Serbest atış becerilerini test et!" },
  ];

  return (
    <Router>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">🎮 iyiOyunOyna.com</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {games.map((game) => (
                  <Link
                    to={`/oyun/${game.slug}`}
                    key={game.slug}
                    className="border p-4 rounded shadow hover:bg-gray-100"
                  >
                    <h2 className="text-xl font-semibold">{game.name}</h2>
                    <p className="text-sm text-gray-600">{game.description}</p>
                  </Link>
                ))}
              </div>
            }
          />
          <Route path="/oyun/:slug" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
