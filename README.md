#### springfield_gardens_registry

A web based registry to promote Springfield's (Ottawa) vibrant collection of gardens.

Fictional use case for ISED IT-02 Junior developer position.

#### overview of approach

- Review instruction and dataset files
- Investigate Google Maps Platform and the different Maps SDK options (JS/HTML/WEB Components)
- Test with react and see if a map can be displayed
- Build out basic app framework for POC (router, navbar, css libraries)
- Added google maps javascript component to home route
- Added advanced marker script, convert csv data to json
- Completed filter by name

#### demo

#### tour of code

#### lessons learned

- create-react-app bloated, not shouldn't be used in 2023, a bit slower and less performant than using Vite, can also create other apps with Vite
- React npm library for Google maps: [ubilabs/google-maps-react-hooks](https://github.com/ubilabs/google-maps-react-hooks/tree/develop)
- Should have tested advanced markers as well as displaying the map to confirm that I could add my search within kms (1 deg = 110.574 km. Longitude: 1 deg = 111.320\*cos(latitude) km)

#### next steps

- [Localization](https://developers.google.com/maps/documentation/javascript/localization)
- Rebuild with npm library to see if I can add the range filtering
