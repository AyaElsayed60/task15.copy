import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import ArtworkDetail from './components/ArtworkDetail';

import starryNightArtist from './assets/starry-night/artist.jpg'
import starryNightThumbnail from './assets/starry-night/thumbnail.jpg';
import starryNightHeroSmall from './assets/starry-night/hero-small.jpg';
import starryNightHeroLarge from './assets/starry-night/hero-large.jpg';
import starryNightGallery from './assets/starry-night/gallery.jpg';

import girlWithPearlEarringArtist from './assets/girl-with-pearl-earring/artist.jpg';
import girlWithPearlEarringThumbnail from './assets/girl-with-pearl-earring/thumbnail.jpg';
import girlWithPearlEarringHeroSmall from './assets/girl-with-pearl-earring/hero-small.jpg';
import girlWithPearlEarringHeroLarge from './assets/girl-with-pearl-earring/hero-large.jpg';
import girlWithPearlEarringGallery from './assets/girl-with-pearl-earring/gallery.jpg';

import guernicaArtist from './assets/guernica/artist.jpg';
import guernicaThumbnail from './assets/guernica/thumbnail.jpg';
import guernicaHeroSmall from './assets/guernica/hero-small.jpg';
import guernicaHeroLarge from './assets/guernica/hero-large.jpg';
import guernicaGallery from './assets/guernica/gallery.jpg';

import penitentMagdaleneArtist from './assets/penitent-magdalene/artist.jpg';
import penitentMagdaleneThumbnail from './assets/penitent-magdalene/thumbnail.jpg';
import penitentMagdaleneHeroSmall from './assets/penitent-magdalene/hero-small.jpg';
import penitentMagdaleneHeroLarge from './assets/penitent-magdalene/hero-large.jpg';
import penitentMagdaleneGallery from './assets/penitent-magdalene/gallery.jpg';

import stormOnGalileeArtist from './assets/the-storm-on-the-sea-of-galilee/artist.jpg';
import stormOnGalileeThumbnail from './assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg';
import stormOnGalileeHeroSmall from './assets/the-storm-on-the-sea-of-galilee/hero-small.jpg';
import stormOnGalileeHeroLarge from './assets/the-storm-on-the-sea-of-galilee/hero-large.jpg';
import stormOnGalileeGallery from './assets/the-storm-on-the-sea-of-galilee/gallery.jpg';

import greatWaveArtist from './assets/the-great-wave-off-kanagawa/artist.jpg';
import greatWaveThumbnail from './assets/the-great-wave-off-kanagawa/thumbnail.jpg';
import greatWaveHeroSmall from './assets/the-great-wave-off-kanagawa/hero-small.jpg';
import greatWaveHeroLarge from './assets/the-great-wave-off-kanagawa/hero-large.jpg';
import greatWaveGallery from './assets/the-great-wave-off-kanagawa/gallery.jpg';

import vanGoghSelfPortraitArtist from './assets/van-gogh-self-portrait/artist.jpg';
import vanGoghSelfPortraitThumbnail from './assets/van-gogh-self-portrait/thumbnail.jpg';
import vanGoghSelfPortraitHeroSmall from './assets/van-gogh-self-portrait/hero-small.jpg';
import vanGoghSelfPortraitHeroLarge from './assets/van-gogh-self-portrait/hero-large.jpg';
import vanGoghSelfPortraitGallery from './assets/van-gogh-self-portrait/gallery.jpg';

import sleepingGypsyArtist from './assets/the-sleeping-gypsy/artist.jpg';
import sleepingGypsyThumbnail from './assets/the-sleeping-gypsy/thumbnail.jpg';
import sleepingGypsyHeroSmall from './assets/the-sleeping-gypsy/hero-small.jpg';
import sleepingGypsyHeroLarge from './assets/the-sleeping-gypsy/hero-large.jpg';
import sleepingGypsyGallery from './assets/the-sleeping-gypsy/gallery.jpg';



const artworks = [
  {
    id: 1,
    name: "Starry Night",
    year: 1889,
    description: "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night.",
    source: "https://en.wikipedia.org/wiki/The_Starry_Night",
    artist: {
      image: starryNightArtist,
      name: "Vincent Van Gogh"
    },
    images: {
      thumbnail: starryNightThumbnail,
      hero: {
        small: starryNightHeroSmall,
        large: starryNightHeroLarge
      },
      gallery: starryNightGallery
    }
  },
  {
    id: 2,
    name: "Girl with a Pearl Earring",
    year: 1665,
    description: "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
    source: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
    artist: {
      image: girlWithPearlEarringArtist,
      name: "Johannes Vermeer"
    },
    images: {
      thumbnail: girlWithPearlEarringThumbnail,
      hero: {
        small: girlWithPearlEarringHeroSmall,
        large: girlWithPearlEarringHeroLarge,
      },
      gallery: girlWithPearlEarringGallery,
    }
  },
  {
    id: 3,
    name: "Guernica",
    year: 1937,
    description: "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
    source: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
    artist: {
      image: guernicaArtist,
      name: "Pablo Picasso"
    },
    images: {
      thumbnail: guernicaThumbnail,
      hero: {
        small: guernicaHeroSmall,
        large:  guernicaHeroLarge,
      },
      gallery: guernicaGallery
    }
  },
  {
    id: 4,
    name: "Penitent Magdalene",
    year: 1625,
    description: "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
    source: "https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)",
    artist: {
      image: penitentMagdaleneArtist,
      name: "Artemisia Gentileschi"
    },
    images: {
      thumbnail: penitentMagdaleneThumbnail,
      hero: {
        small: penitentMagdaleneHeroSmall,
        large: penitentMagdaleneHeroLarge
      },
      gallery: penitentMagdaleneGallery
    }
  },
  {
    id: 5,
    name: "The Storm on the Sea of Galilee",
    year: 1633,
    description: "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
    source: "https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee",
    artist: {
      image: stormOnGalileeArtist,
      name: "Rembrandt"
    },
    images: {
      thumbnail: stormOnGalileeThumbnail,
      hero: {
        small: stormOnGalileeHeroSmall,
        large:stormOnGalileeHeroLarge
      },
      gallery:stormOnGalileeGallery
    }
  },
  {
    id: 6,
    name: "The Great Wave off Kanagawa",
    year: 1831,
    description: "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. \"Under the Wave off Kanagawa\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.",
    source: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
    artist: {
      image: greatWaveArtist,
      name: "Hokusai"
    },
    images: {
      thumbnail: greatWaveThumbnail,
      hero: {
        small: greatWaveHeroSmall,
        large: greatWaveHeroLarge
      },
      gallery: greatWaveGallery
    }
  },
  {
    id: 7,
    name: "Van Gogh Self-portrait",
    year: 1889,
    description: "This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \"absolutely fanatical\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.",
    source: "https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)",
    artist: {
      image: vanGoghSelfPortraitArtist,
      name: "Vincent Van Gogh"
    },
    images: {
      thumbnail: vanGoghSelfPortraitThumbnail,
      hero: {
        small: vanGoghSelfPortraitHeroSmall,
        large: vanGoghSelfPortraitHeroLarge
      },
      gallery: vanGoghSelfPortraitGallery
    }
  },
  {
    id: 8,
    name: "The Sleeping Gypsy",
    year: 1897,
    description: "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was sold to the Museum of Modern Art.",
    source: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy",
    artist: {
      image: sleepingGypsyArtist,
      name: "Henri Rousseau"
    },
    images: {
      thumbnail: sleepingGypsyThumbnail,
      hero: {
        small: sleepingGypsyHeroSmall,
        large: sleepingGypsyHeroLarge
      },
      gallery: sleepingGypsyGallery
    }
  },
  
];

 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery artworks={artworks} />} />
        <Route path="/artworks/:id" element={<ArtworkDetail artworks={artworks} />} />
      </Routes>
    </Router>
  );
}

export default App;