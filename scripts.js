// use mapbox projection along with access token
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
// create popups for each button
const popup1 = new mapboxgl.Popup({ color: '#F97D09', offset: 20 }).setText(
    'The Calcutta Riots of 1946, also known as the "Great Calcutta Killing," was a four-day Hindu-Muslim conflict in Bengal, India, resulting in an estimated 5,000 to 10,000 deaths and around 15,000 injuries from August 16 to 19, 1946. The Calcutta Riots are notable for being the deadliest episode in recent history. Different interpretations and perspectives on the events have been presented by various parties, including Britain, India, Pakistan, and Bangladesh.'
);


const popup2 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'Following the Partition of India, in the Jammu region of the princely state of Jammu and Kashmir, a series of massacres occurred during October-November 1947. Many Muslims were killed, and others were forcibly displaced to West Punjab.The Rashtriya Swayamsevak Sangh (A group of extremist Hindus) activists played a significant role in planning and executing the riots. It is estimated that between 20,000 to 100,000 Muslims were massacred during this period.'
);


const popup3 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The Partition of India in 1947 caused the displacement of numerous families, leading to widespread violence, including massacres, looting, and assaults against women and children. While accurate figures are unavailable, it is estimated that up to 20 million people were affected, and the death toll ranges from 200,000 to 1 million.'
);


const popup4 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The Hyderabad Massacres of 1948 were large-scale killings that occurred following the Indian annexation of Hyderabad (Operation Polo). Hindu militias, with assistance from the Indian Army, were responsible for the violence, resulting in the deaths of over 200,000 civilians between September and October 1948.'
);


const popup5 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The 1969 Gujarat riots were a significant episode of communal violence in Gujarat, India, during September-October 1969. Massacres, arson, and looting occurred on a large scale. Officially, 660 people were killed, 1,074 injured, and over 48,000 suffered property losses. Unofficially, the death toll may have been higher, with the majority of victims being from the Muslim community. Property worth 42 million rupees was destroyed, with Muslims suffering 32 million worth of the damage.'
);


const popup6 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The 1970 Bhiwandi riots were religious clashes between Hindus and Muslims in Bhiwandi, Jalgaon, and Mahad in India. Over 250 people died, with the majority being Muslims. The Justice Madon commission criticized the biased actions of the police and the role played by the Hindu-nationalist party Shiv Sena in the violence.'
);


const popup7 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'On February 18, 1983, a large mob in Nellie, Assam, brutally slaughtered over 2,000 Bengal-origin Muslims, making it one of the deadliest anti-minority pogroms in modern India. Unofficial accounts suggest the death toll may have exceeded 7,000.'
);


const popup8 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'During the 1987 Meerut communal riots in Uttar Pradesh, India, the Hashimpura massacre occurred, where 50 Muslim men were killed by the police. It was reported that 19 personnel of the Provincial Armed Constabulary rounded up 42 Muslim youths, took them to the outskirts of the city, shot them, and dumped their bodies in an irrigation canal. '
);


const popup9 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The Bhagalpur violence of 1989 took place between Hindus and Muslims in the Bhagalpur district of Bihar, India. The violence started on 24 October 1989 due to issues surrounding the Babri Masjid, and the violent incidents continued for 2 months, affecting the Bhagalpur city and 250 villages around it. Over 1,000 people were killed (around 900 of which were Muslims), and another 50,000 were displaced as a result of the violence'
);


const popup10 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The Bombay riots in December 1992 and January 1993 resulted in an estimated death toll of around 900 people. The riots were triggered by large-scale protests by Muslims in response to the demolition of the Babri Masjid by Hindu Karsevaks in Ayodhya, as well as tensions related to the Ram Temple issue.'
);


const popup11 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The 2002 Gujarat riots were a three-day period of inter-communal violence in Gujarat, India. The violence resulted in 1,044 deaths, with 790 Muslims and 254 Hindus among the victims. Many brutal killings and rapes were reported on as well as widespread looting and destruction of property. Government officials, including Chief Minister Narendra Modi, were accused of condoning the violence and targeting Muslim-owned properties.'
);


const popup12 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The clashes between Hindu and Muslim communities in Muzaffarnagar district, Uttar Pradesh, India, in August-September 2013 resulted in at least 62 deaths, with 42 Muslims and 20 Hindus among the victims. The violence also injured 93 people and displaced over 50,000 individuals. The Supreme Court of India held the Samajwadi Party-led government responsible for negligence in preventing the violence and ordered immediate arrests of all accused, regardless of their political affiliation.'
);


const popup13 = new mapboxgl.Popup({ color: '#F97D09', offset: 50 }).setText(
    'The 2020 Delhi riots, also known as the North East Delhi riots, were a series of violent incidents in North East Delhi that started on 23 February 2020. The riots were primarily instigated by Hindu mobs targeting Muslims, resulting in the deaths of 53 individuals. The majority of the victims, about two-thirds, were Muslims who were subjected to shootings, multiple attacks, and arson.'
);
// create clickable markers for each popup
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
