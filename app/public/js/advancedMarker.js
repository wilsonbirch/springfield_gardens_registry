var advancedMarkers = document.querySelectorAll(
  'gmp-advanced-marker:not(#listening) ',
);

for (const advancedMarker of advancedMarkers) {
  customElements
    .whenDefined(advancedMarker.localName)
    .then(async () => {
      advancedMarker.setAttribute('id', 'listening');
      advancedMarker.addEventListener(
        'gmp-click',
        async () => {
          const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            `<h3 id="firstHeading" class="firstHeading">${advancedMarker.title}</h3>` +
            '<div id="bodyContent">' +
            `<p>${advancedMarker.dataset.name}</p>` +
            `<a href="${advancedMarker.dataset.link}" target="_blank">${advancedMarker.dataset.link}</a>` +
            '</div>' +
            '</div>';

          const { InfoWindow } =
            // eslint-disable-next-line no-undef
            await google.maps.importLibrary('maps');
          const infoWindow = new InfoWindow({
            content: contentString,
          });
          infoWindow.open({
            anchor: advancedMarker,
          });
        },
      );
    });
}
