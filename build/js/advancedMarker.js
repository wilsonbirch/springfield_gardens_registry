const advancedMarkers = document.querySelectorAll(
  'gmp-advanced-marker',
);

for (const advancedMarker of advancedMarkers) {
  customElements
    .whenDefined(advancedMarker.localName)
    .then(async () => {
      advancedMarker.addEventListener(
        'gmp-click',
        async () => {
          const { InfoWindow } =
            // eslint-disable-next-line no-undef
            await google.maps.importLibrary('maps');
          const infoWindow = new InfoWindow({
            content: advancedMarker.title,
          });
          infoWindow.open({
            anchor: advancedMarker,
          });
        },
      );
    });
}
