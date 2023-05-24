// use mapbox mercator projection along with access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    bounds: [64.81236, 3.14440, 98.33055, 38.38267],
    zoom: 2,
});
// add navigation control
map.addControl(new mapboxgl.NavigationControl());

// fit to bounds made using bounding box from location helper tool
document.getElementById('event-1').addEventListener('click', () => {
    map.fitBounds([
        [87.77743, 21.86707], // southwestern corner of the bounds
        [88.88645, 23.30586], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-2').addEventListener('click', () => {
    map.fitBounds([
        [74.59133, 32.37924], // southwestern corner of the bounds
        [75.23094, 33.05372], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-3').addEventListener('click', () => {
    map.fitBounds([
        [73.58270, 29.91547], // southwestern corner of the bounds
        [75.48017, 32.28193], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-4').addEventListener('click', () => {
    map.fitBounds([
        [77.83586, 16.74503], // southwestern corner of the bounds
        [78.99003, 17.97918], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-5').addEventListener('click', () => {
    map.fitBounds([
        [69.39322, 20.97194], // southwestern corner of the bounds
        [71.46353, 23.16334], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-6').addEventListener('click', () => {
    map.fitBounds([
        [72.90014, 19.04984], // southwestern corner of the bounds
        [73.23814, 19.48157], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-7').addEventListener('click', () => {
    map.fitBounds([
        [91.85854, 25.46508], // southwestern corner of the bounds
        [93.32633, 27.12907], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-8').addEventListener('click', () => {
    map.fitBounds([
        [77.37181, 28.64352], // southwestern corner of the bounds
        [78.09655, 29.29229], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-9').addEventListener('click', () => {
    map.fitBounds([
        [86.41598, 24.57142], // southwestern corner of the bounds
        [87.54168, 25.89877], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-10').addEventListener('click', () => {
    map.fitBounds([
        [72.68198, 18.72743], // southwestern corner of the bounds
        [73.16457, 19.41244], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-11').addEventListener('click', () => {
    map.fitBounds([
        [72.13010, 22.16499], // southwestern corner of the bounds
        [74.05375, 23.80037], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-12').addEventListener('click', () => {
    map.fitBounds([
        [77.44465, 29.14385], // southwestern corner of the bounds
        [78.05342, 29.73627], // northeastern corner of the bounds
    ]);
});

document.getElementById('event-13').addEventListener('click', () => {
    map.fitBounds([
        [77.00250, 28.50617], // southwestern corner of the bounds
        [77.38371, 28.83168], // northeastern corner of the bounds
    ]);
});
// create the popup
const popup1 = new mapboxgl.Popup({ color: '#F97D09', offset: 20 }).setText(
    'The Calcutta Riots of 1946, also known as the "Great Calcutta Killing," was a four-day Hindu-Muslim conflict in Bengal, India, resulting in an estimated 5,000 to 10,000 deaths and around 15,000 injuries from August 16 to 19, 1946. The Calcutta Riots are notable for being the deadliest episode in recent history. Different interpretations and perspectives on the events have been presented by various parties, including Britain, India, Pakistan, and Bangladesh.'
);

// create the popup
const popup2 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Jammu along with resource links'
);

// create the popup
const popup3 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about partition along with resource links'
);

// create the popup
const popup4 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about hyderabad along with resource links'
);

// create the popup
const popup5 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Gujarat along with resource links'
);

// create the popup
const popup6 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Bhiwandi along with resource links'
);

// create the popup
const popup7 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Nellie along with resource links'
);

// create the popup
const popup8 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Hashimapura along with resource links'
);

// create the popup
const popup9 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Bhagalpur along with resource links'
);

// create the popup
const popup10 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Bombay along with resource links'
);

// create the popup
const popup11 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Gujarat along with resource links'
);

// create the popup
const popup12 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Muzzafarnagar along with resource links'
);

// create the popup
const popup13 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Lorem Ipsum about Delhi along with resource links'
);

const marker1 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([88.35680, 22.57202])
    .setPopup(popup1)
    .addTo(map);

const marker2 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([74.85825, 32.72661])
    .setPopup(popup2)
    .addTo(map);

const marker3 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([74.45238, 31.39014])
    .setPopup(popup3)
    .addTo(map);

const marker4 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([78.47428, 17.36328])
    .setPopup(popup4)
    .addTo(map);

const marker5 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([70.17362, 22.09601])
    .setPopup(popup5)
    .addTo(map);

const marker6 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([73.05900, 19.30593])
    .setPopup(popup6)
    .addTo(map);

const marker7 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([92.69029, 26.33904])
    .setPopup(popup7)
    .addTo(map);

const marker8 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([77.71139, 28.99720])
    .setPopup(popup8)
    .addTo(map);

const marker9 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([86.98272, 25.25360])
    .setPopup(popup9)
    .addTo(map);

const marker10 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([72.86978, 19.07013])
    .setPopup(popup10)
    .addTo(map);

const marker11 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([72.60843, 23.01642])
    .setPopup(popup11)
    .addTo(map);

const marker12 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([77.70150, 29.46909])
    .setPopup(popup12)
    .addTo(map);

const marker13 = new mapboxgl.Marker({ color: '#00A650' })
    .setLngLat([77.21441, 28.63688])
    .setPopup(popup13)
    .addTo(map);
