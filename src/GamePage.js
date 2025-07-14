import { useParams } from "react-router-dom";

const iframeSources = {
  "ates-ve-su": "https://html5.gamedistribution.com/9e5ed2f9fa7e42bca591cae424b7428b/?gd_sdk_referrer_url=https://www.oyunskor.com/",
  "zombi-kacisi": "https://html5.gamedistribution.com/zombi-game-link",
  "park-etme": "https://html5.gamedistribution.com/parking-game-link",
  "kurt-tospik": "https://html5.gamedistribution.com/tospik-game-link",
  "basketbol": "https://html5.gamedistribution.com/basketball-game-link",
};

export default function GamePage() {
  const { slug } = useParams();
  const src = iframeSources[slug];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Oyun Yükleniyor...</h1>
      {src ? (
        <iframe
          src={src}
          title="Oyun"
          className="w-full h-[600px] border rounded"
          allowFullScreen
        />
      ) : (
        <p>Oyun bulunamadı.</p>
      )}
    </div>
  );
}
