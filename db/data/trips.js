//* the reccomendations field will be part of the model schema as it will be an array of comment schemas. (reference to dinoboard models/dinosaurs & db/data/dinosaurs)

module.exports = [
  {
    name: 'Ruta 40, Argentina',
    startingPointCity: 'Punta-Loyola',
    startingPointState: '',
    startingPointCountry: 'AR',
    endPointCity: 'Pichanal',
    endPointState: '',
    endPointCountry: 'AR',
    distance: '5.194 km / 3,227m',
    routeImage: 'https://latam.beyondba.com/wp-content/uploads/2020/03/Ruta-40-Map-428x1024.jpg',
    image: 'https://blogpatagonia.australis.com/wp-content/uploads/2016/11/iStock-511670082.jpg',
    tags: [
      'mountain',
      'country side',
      'desert',
      'fast',
      'offroad'
    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Ruta 40 is the longest road in Argentina. In fact it’s one of the longest roads anywhere and the busiest in South America. It winds from Cabo Vírgenes (Santa Cruz) up to Quiaca (Jujuy) on the border with Bolivia. It takes in some stunning scenery along the route because this legendary road runs parallel to the Andes with sections passing by – or straight through – some 20 national parks. Connecting the country from south to north, on  Ruta 40 there are some major attractions  such as the Strait of Magellan, Perito Moreno Glacier, Lakes Region, the Wine Trail and Talampaya National Park',
    timeOfYear: 'All-year / spring and autumn best',
    highlights: ['Salinas Grandes Salt Flats', 'Cusi Cusi', 'Ruta de los Sieta Lagos'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Chicago to LA - Route 66',

    startingPointCity: 'Chicago',
    startingPointState: 'IL',
    startingPointCountry: 'US',
    endPointCity: 'Albuquerque',
    endPointState: 'NM',
    endPointCountry: 'US',
    distance: '1115km / 693m',
    routeImage: 'https://www.tripsavvy.com/thmb/Fi12CRuXjxKzoWMNQKVnckDnn_k=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RoadTrip_Route66_NPS-566b0fbb3df78ce1615e75f6.jpg',
    image: 'https://img.redbull.com/images/c_fill,g_auto,w_860,h_573/q_auto,f_auto/redbullcom/2015/02/10/1331704370512_3/discover-the-world-on-your-bike-route-66',
    tags: [
      'city life',
      'cities',
      'desert',
      'fast',
      'hotel'
    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'The romance of Route 66 continues to captivate people around the world. Running between Chicago and Los Angeles, “over two thousand miles all the way” in the words of the popular R&B anthem, this legendary old road passes through the heart of the United States on a diagonal trip that takes in some of the country’s most archetypal roadside scenes. If you’re looking for great displays of neon signs, rusty middle-of-nowhere truck stops, or kitschy Americana, do as the song says and “get your kicks on Route 66.”',
    timeOfYear: 'All-year / spring and autumn best',
    highlights: ['Grand Canyon', 'Land of Lincoln', 'Vegas detour'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Ho Chi Minh Trail, Vietnam',
    startingPointCity: 'Hanoi',
    startingPointState: '',
    startingPointCountry: 'VN',
    endPointCity: 'Phuket',
    endPointState: '',
    endPointCountry: 'TH',
    distance: '1870 km / 1162m',
    routeImage: 'https://cuongs-motorbike-adventure.com/wp-content/uploads/2018/01/Ho-Chi-Minh-Trail-motorbike-tour-map.jpg',
    image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/Hai-Van-Pass-Da-Nang-Vietnam.jpg',
    tags: [
      'mountain',
      'country side',
      'desert',
      'solo',
      'panoramic view'
    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Weaving a course between coast and highlands, The Classic route is equal parts beach and mountain. Quiet, stunning coastal roads in the south and central provinces yield to a mighty landscape of limestone karsts on the Ho Chi Minh Road in the north-central region. Popular towns and sights, such as Mui Ne, Dalat, Nha Trang, Hoi An, the Hai Van Pass, Phong Nha Caves and Ninh Binh are all covered; but so too are off the beaten path areas, such as the beaches around Quy Nhon, the coastal back-roads north of Hue, and the Western Ho Chi Minh Road. It’s the perfect balance of must-see sights and hidden gems. Zoom in on the map below and click the map symbols for links to my guides to specific locations.',
    timeOfYear: 'spring is best',
    highlights: ['Ho Chi Minh', 'Mui Ne', 'Hanoi', 'Phong Nha Caves', 'Dalat'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'London to Le Mans',
    startingPointCity: 'London',
    startingPointState: '',
    startingPointCountry: 'GB',
    endPointCity: 'Paris',
    endPointState: '',
    endPointCountry: 'FR',
    distance: '587km / 365m',
    routeImage: 'https://www.distantias.com/maps/distance-from-london-great_britain-to-paris-france.png',
    image: 'https://drive-my.com/media/k2/items/cache/dfa5bd35ee353a18219b16bd4f1ed9c3_XL.jpg',
    tags: [
      'hills',
      'country side',
      'motor sport',
      'architecture',
      'flat road'
    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'The drive to Le Mans has become something of a pilgrimage for British petrolheads, with thousands making the trip from the UK to northern France to soak up the thrills, spills and atmosphere of the world\'s most famous 24-hour race.',
    timeOfYear: 'currently postponed until 19-20 September :(',
    highlights: ['Le Mans', 'Mad Friday'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'The Great Legends Tour, Canada',
    startingPointCity: 'Ottawa',
    startingPointState: 'ON',
    startingPointCountry: 'CA',
    endPointCity: 'Vancouver',
    endPointState: 'BC',
    endPointCountry: 'CA',
    distance: '1350 km / 839m',
    routeImage: 'https://www.northeasternontario.com/wp-content/uploads/2015/11/the-great-legends-route1.jpg',
    image: 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fe805c634-f9c6-11e6-bc87-4df02d30656d.jpg?crop=1500%2C844%2C0%2C78&resize=1180',
    tags: [
      'mountain',
      'sea',
      'canyon',
      'camping'
    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Once in a while you just need to ride. You need to answer the calling…to clear your head, feel small again, and regain appreciation for your life on your terms. When the Great Legends of the North call, you answer that call with a growl of the throttle. Distances are great but so is the peaceful solitude. The road, seemingly endless road, touches the sky. You will find solace and compassion from the mythical giant legends: the Great Polar Bear, the Great Bison and the Great Fish, as you meander along your chosen motorcycle journey in search of mythical beings',
    timeOfYear: 'avoid winter at all cost, most of the year is winter',
    highlights: ['Cochrane Polar Bear Habitat', 'Cedar Meadows’ Bison & Elk', 'Sudbury\'s Big Nickel'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Amalfi Coast',
    startingPointCity: 'Naples',
    startingPointState: '',
    startingPointCountry: 'IT',
    endPointCity: 'Salerno',
    endPointState: '',
    endPointCountry: 'IT',
    distance: '',
    routeImage: '',
    image: 'https://quokka.travel/wp-content/uploads/2017/03/amalfi-coast-road-trip-itinerary-views.jpg',
    tags: [
      'sea',
      'gastronomy',
      'motorbike',
      'panoramic view'
    ],
    scenery: 5,
    enjoyment: 4,
    photoGallery: [],
    videos: [],
    description: 'Stunning views of the Italian coast line, along with delicious food',
    timeOfYear: 'summer time',
    highlights: ['beautiful views'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'New England Road Trip',
    startingPointCity: 'Boston',
    startingPointState: 'MA',
    startingPointCountry: 'US',
    endPointCity: 'Portland',
    endPointState: 'ME',
    endPointCountry: 'US',
    distance: '',
    routeImage: '',
    image: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/09/fall-road-trips-vermont-foliage-tour.jpg',
    tags: [
      'nature',
      'gastronomy',
      'history'

    ],
    scenery: 4,
    enjoyment: 4,
    photoGallery: [],
    videos: [],
    description: 'One of the prettiest parts of the US, a must visit',
    timeOfYear: 'autumn',
    highlights: ['Autumn leaves', 'friendly locals'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Canadian Maritimes',
    startingPointCity: 'Halifax',
    startingPointState: 'NS',
    startingPointCountry: 'CA',
    endPointCity: 'Charlottetown',
    endPointState: 'PEI',
    endPointCountry: 'CA',
    distance: '',
    routeImage: '',
    image: 'https://www.authentikcanada.com/uploads/images/orig/blog/charlottetown-pei.jpg',
    tags: [
      'rural',
      'sea',
      'forest'

    ],
    scenery: 4,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Full of rich history and fanatastic coastlines',
    timeOfYear: 'Spring/summer',
    highlights: ['Green Gables'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Alaskan Getaway',
    startingPointCity: 'Anchorage',
    startingPointState: 'AK',
    startingPointCountry: 'US',
    endPointCity: 'Homer',
    endPointState: 'AK',
    endPointCountry: 'US',
    distance: '',
    routeImage: '',
    image: 'https://www.followmeaway.com/wp-content/uploads/2019/03/Alaska-road-trip-denali-road.jpg',
    tags: [
      'rural',
      'mountains',
      'camping'

    ],
    scenery: 4,
    enjoyment: 3,
    photoGallery: [],
    videos: [],
    description: 'It is a trip that really places you right in the middle of nowhere',
    timeOfYear: 'avoid winter',
    highlights: ['Alaskan Wildlife Conservation Center'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Epic Australian Road Tour',
    startingPointCity: 'Perth',
    startingPointState: '',
    startingPointCountry: 'AU',
    endPointCity: 'Melbourne',
    endPointState: '',
    endPointCountry: 'AU',
    distance: '',
    routeImage: '',
    image: 'https://www.travellers-autobarn.com.au/wp-content/uploads/2017/08/pink-lake.jpg',
    tags: [
      'vineyard',
      'rural',
      'sea'

    ],
    scenery: 4,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'This trip takes you across almost the entire southern coastline of Australia',
    timeOfYear: 'September to November or March to May',
    highlights: ['Pink Lake', 'Bunda Cliffs', 'Apollo Bay'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Swiss Adventure',
    startingPointCity: 'Geneva',
    startingPointState: '',
    startingPointCountry: 'CH',
    endPointCity: 'Zermatt',
    endPointState: '',
    endPointCountry: 'CH',
    distance: '',
    routeImage: '',
    image: 'https://cdn.justluxe.com/articles/images/news/shutterstock_254090041.jpg?comp=2',
    tags: [
      'mountains',
      'rural',
      'fast'

    ],
    scenery: 4,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Take your time exploring the towns and cities in between the locations',
    timeOfYear: 'summer',
    highlights: ['Adelboden', 'Interlaken', 'the old town of Brig'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Canadian Rockies',
    startingPointCity: 'Calgary',
    startingPointState: 'AB',
    startingPointCountry: 'CA',
    endPointCity: 'Jasper',
    endPointState: 'AB',
    endPointCountry: 'CA',
    distance: '',
    routeImage: '',
    image: 'https://hikebiketravel.com/wp-content/uploads/2013/04/Columbia-Icefields-22.jpg',
    tags: [
      'mountains',
      'nature',
      'forest',
      'panoramic view'

    ],
    scenery: 5,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'Seeing the best of Alberta',
    timeOfYear: 'road trips are best in summer',
    highlights: ['Banff', 'Lake Louise', 'seeing the wildlife'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Texas and New Mexico',
    startingPointCity: 'Huston',
    startingPointState: 'TX',
    startingPointCountry: 'US',
    endPointCity: 'AlAlbuquerque',
    endPointState: 'NM',
    endPointCountry: 'US',
    distance: '',
    routeImage: '',
    image: 'https://thumbnails.texastribune.org/L_Ve3S6YozJ2lZisfmLduOBUYrQ=/1550x1038/smart/filters:format(webp):quality(75)/https://static.texastribune.org/media/images/TexasStatePark-2.jpg',
    tags: [
      'rural',
      'canyon',
      'off road'


    ],
    scenery: 4,
    enjoyment: 4,
    photoGallery: [],
    videos: [],
    description: 'There are infinite things to see in Texas, so make sure you check out everything ',
    timeOfYear: 'early spring',
    highlights: ['Texas BBQ'],
    pastTravellers: ['user123', 'fakeuser12']
  },
  {
    name: 'Croatian Journey',
    startingPointCity: 'Zagreb',
    startingPointState: '',
    startingPointCountry: 'HR',
    endPointCity: 'Dubrovnik',
    endPointState: '',
    endPointCountry: 'HR',
    distance: '',
    routeImage: '',
    image: 'https://cdn.theatlantic.com/thumbor/WNVmc03NCbOHqUxbr-TSOMoPz7M=/1200x834/media/img/photo/2018/09/a-photo-trip-to-croatia/c01_442536130/original.jpg',
    tags: [
      'sea',
      'gastronomy',
      'history'

    ],
    scenery: 5,
    enjoyment: 4,
    photoGallery: [],
    videos: [],
    description: 'beautiful national parks and walled cities',
    timeOfYear: 'avoid the hottest months in the summer',
    highlights: ['Seeing where Game of Thrones was filmed'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'Welsh Travels',
    startingPointCity: 'London',
    startingPointState: '',
    startingPointCountry: 'GB',
    endPointCity: 'Barmouth',
    endPointState: '',
    endPointCountry: 'GB',
    distance: '',
    routeImage: '',
    image: 'https://cdn.britannica.com/s:700x500/46/99546-050-2DFE5299/Snowdonia-National-Park-Wales.jpg',
    tags: [
      'history',
      'sea',
      'art and culture'

    ],
    scenery: 5,
    enjoyment: 4,
    photoGallery: [],
    videos: [],
    description: 'When visiting the UK, make sure to explore outside of just London, this trip around Wales is a great chance to discover more',
    timeOfYear: 'always a good time for Wales',
    highlights: ['coasteering at Preseli Venture', 'making bespoke gin at The Welsh Wind Distillery'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'French Riviera',
    startingPointCity: 'Marseille',
    startingPointState: '',
    startingPointCountry: 'FR',
    endPointCity: 'Toulon',
    endPointState: '',
    endPointCountry: 'FR',
    distance: '',
    routeImage: '',
    image: 'https://rivierabarcrawltours.com/wp-content/uploads/2020/01/what-is-the-french-riviera-pic1.jpg',
    tags: [
      'sea',
      'gastronomy',
      'abroad',
      'cities'

    ],
    scenery: 4,
    enjoyment: 3,
    photoGallery: [],
    videos: [],
    description: 'The biggest drawcard for driving this route is to visit the stunning calanques, the majority are located between Marseille and La Ciotat and form part of a National Park. Tourism Offices can provide you with maps of the calanques including Port Pin, en Vau, Sormiou, Sugiton, Morgiou, and Figuerolles and you can follow the cliff top hiking trails to reach them. Port-Miou is the one closest to Cassis that is accessible by car.',
    highlights: ['Coast', 'French', 'Wine'],
    pastTravellers: ['user123', 'fakeuser12']
  }, {
    name: 'The Mongol Rally',
    startingPointCity: 'London',
    startingPointState: '',
    startingPointCountry: 'GB',
    endPointCity: 'Ulaanbaatar',
    endPointState: '',
    endPointCountry: 'MN',
    distance: '',
    routeImage: '',
    image: 'https://traveler.marriott.com/wp-content/uploads/2017/04/Mongolia_Gobi.jpg',
    tags: [
      'mechanics',
      'off road',
      'car',
      'mountains'

    ],
    scenery: 4,
    enjoyment: 5,
    photoGallery: [],
    videos: [],
    description: 'This is the greatest motoring adventure on the planet. This is 10,000 miles of chaos across mountain, deserts and steppe on roads ranging from bad to not-a-road in a tiny 1000cc car you bought from a scrapyard for £4.60. There is no backup. Theres is no set route. There’s no guarantee you will make it to the end. It’s just you, your rolling turd and planet-earth sized bucket of adventure.',
    highlights: ['Rally', 'Friends', 'Getting into trouble', 'Getting out of troube'],
    pastTravellers: ['user123', 'fakeuser12']
  }














]