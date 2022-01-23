import './App.css';
import Carousel from './Carousel';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Offer from './Offer';
import offer1 from "./images/rooms6.jpg";
import offer2 from "./images/rooms3.webp";
import offer3 from "./images/rooms2.webp";
import Destination1 from "./images/Udaipur1.jpg";
import Destination2 from "./images/jaipur.jpg";
import Destination3 from "./images/lucknow.jpg";
import Feature1 from "./images/1.jpg";
import Feature2 from "./images/wifi.webp";
import Feature3 from "./images/cash1.jpg";
import Feature4 from "./images/history.PNG";
import Feature5 from "./images/heritage.PNG";
import Footer from './Footer';

function App() {

  let obj = {
    first: {
      "image": offer1,
      "cardHeading": "Suite Surprises",
      "details": "Great value on Suite bookings. Get 50% savings on second night and 25% savings on every additional night.",
    },
    second: {
      "image": offer2,
      "cardHeading": "City Holidays",
      "details": "Realize cherished moments for a lifetime with every City Holiday, crafted with impeccable details just for you and your loved ones.",
    },
    third: {
      "image": offer3,
      "cardHeading": "Book Online",
      "details": "Plan your awaited holiday with loved ones at our treasured destinations. Enjoy our warm hospitality across authentic royal palaces.",
    }
  }

  let obj2 = {
    first: {
      "image": Destination1,
      "cardHeading": "Udaipur",
    },
    second: {
      "image": Destination2,
      "cardHeading": "Jaipur",
    },
    third: {
      "image": Destination3,
      "cardHeading": "Lucknow",
    }
  }

  let obj3 = {
    first: {
      "image": Feature1,
      "cardHeading": "Royal Rooms",
    },
    second: {
      "image": Feature2,
      "cardHeading": "Wifi Access",
    },
    third: {
      "image": Feature3,
      "cardHeading": "Pay at Hotel",
    },
    fourth: {
      "image": Feature4,
      "cardHeading": "Architecture",
    },
    fifth: {
      "image": Feature5,
      "cardHeading": "Heritage Walk",
    }
  }
  return (
    <div className="app">
      {/* Navigation bar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Welcome Section */}
      <Welcome />

      {/* Card Section */}
      <Offer heading="Offers & Promotion" obj={obj} flag={false}/>
      <Offer heading="Destination" obj={obj2} flag={false}/>
      <Offer heading="Features" obj={obj3} flag={true}/>

      <Footer />
    </div>
  );
}

export default App;
