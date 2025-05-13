import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, BookOpen, Utensils, Landmark, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your images - this is the recommended approach for webpack/vite projects
// Example imports (you would add these):
// import sumateraBanner from '@/assets/images/banners/sumatera.jpg';
// import danautobaImage from '@/assets/images/landmarks/sumatera/danau-toba.jpg';
// ... and so on for all images

// Define the region data structure
interface RegionData {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  bannerImage: string;
  location: string;
  population: string;
  languages: string[];
  traditions: string[];
  cuisines: string[];
  landmarks: string[];
  history: string;
  culture: string;
  landmarkImages: string[];
  cultureImages: string[];
  cuisineImages: string[];
}

// Sample data for all regions
const regionsData: Record<string, RegionData> = {
  sumatera: {
    id: 'sumatera',
    name: 'Sumatera',
    description: 'Pulau Sumatera kaya akan keberagaman budaya dengan pengaruh adat Minangkabau, Batak, Aceh, dan Melayu.',
    longDescription: '    Pulau Sumatera merupakan pulau terbesar kedua di Indonesia, memiliki kekayaan budaya dan alam yang luar biasa. Dari hutan hujan tropis Leuser hingga Danau Toba yang megah, Sumatera menawarkan pemandangan alam yang memukau. Masyarakatnya terdiri dari berbagai suku bangsa dengan tradisi yang unik, seperti Minangkabau dengan sistem matrilinealnya, suku Batak dengan upacara adatnya yang khas, serta Aceh dengan pengaruh Islam yang kuat.',
    image: 'https://kebudayaan.kemdikbud.go.id/bpcbjambi/wp-content/uploads/sites/30/2022/01/2b.jpg',
    bannerImage: 'https://kebudayaan.kemdikbud.go.id/bpcbjambi/wp-content/uploads/sites/30/2022/01/2b.jpg',
    location: 'Bagian barat Indonesia',
    population: '58,6 juta jiwa (2020)',
    languages: ['Aceh', 'Batak', 'Minangkabau', 'Melayu', 'Lampung'],
    traditions: ['Upacara Batagak Penghulu', 'Rumah Gadang', 'Ulos', 'Rendang'],
    cuisines: ['Rendang', 'Gulai Ikan', 'Mie Aceh', 'Bika Ambon', 'Pempek'],
    landmarks: ['Danau Toba', 'Jam Gadang', 'Istana Maimun', 'Masjid Raya Baiturrahman', 'Bukit Barisan'],
    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjAiM5SHhayWgEWSBgi4goU1SawlwItKIGAQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLUxuKIXmorQX4LBWFWsjk2XmHMnbsOl1oA&s', 
      'https://assets.promediateknologi.id/crop/242x205:2255x1479/0x0/webp/photo/p3/93/2024/11/23/1560756410_20190507_083358-2408168628.jpg',
      'https://asset.kompas.com/crops/tTIfQ4EcHAysK09B0f8a743MXUY=/0x0:0x0/1200x800/data/photo/2021/05/11/609a0e3d26109.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7EHZFmpUwu2Qtxd7e5joqcD51U-kOhNnFQ&s'
    ],
    cultureImages: [
      'https://asset.kompas.com/crops/V_o8K-ByiriIvg8Gw6kSf8iIzwY=/0x0:749x499/1200x800/data/photo/2022/02/01/61f8f99678e09.jpg',
      'https://cdn.rri.co.id/berita/Padang/o/1719722466396-Screenshot_2024-06-30_114001/5lf13pdn6qh7mde.jpeg',
      'data:image/jpeg;base64,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'

    ],
    cuisineImages: [
      'https://source.unsplash.com/random/500x300/?rendang,food',
      'https://source.unsplash.com/random/500x300/?curry,fish',
      'https://source.unsplash.com/random/500x300/?noodle,aceh'
    ],
    history: 'Sejarah Sumatera diwarnai dengan kejayaan kerajaan-kerajaan besar seperti Sriwijaya, Samudera Pasai, hingga Kerajaan Aceh Darussalam. Pulau ini juga menjadi pintu gerbang masuknya Islam ke Nusantara dan mengalami pengaruh kolonialisme Belanda yang signifikan.',
    culture: 'Budaya Sumatera sangat kaya dan beragam. Dari adat Minangkabau yang matrilineal, tradisi Batak yang kental dengan upacara adat, hingga budaya Aceh yang dipengaruhi Islam. Kesenian tradisional seperti Tari Saman dari Aceh, musik Gondang Batak, dan kerajinan tenun ulos merupakan beberapa contoh kekayaan budayanya.'
  },

  jawa: {
    id: 'jawa',
    name: 'Jawa',
    description: 'Pulau Jawa memiliki adat yang kuat dipengaruhi oleh kerajaan-kerajaan Hindu-Buddha dan Islam yang pernah berkuasa.',
    longDescription: 'Pulau Jawa adalah pusat pemerintahan dan ekonomi Indonesia dengan sejarah panjang kerajaan-kerajaan besar seperti Mataram, Majapahit, dan Demak. Budaya Jawa sangat dipengaruhi oleh filsafat Hindu-Buddha dan Islam, menciptakan perpaduan unik yang terlihat dalam tradisi, kesenian, dan arsitektur di pulau ini. Jawa juga memiliki kepadatan penduduk tertinggi dengan berbagai suku seperti Jawa, Sunda, dan Betawi.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/210000/210075-Java.jpg',
    bannerImage: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/210000/210075-Java.jpg',
    location: 'Bagian tengah Indonesia',
    population: '151,6 juta jiwa (2020)',
    languages: ['Jawa', 'Sunda', 'Betawi', 'Madura', 'Indonesia'],
    traditions: ['Wayang Kulit', 'Sekaten', 'Upacara Ngaben', 'Reog Ponorogo', 'Batik'],
    cuisines: ['Nasi Gudeg', 'Rujak Cingur', 'Soto Betawi', 'Pecel', 'Rawon'],
    landmarks: ['Candi Borobudur', 'Candi Prambanan', 'Keraton Yogyakarta', 'Gunung Bromo', 'Kota Tua Jakarta'],

    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIby_-cW-0tHUupRoBzNMZgk4d265fxoCW_g&s',
      'https://www.worldhistory.org/img/c/p/1200x627/9249.jpg', 
      'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/10/17/WhatsApp-Image-2024-10-17-at-154421-3260115575.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdo-Yz-eRx-3ti_8BN0-LKfY9maVH4v9RHg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9iBhdOwOS113Vugc3IRB2YoqAxlDp77zxw&s'
    ],
    cultureImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5yZPqkHisZ_ODUAVVGkJExwc-fAx9Wzfzw&s',
      'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/07/16210421/upacara-jawa.webp'
    ],
    cuisineImages: [
      'https://qr.ptsuparmatbk.com/blog/wp-content/uploads/2024/07/gudeg.webp',
      'https://asset.kompas.com/crops/h3xhEVOTJqGQokQ5woEag9pub4Q=/0x0:1000x667/1200x800/data/photo/2022/04/17/625be6a0e520b.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZmYNnmZOkwZhpA4OWrlWETYG1QfAzXCCeveTron4jxD9vMiMakrxwqLx3_5qUNuT_0dAImdg2KVl-v-FTEvGufyFcrHaGpPXec_vVBo'
    ],
    history: 'Jawa menjadi saksi kejayaan kerajaan-kerajaan besar Nusantara seperti Mataram Kuno, Singhasari, Majapahit, hingga kerajaan Islam Demak. Era kolonial juga meninggalkan banyak jejak pengaruh di Jawa, dengan VOC yang pertama kali mendirikan markasnya di Batavia (Jakarta).',
    culture: 'Budaya Jawa identik dengan filosofi keseimbangan hidup, kehalusan budi, dan penghormatan pada leluhur. Kesenian tradisional seperti wayang, gamelan, dan tari klasik seperti Bedhaya menjadi simbol adiluhung budaya Jawa. Sementara itu, kerajinan batik Jawa dikenal di seluruh dunia sebagai warisan budaya tak benda.'
  },
  
  kalimantan: {
    id: 'kalimantan',
    name: 'Kalimantan',
    description: 'Budaya Dayak dan Melayu mendominasi pulau Kalimantan dengan ritual adat dan kesenian yang khas.',
    longDescription: 'Kalimantan, bagian dari pulau Borneo yang masuk wilayah Indonesia, memiliki kekayaan alam berupa hutan hujan tropis yang menjadi rumah bagi ribuan spesies flora dan fauna. Suku Dayak sebagai penduduk asli memiliki tradisi yang kuat terkait dengan alam dan spiritualitas. Kebudayaan Melayu pesisir juga berkembang di wilayah pantai, menciptakan perpaduan budaya yang unik.',
    image: 'https://www.kulkulbali.co/public/uploads/posts/qRk9nWIvpADbDT24V0oOm3VzIq8mHU-metaS0FMSU1BTlRBLUJBUkFUICgxKS5qcGc=-.jpg',
    bannerImage: 'https://www.kulkulbali.co/public/uploads/posts/qRk9nWIvpADbDT24V0oOm3VzIq8mHU-metaS0FMSU1BTlRBLUJBUkFUICgxKS5qcGc=-.jpg',
    location: 'Bagian tengah Indonesia, membagi pulau Borneo dengan Malaysia dan Brunei',
    population: '16,8 juta jiwa (2020)',
    languages: ['Dayak (berbagai dialek)', 'Banjar', 'Kutai', 'Melayu', 'Indonesia'],
    traditions: ['Tari Enggang', 'Upacara Tiwah', 'Mandau', 'Rumah Betang', 'Tattoo Dayak'],
    cuisines: ['Juhu Singkah', 'Soto Banjar', 'Amplang', 'Ketupat Kandangan', 'Ayam Cincane'],
    landmarks: ['Taman Nasional Tanjung Puting', 'Rumah Radakng', 'Istana Kadriah', 'Sungai Mahakam', 'Pegunungan Meratus'],
    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThg2zq8lW4mNnKq2Dlv8vTqWffKH4IoSaqeQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOiNOJJr5yCdm03Sh6JZ_FGTIiP63Am55NQ&s', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOA4PO65iack8F6H9sOnYFo5dNJO4W8-UPwQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsz-D5v2DuwNDBmqV7dDyoqc_crG8B51x4w&s',
      'https://eventdaerah.kemenparekraf.go.id/storage/app/uploads/public/676/815/9a2/6768159a29184371600238.webp'
    ],
    cultureImages: [
      'https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2024/06/13/2961044924.jpg',
      'https://upload.wikimedia.org/wikipedia/id/thumb/8/8c/Tiwah_suku_dayak%2C_gambar_1.jpeg/640px-Tiwah_suku_dayak%2C_gambar_1.jpeg'
    ],
    cuisineImages: [
      'https://source.unsplash.com/random/500x300/?borneo,food',
      'https://source.unsplash.com/random/500x300/?indonesian,soup',
      'https://source.unsplash.com/random/500x300/?banjar,food'
    ],
    history: 'Kalimantan memiliki sejarah panjang kerajaan-kerajaan Melayu dan Banjar yang berkembang di pesisir, sementara masyarakat Dayak hidup dengan adat tradisional di pedalaman. Era kolonial membawa perubahan dengan eksploitasi sumber daya alam, terutama pertambangan dan kehutanan.',
    culture: 'Budaya Dayak sangat terkait dengan alam dan spiritualitas, tercermin dalam upacara adat, seni ukir, dan simbol-simbol tradisional. Rumah panjang (betang) menjadi simbol kehidupan komunal. Sementara di pesisir, budaya Melayu dan Banjar berkembang dengan pengaruh Islam yang kuat, terlihat dalam seni tari, musik, dan arsitektur istana.'
  },
  sulawesi: {
    id: 'sulawesi',
    name: 'Sulawesi',
    description: 'Sulawesi memiliki beragam suku seperti Bugis, Makassar, Toraja, dan Minahasa dengan adat istiadat unik.',
    longDescription: 'Sulawesi merupakan salah satu pulau di Indonesia yang kaya akan keanekaragaman budaya, dihuni oleh berbagai suku seperti Bugis, Makassar, Toraja, dan Minahasa yang masing-masing memiliki adat istiadat, bahasa, serta tradisi unik.',
    image: 'https://cdn.timesmedia.co.id/images/2020/08/25/Pulau-Sombori-kerap-dijuluki-Raja-Ampat.jpg',
    bannerImage: 'https://cdn.timesmedia.co.id/images/2020/08/25/Pulau-Sombori-kerap-dijuluki-Raja-Ampat.jpg',
    location: 'Bagian tengah Indonesia di timur Kalimantan',
    population: '19,9 juta jiwa (2020)',
    languages: ['Bugis', 'Makassar', 'Toraja', 'Minahasa', 'Gorontalo'],
    traditions: ['Rambu Solo', 'Tongkonan', 'Tari Kipas', 'Upacara Ma\'nene', 'Passapu'],
    cuisines: ['Coto Makassar', 'Konro', 'Tinutuan', 'Kapurung', 'Pisang Epe'],
    landmarks: ['Tana Toraja', 'Benteng Rotterdam', 'Pulau Bunaken', 'Danau Tondano', 'Taman Nasional Lore Lindu'],
    
    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2YdpH4TCRvybOJBTw7KxaoAnZz_6DSYGBA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjUkoOHP3i9boEG2JGqt5tfPf5RI2NnFAVQ&s', 
      'https://tn-bunaken.com/wp-content/uploads/2021/03/Pulau-2BBunaken.jpeg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkLccxaImqKrDQYxWywg5oVtdfQQaMj815Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn65_kTOTFvjVWpFOTKw8Io3fi0BxFTRs8iQ&s'
    ],
    cultureImages: [
      'https://statik.tempo.co/data/2023/09/02/id_1233585/1233585_720.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeeJ5GmnuiwO-psTwYz1ZZVEhDuuIdjlI7A&s'
    ],
    cuisineImages: [
      'https://asset.kompas.com/crops/zAJSjgJEPVVmDrApNrdSlNxzRvo=/138x48:936x580/1200x800/data/photo/2024/03/17/65f6c7ff27351.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4a/Sop_Konro.JPG',
      'https://asset.kompas.com/crops/GZP1r3C5qNg_J8bgVzQtupnPoBs=/81x22:892x563/1200x800/data/photo/2020/05/13/5ebbdec618a37.jpg'
    ],
    history: 'Sulawesi memiliki sejarah perdagangan maritim yang kuat dengan kerajaan-kerajaan seperti Gowa-Tallo dan Bone. Suku Bugis dikenal sebagai pelaut ulung yang menjelajah hingga ke Australia. Perebutan rempah-rempah di era kolonial juga meninggalkan jejak penting dalam sejarah Sulawesi.',
    culture: 'Budaya Sulawesi sangat beragam dengan Toraja yang terkenal dengan ritual kematian dan rumah adat tongkonan. Bugis-Makassar memiliki tradisi maritim dan epos I La Galigo yang merupakan salah satu karya sastra terpanjang di dunia. Minahasa dengan budaya yang dipengaruhi Eropa juga menambah keragaman budaya di pulau ini.'
  },
  bali: {
    id: 'bali',
    name: 'Bali & Nusa Tenggara',
    description: 'Budaya Dayak dan Melayu mendominasi pulau Kalimantan dengan ritual adat dan kesenian yang khas.',
    longDescription: 'Bali dikenal sebagai Pulau Dewata dengan kebudayaan Hindu yang kuat, tercermin dalam ribuan pura, upacara adat, dan kesenian yang memukau. Sementara Nusa Tenggara Barat dan Timur memiliki keragaman suku dengan tradisi unik seperti Sasak di Lombok dan ritual Pasola di Sumba. Kawasan ini juga memiliki keindahan alam yang menakjubkan dari pantai hingga gunung berapi.',
    image: 'https://titastory.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-14.50.01-2.jpeg',
    bannerImage: 'https://titastory.id/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-04-at-14.50.01-2.jpeg',
    location: 'Bagian selatan Indonesia antara Jawa dan Maluku',
    population: '14,4 juta jiwa (2020)',
    languages: ['Bali', 'Sasak', 'Sumbawa', 'Manggarai', 'Lamaholot'],
    traditions: ['Tari Kecak', 'Upacara Ngaben', 'Tenun Ikat', 'Pasola', 'Bedhug'],
    cuisines: ['Babi Guling', 'Ayam Betutu', 'Plecing Kangkung', 'Catemak Jagung', 'Se\'i'],
    landmarks: ['Pura Besakih', 'Gunung Rinjani', 'Pantai Kuta', 'Pulau Komodo'],
    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSashEOEvtB4ntyew4DSjVR5ynmyPSrJNz5Gg&s',
      'data:image/jpeg;base64,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', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4hZYf_f1KqC--jv7QnKiziasog69MwSCCQ&s',
      'https://asset.kompas.com/crops/vdZhnhd65omILwbPWGk6C_Vdsp0=/0x0:780x520/1200x800/data/photo/2019/09/26/5d8c64544d656.jpg',
    ],
    cultureImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUljeGeMy5GhFodVdj7kb1A9DQbNmqHV1jw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGWnUMJ3650wrHA_tHTSLvPtK8_C1M9KUGA&s'
    ],
    cuisineImages: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Babi_guling.jpg/960px-Babi_guling.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukFKzk93CW8-qjsiNLVWC-_6lrAPqNmhyJA&s'
    ],
    history: 'Bali merupakan benteng terakhir Hindu-Buddha setelah kejatuhan Majapahit, sementara Nusa Tenggara memiliki sejarah beragam dengan pengaruh dari kerajaan Majapahit hingga pedagang dari Makassar dan Jawa. Era kolonial membawa perubahan dengan ekspedisi Belanda yang akhirnya menguasai wilayah ini.',
    culture: 'Bali memiliki budaya Hindu yang kuat dengan konsep Tri Hita Karana sebagai filosofi hidup. Berbagai upacara dan kesenian seperti tari, ukiran, dan lukisan menjadi identitas Bali. Sementara Nusa Tenggara memiliki tradisi tenun ikat yang terkenal, ritual seperti Pasola di Sumba, dan kebudayaan megalitik yang masih hidup di beberapa wilayah.'
  },
  maluku: {
    id: 'maluku',
    name: 'Maluku & Papua',
     description: 'Wilayah timur Indonesia dengan adat Papua dan Maluku yang khas dan masih sangat terjaga keasliannya.',
    longDescription: 'Maluku dan Papua merupakan wilayah paling timur Indonesia dengan keragaman suku dan bahasa yang luar biasa. Papua memiliki lebih dari 250 kelompok suku dengan tradisi dan bahasa yang berbeda-beda. Sementara Maluku yang dikenal sebagai Kepulauan Rempah memiliki sejarah perdagangan yang kaya. Kedua wilayah ini juga memiliki kekayaan alam yang belum banyak terjamah dengan hutan hujan tropis dan ekosistem laut yang memukau.',
    image: 'https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/05/1684901325-700x499.webp',
    bannerImage: 'https://img2.beritasatu.com/cache/beritasatu/480x310-3/2023/05/1684901325-700x499.webp',
    location: 'Bagian paling timur Indonesia',
    population: '11,9 juta jiwa (2020)',
    languages: ['Tobati', 'Asmat', 'Dani', 'Ambon', 'Ternate'],
    traditions: ['Tari Perang', 'Upacara Wor', 'Ukiran Asmat', 'Honai', 'Pela Gandong'],
    cuisines: ['Papeda', 'Ikan Kuah Kuning', 'Sagu', 'Kue Bagea', 'Buburubur'],
    landmarks: ['Lembah Baliem', 'Raja Ampat', 'Gunung Jaya Wijaya', 'Benteng Victoria', 'Pulau Banda'],
    landmarkImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSucqAMIxhhh02HmpG6r6xbvsEl_vo15RpxFA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0bbnnaiswFG2IoYQ5NIxFBKAfUdhfqTv7A&s', 
      'https://asset.kompas.com/crops/S5MRcfhQ0-2B4PWlJb2VxZYOKXs=/0x0:0x0/750x500/data/photo/buku/63214d6f7a8c4.jpg',
      'https://asset.kompas.com/crops/HGnL5R5FbLBykF3ZKquEfbWYk9o=/0x14:800x547/1200x800/data/photo/2021/08/27/6127df3f170b6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVXvOaOuPKFCTSnxqiJ1flOTO1ENKc8XtUvQ&s'
    ],
    cultureImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-YPVkpFZZGPYZl4oPAAQlbozVheZhSkFAw&s',
      'https://upload.wikimedia.org/wikipedia/id/a/ae/Tradisi_Wor.jpg'
    ],
    cuisineImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WCWPBQRm-G-9OabAlwYJZ7yNdb2ywj68Vg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26ZSHvhblSuYW0Lzz7HQokIlh2_9HCwQF0g&s'
    ],
    history: 'Maluku memiliki sejarah perdagangan rempah yang mendunia, menjadikannya incaran bangsa Eropa yang kemudian memicu era kolonialisme di Nusantara. Papua memiliki sejarah isolasi yang lebih panjang, dengan kontak dengan dunia luar yang relatif baru. Integrasi dengan Indonesia sendiri terjadi lebih belakangan dibanding wilayah barat.',
    culture: 'Budaya Papua sangat beragam dengan ratusan suku yang memiliki bahasa dan tradisi berbeda. Ekspresi seni seperti ukiran Asmat dan rumah tradisional Honai menjadi ciri khas. Sementara Maluku memiliki tradisi maritim yang kuat dengan ritual Pela Gandong yang menjadi simbol persaudaraan antar negeri (desa).'
  }
};

const RegionDetail = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const region = regionsData[regionId as string];
  
  if (!region) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Wilayah tidak ditemukan</h1>
            <p className="mb-6">Maaf, kami tidak dapat menemukan informasi tentang wilayah yang Anda cari.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Banner Image */}
      <div className="relative h-72 w-full">
        <div className="absolute inset-0">
          <img 
            src={region.bannerImage} 
            alt={region.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Button variant="ghost" className="mb-4 text-white hover:bg-white/20" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Kembali
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{region.name}</h1>
            <p className="text-white/90 max-w-2xl">{region.description}</p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Sidebar - Quick Info */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-lg p-6 sticky top-20">
              <h2 className="font-bold text-xl mb-4">Informasi Umum</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-batik mt-0.5" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-muted-foreground">{region.location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">Populasi</p>
                  <p className="text-muted-foreground">{region.population}</p>
                </div>
                
                <div>
                  <p className="font-medium">Bahasa Utama</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {region.languages.map(language => (
                      <Badge key={language} variant="secondary">{language}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="font-medium">Tradisi Terkenal</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {region.traditions.map(tradition => (
                      <Badge key={tradition} variant="outline" className="bg-batik-light text-batik-dark">
                        {tradition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Tentang {region.name}</h2>
              <p className="text-lg text-muted-foreground">{region.longDescription}</p>
            </div>
            
            <Tabs defaultValue="kebudayaan" className="mb-10">
              <TabsList className="mb-6">
                <TabsTrigger value="kebudayaan">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Kebudayaan
                </TabsTrigger>
                <TabsTrigger value="kuliner">
                  <Utensils className="h-4 w-4 mr-2" />
                  Kuliner
                </TabsTrigger>
                <TabsTrigger value="tempat">
                  <Landmark className="h-4 w-4 mr-2" />
                  Tempat Penting
                </TabsTrigger>
                <TabsTrigger value="sejarah">
                  <Music className="h-4 w-4 mr-2" />
                  Tradisi & Sejarah
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="kebudayaan" className="space-y-4">
                <p>{region.culture}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {region.cultureImages && region.cultureImages.length > 0 ? (
                    region.cultureImages.map((imageUrl, index) => (
                      <img 
                        key={index}
                        src={imageUrl}
                        alt={`Budaya ${region.name} ${index + 1}`}
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    ))
                  ) : (
                    // Fallback if no culture images
                    <img 
                      src={`https://source.unsplash.com/random/500x300/?indonesia,culture,${region.name}`}
                      alt={`Budaya ${region.name}`}
                      className="rounded-lg w-full h-64 object-cover"
                    />
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="kuliner" className="space-y-4">
                <h3 className="text-xl font-bold">Kekayaan Kuliner {region.name}</h3>
                <p>Kuliner {region.name} menawarkan cita rasa yang khas dengan bahan-bahan lokal dan teknik memasak tradisional yang diwariskan turun-temurun.</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Hidangan Terkenal:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {region.cuisines.map(cuisine => (
                      <li key={cuisine} className="bg-muted/30 p-4 rounded-lg">
                        <div className="font-medium">{cuisine}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  {region.cuisines.slice(0, 3).map((cuisine, index) => (
                    <img 
                      key={index}
                      src={region.cuisineImages?.[index] || `https://source.unsplash.com/random/300x300/?indonesian,food,${cuisine.split(' ')[0]}`}
                      alt={cuisine}
                      className="rounded-lg w-full h-40 object-cover"
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tempat" className="space-y-4">
                <h3 className="text-xl font-bold">Lokasi Penting di {region.name}</h3>
                <p>Dari situs bersejarah hingga keajaiban alam, {region.name} memiliki banyak tempat menarik untuk dikunjungi.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {region.landmarks.map((landmark, index) => (
                    <div key={landmark} className="flex flex-col group">
                      <Link to={`/landmark/${region.id}/${landmark.toLowerCase().replace(/\s+/g, '-')}`} className="overflow-hidden rounded-t-lg">
                        <img 
                          src={region.landmarkImages?.[index] || `https://source.unsplash.com/random/500x300/?landmark,${landmark.split(' ')[0]}`}
                          alt={landmark}
                          className="rounded-t-lg w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="bg-muted/30 p-4 rounded-b-lg">
                        <Link to={`/landmark/${region.id}/${landmark.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-batik transition-colors">
                          <h3 className="font-semibold">{landmark}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">Destinasi penting di {region.name}</p>
                        <div className="flex justify-between items-center mt-3">
                          <p className="text-xs text-muted-foreground">Lihat informasi selengkapnya</p>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/landmark/${region.id}/${landmark.toLowerCase().replace(/\s+/g, '-')}`}>
                              Kunjungi
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sejarah" className="space-y-4">
                <h3 className="text-xl font-bold">Sejarah {region.name}</h3>
                <p>{region.history}</p>
                
                <h4 className="text-lg font-semibold mt-6">Tradisi yang Dilestarikan</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {region.traditions.map((tradition) => (
                    <div key={tradition} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                      <h5 className="font-medium">{tradition}</h5>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tradisi yang masih dipertahankan hingga sekarang
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="text-xl font-bold mb-4">Jelajahi Wilayah Lain</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.values(regionsData)
                  .filter(r => r.id !== region.id)
                  .slice(0, 3)
                  .map(otherRegion => (
                    <Link 
                      key={otherRegion.id} 
                      to={`/region/${otherRegion.id}`}
                      className="group"
                    >
                      <div className="relative h-28 rounded-lg overflow-hidden">
                        <img 
                          src={otherRegion.image} 
                          alt={otherRegion.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-white p-2">{otherRegion.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegionDetail;