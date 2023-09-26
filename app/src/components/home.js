import { useEffect } from 'react';

import community_gardens from './community_gardens.json';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'js/advancedMarker.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="home-container">
      <gmp-map
        id="marker-click-event-example"
        center="45.32248682538945,-75.69433980392594"
        zoom="11"
        map-id="springfield-gardens-registry"
      >
        {community_gardens.map((garden, i) => {
          return (
            <gmp-advanced-marker
              key={i}
              position={`${garden.Y},${garden.X}`}
              title={garden.GARDEN}
            ></gmp-advanced-marker>
          );
        })}
      </gmp-map>
    </div>
  );
}
export default Home;
