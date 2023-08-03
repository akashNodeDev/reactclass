import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9AIyWJnv-qeoSVFHoDSoWPoYpqTm_vWoxcg&usqp=CAU"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config Driven API
const resturantData = [
  {
    info: {
      id: "225212",
      name: "Hotmenu",
      cloudinaryImageId: "05b98b015c7f0ec116d50082f1e48f4c",
      locality: "Saltlake",
      areaName: "Salt Lake",
      costForTwo: "₹250 for two",
      cuisines: [
        "Continental",
        "American",
        "Pan-Asian",
        "Italian",
        "French",
        "Biryani",
        "Desserts",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "225212",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "103520",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-04 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-2e85ec39-a318-4ba5-8634-111663332bdc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/hotmenu-saltlake-salt-lake-kolkata-225212",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "4583",
      name: "Sharma Tea(Salt Lake)",
      cloudinaryImageId: "ecio04ouqcpu6qqojgxa",
      locality: "Sector 1",
      areaName: "Bidhannagar",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "4583",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "182187",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 14:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-2e85ec39-a318-4ba5-8634-111663332bdc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sharma-tea-salt-lake-sector-1-bidhannagar-kolkata-4583",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "133914",
      name: "Sidhi Ganesh",
      cloudinaryImageId: "pfmotgpbv2rlt9bzbcp4",
      locality: "Chinar park",
      areaName: "Baguiati",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "133914",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "187823",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-2e85ec39-a318-4ba5-8634-111663332bdc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sidhi-ganesh-chinar-park-baguiati-kolkata-133914",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "353630",
      name: "Kachori Ghar",
      cloudinaryImageId: "ccdz1ablnywmpbbfmqd9",
      locality: "Salt Lake",
      areaName: "Newtown",
      costForTwo: "₹100 for two",
      cuisines: ["Fast Food", "Chaat", "Combo", "Sweets"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "353630",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "113279",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-08-03 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-2e85ec39-a318-4ba5-8634-111663332bdc",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kachori-ghar-salt-lake-newtown-kolkata-353630",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const ResturantCard = ({restaurant}) => {
    console.log("Props=",props)
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.info?.cloudinaryImageId} />
      <h2>{restaurant.info?.name}</h2>
      <h3>{restaurant.info?.cuisines.join(", ")}</h3>
      <h4>{restaurant.info?.avgRating} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturant-list">
      <ResturantCard restaurant={resturantData[0]}/>
      <ResturantCard restaurant={resturantData[1]}/>
      <ResturantCard restaurant={resturantData[2]}/>
      <ResturantCard restaurant={resturantData[3]}/>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      {/**
       * Header
       *  - Logo
       *  - Nav Items(Right Side)
       *  - Cart
       * Body
       *  - Search Bar
       *  - ResturantList
       *      - Resturant Card
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusines
       * Footer
       *  - Links
       *  - Copyright
       *
       */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
