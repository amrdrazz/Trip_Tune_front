import TROPIMG1 from "../images/pool of hotel 1.jpg";
import TROPIMG2 from "../images/room hotel 1.jpg";
import TROPIMG3 from "../images/bathroom2 hotel1.jpg";
import TROPIMG4 from "../images/double bed hotel 1.jpg";
import TROPIMG5 from "../images/dining room hotel 1.jpg";

import PREMIERIMG1 from "../images/فندق2.jpg";
import PREMIERIMG2 from "../images/bofe hotel2.jpg";
import PREMIERIMG3 from "../images/bath room hotel2.jpg";
import PREMIERIMG4 from "../images/room hotel2.jpg";

import OLDIMG1 from "../images/view hotel3.jpg";
import OLDIMG2 from "../images/garden hotel 3.jpg";
import OLDIMG3 from "../images/bathroom hotel 3.jpg";
import OLDIMG4 from "../images/balcony hotel 3.jpg";

import STEIGENBERGERIMG1 from "../images/Steigenberger Cecil Hotel.jpg";
import STEIGENBERGERIMG2 from "../images/balcony hotel 4.jpg";
import STEIGENBERGERIMG3 from "../images/out of hotel 4.jpg";
import STEIGENBERGERIMG4 from "../images/resiption hotel4.jpg";
import STEIGENBERGERIMG5 from "../images/room hotel 4.jpg";

import HILTONIMG1 from "../images/Hilton Marsa Alam Nubian Resort.jpg";
import HILTONIMG2 from "../images/pool of hotel 5.jpg";
import HILTONIMG3 from "../images/room of hotel 5.jpg";
import HILTONIMG4 from "../images/bath of hotel 5.jpg";

import MENAIMG1 from "../images/Mena House Hotel.jpg";
import MENAIMG2 from "../images/pool of hotel 6.jpg";
import MENAIMG3 from "../images/bath of hotel 6.jpg";
import MENAIMG4 from "../images/room of hotel 6.jpg";




const hotelsData = [
  {
    name: "Tropitel Sahl Hasheesh Resort",
    description: "Tropitel Sahl Hasheesh Resort – 5★ beachfront resort in the Red Sea with stunning sea views. Features modern, air-conditioned rooms with balconies or terraces. Guests enjoy 3 outdoor pools, children’s aqua park, 5 restaurants (Italian, Mexican, Indian, Turkish, and Oriental), spa and fitness center, and a variety of activities including diving, sailing, biking, tennis, and more. Free parking and shuttle service available.",
    location: "Sahl Hasheesh, Red Sea, Egypt",
    facilities: "Private beach, multiple pools, spa, restaurants, Wi-Fi, kids activities",
    price: "$100 - $180+ per night (varies with season)",
    rating: "4.7/5",
    images: [TROPIMG1, TROPIMG2, TROPIMG3, TROPIMG4, TROPIMG5], // add real images
    mapLink: "https://www.google.com/travel/hotels/entity/ChkIn-SNtamhmq2-ARoML2cvMWhtM2cxX3M5EAE?g2lb="
  },
  {
    name: "Premier Le Reve Hotel & Spa",
    description: "Premier Le Reve Hotel & Spa – 5★ adults-only resort in Sahl Hasheesh Bay featuring freshwater and saltwater pools, a glass-domed sky pool, private beach, spa, and health club. Spacious rooms with furnished balconies, luxury fabrics, and pillow menu. Enjoy 5 restaurants (Italian, Chinese, Japanese, seafood, and international), Long Bar, and Vitamin Bar. Free parking and 22 km from Hurghada Airport. Couples love the location (9.3/10).",
    location: "Sahl Hasheesh, Red Sea, Egypt",
    facilities: "Adults only, spa, pools, beachfront, gym, dining",
    price: "$150 - $280+ per night (varies with season)",
    rating: "4.8/5",
    images: [PREMIERIMG1, PREMIERIMG2, PREMIERIMG3, PREMIERIMG4],
    mapLink: "https://maps.google.com/?q=Premier+Le+Reve+Hotel+%26+Spa+Sahl+Hasheesh"
  },
  {
    name: "Old Cataract Hotel Aswan",
    description: "Sofitel Legend Old Cataract Aswan – Luxury historic hotel on the Nile with spacious rooms offering breathtaking river views. Features elegant décor, pools, fine dining, and professional service. Perfect for a unique, memorable stay with a touch of history and comfort.",
    location: "Aswan, Egypt",
    facilities: "Nile views, historic architecture, fine dining, spa, pool",
    price: "$220 - $380+ per night (varies with season)",
    rating: "4.6/5",
    images: [OLDIMG1, OLDIMG2, OLDIMG3, OLDIMG4],
    mapLink: "https://maps.google.com/?q=Sofitel+Legend+Old+Cataract+Aswan"
  },
  {
    name: "Steigenberger Cecil Hotel Alexandria",
    description: "Steigenberger Cecil Hotel Alexandria – Elegant hotel in Alexandria’s business district, overlooking the bay and yacht club. Spacious rooms with French beds, chandeliers, and stylish décor. Enjoy historic restaurants, the Monty Bar, and impeccable service. Free WiFi available. Couples love the central location (9.5/10 for two-",
    location: "Alexandria, Egypt",
    facilities: "Sea views, historic style, dining, rooftop",
    price: "$120 - $240+ per night",
    rating: "4.5/5",
    images: [STEIGENBERGERIMG1, STEIGENBERGERIMG2, STEIGENBERGERIMG3, STEIGENBERGERIMG4, STEIGENBERGERIMG5],
    mapLink: "https://maps.google.com/?q=Steigenberger+Cecil+Hotel+Alexandria"
  },
  {
    name: "Hilton Marsa Alam Nubian Resort",
    description: "Hilton Marsa Alam Nubian Resort – 5★ beachfront resort on Egypt’s Red Sea West Coast with 4 outdoor pools, gym, and rooms with Red Sea views. Elegant rooms with balconies, flat-screen TVs, and mosaic bathrooms. Enjoy diverse dining options, diving excursions in Abu Dabab Bay, kids’ club, and playground. 30 km from Marsa Alam International Airport. Couples love the location (9.3/10).",
    location: "Marsa Alam, Egypt",
    facilities: "Coral reef snorkeling, private beach, pools, gym, bars",
    price: "$180 - $350+ per night",
    rating: "4.7/5",
    images: [HILTONIMG1, HILTONIMG2, HILTONIMG3, HILTONIMG4],
    mapLink: "https://maps.google.com/?q=Hilton+Marsa+Alam+Nubian+Resort+Marsa+Alam"
  },
  {
    name: "Mena House Hotel Giza",
    description: "Marriott Mena House, Cairo – Historic luxury hotel near the Great Pyramids of Giza, surrounded by lush gardens. Features spa, pool, fitness center, and elegant rooms with handcrafted furniture. Enjoy Italian cuisine, daily buffet breakfast, and cocktails with pyramid views. Concierge arranges camel and horse rides. 30 km from Cairo Airport. Couples love the location (9.6/10).",
    location: "Giza, Egypt",
    facilities: "Pyramid views, gardens, spa, dining",
    price: "$200 - $400+ per night",
    rating: "4.5/5",
    images: [MENAIMG1, MENAIMG2, MENAIMG3, MENAIMG4],
    mapLink: "https://maps.google.com/?q=Mena+House+Hotel+Giza"
  }
];

export default hotelsData;