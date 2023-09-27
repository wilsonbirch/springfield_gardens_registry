import { useEffect, useState } from 'react';

import community_gardens from './community_gardens.json';

function Home() {
  const [search, setSearch] = useState('');
  const [gardens, setGardens] = useState(community_gardens);

  setMarkers();

  useEffect(() => {
    setGardens(
      community_gardens.filter((garden) => {
        return garden.GARDEN.toLowerCase().includes(
          search.toLowerCase(),
        );
      }),
    );
  }, [search]);

  return (
    <div className="home-container">
      <div style={{ width: '20vw' }}>
        <input
          type="text"
          placeholder="Search for Garden name here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <gmp-map
        id="marker-click-event-example"
        center="45.32248682538945,-75.69433980392594"
        zoom="11"
        map-id="springfield-gardens-registry"
      >
        {gardens.map((garden, i) => {
          return (
            <gmp-advanced-marker
              key={i}
              position={`${garden.Y},${garden.X}`}
              title={garden.GARDEN}
              data-name={garden.LEGAL_ADDR}
              data-link={garden.LINK}
            ></gmp-advanced-marker>
          );
        })}
      </gmp-map>
    </div>
  );
}

function setMarkers() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'js/advancedMarker.js';
  document.body.appendChild(script);
}

export default Home;
