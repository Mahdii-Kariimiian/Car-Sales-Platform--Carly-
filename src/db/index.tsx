import Sedan from "@/assets/car-styles/sedan.jpg";
import Coupe from "@/assets/car-styles/Coupe.jpg";
import Truck from "@/assets/car-styles/Truck.jpg";
import SUV from "@/assets/car-styles/SUV.jpg";
import Hatchback from "@/assets/car-styles/Hatchback.jpg";
import Convertible from "@/assets/car-styles/Convertible.jpg";
import buyCarIcon from "@/assets/Icons/buy-car-icon.png";
import sellCarIcon from "@/assets/Icons/sell-car-icon.png";
import customers1 from "@/assets/Images/customers (1).png";
import customers2 from "@/assets/Images/customers (2).png";
import customers3 from "@/assets/Images/customers (3).png";

export const CarStyles = [
    {
        id: 0,
        title: "Sedan",
        src: Sedan,
    },
    {
        id: 1,
        title: "Coupe",
        src: Coupe,
    },
    {
        id: 2,
        title: "SUV",
        src: SUV,
    },
    {
        id: 3,
        title: "Truck",
        src: Truck,
    },
    {
        id: 4,
        title: "Hatchback",
        src: Hatchback,
    },
    {
        id: 5,
        title: "Convertible",
        src: Convertible,
    },
];

// export const cars = [
//     {
//         id: 0,
//         Model: "Corvette",
//         Brand: "Chevrolet",
//         Price: 106534,
//         Discount: 0,
//         Year: 1965,
//         "Top Speed": 171,
//         Type: "Convertible",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Other laryngeal repair",
//         Image: "https://cdn.motor1.com/images/mgl/P3onNL/s3/2023-chevrolet-corvette-z06.jpg",
//     },
//     {
//         id: 1,
//         Model: "Sky",
//         Brand: "Saturn",
//         Price: 49167,
//         Discount: 0,
//         Year: 2007,
//         "Top Speed": 157,
//         Type: "Coupe",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Corneal dx proc NEC",
//         Image: "https://autoia.com.br/wp-content/uploads/2024/05/442420360_1463600667916851_1669569773460994792_n.webp",
//     },
//     {
//         id: 2,
//         Model: "Firebird",
//         Brand: "Pontiac",
//         Price: 75831,
//         Discount: 0,
//         Year: 1991,
//         "Top Speed": 118,
//         Type: "Coupe",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Ins part disc pros lumb",
//         Image: "https://robbreport.com/wp-content/uploads/2022/01/BurtReynolds_Pontiac.jpg?w=1000",
//     },
//     {
//         id: 3,
//         Model: "911",
//         Brand: "Porsche",
//         Price: 47642,
//         Discount: 0,
//         Year: 1998,
//         "Top Speed": 159,
//         Type: "Truck",
//         Transmission: "Manual",
//         Condition: "Used",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Manual removal-placenta",
//         Image: "https://cdn.motor1.com/images/mgl/kvjPR/s3/2022-porsche-911-carrera-gts-front-3-4.jpg",
//     },
//     {
//         id: 4,
//         Model: "DTS",
//         Brand: "Cadillac",
//         Price: 119366,
//         Discount: 0,
//         Year: 2006,
//         "Top Speed": 171,
//         Type: "Convertible",
//         Transmission: "Manual",
//         Condition: "Used",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Radical orbitomaxillect",
//         Image: "https://cadillacsociety.com/wp-content/uploads/2020/12/2022-Cadillac-DTS-Sport-Black-Edition-rendering-tuningcar_ps-exterior-005.jpg",
//     },
//     {
//         id: 5,
//         Model: "Sierra 3500",
//         Brand: "GMC",
//         Price: 68983,
//         Discount: 0,
//         Year: 2011,
//         "Top Speed": 177,
//         Type: "Convertible",
//         Transmission: "Manual",
//         Condition: "New",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Refus lmb/lmbsac ant/ant",
//         Image: "https://www.billjacksonccbg.com/blogs/5302/wp-content/uploads/2024/04/gmc-sierra-3500OemAngleFrontLeftPrimary.png",
//     },
//     {
//         id: 6,
//         Model: "190E",
//         Brand: "Mercedes-Benz",
//         Price: 129621,
//         Discount: 0,
//         Year: 1992,
//         "Top Speed": 165,
//         Type: "Sedan",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Arth/pros rem wo re-wrst",
//         Image: "https://imgr1.auto-motor-und-sport.de/Mercedes-190E-2-5-16-Evo-2-1990--169FullWidth-55c715bd-1738380.jpg",
//     },
//     {
//         id: 7,
//         Model: "Routan",
//         Brand: "Volkswagen",
//         Price: 85352,
//         Discount: 0,
//         Year: 2009,
//         "Top Speed": 137,
//         Type: "Sedan",
//         Transmission: "Manual",
//         Condition: "New",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Sm bowel segment isolat",
//         Image: "https://www.usatoday.com/gcdn/-mm-/cddc7124de8574c96e10646453e64f80c66ada91/c=819-1034-5616-3744/local/-/media/USATODAY/GenericImages/2013/09/23/1379964740000-DB2012AU01445.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp",
//     },
//     {
//         id: 8,
//         Model: "Concorde",
//         Brand: "Chrysler",
//         Price: 68761,
//         Discount: 0,
//         Year: 2002,
//         "Top Speed": 147,
//         Type: "SUV",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Complete laryngectomy",
//         Image: "https://live.staticflickr.com/679/31541506272_3b6b6d507a_z.jpg",
//     },
//     {
//         id: 9,
//         Model: "Neon",
//         Brand: "Dodge",
//         Price: 123544,
//         Discount: 0,
//         Year: 2001,
//         "Top Speed": 157,
//         Type: "SUV",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Part ostect-tibia/fibula",
//         Image: "https://imagecdnsa.zigwheels.ae/large/gallery/exterior/9/1056/dodge-neon-front-angle-low-view-496297.jpg",
//     },
//     {
//         id: 10,
//         Model: "RL",
//         Brand: "Acura",
//         Price: 61060,
//         Discount: 55000,
//         Year: 2010,
//         "Top Speed": 143,
//         Type: "SUV",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Ethmoidotomy",
//         Image: "https://acuraconnected.com/wp-content/uploads/2012/01/rl_629_2012_09_28_01.jpg",
//     },
//     {
//         id: 11,
//         Model: "Grand Marquis",
//         Brand: "Mercury",
//         Price: 106925,
//         Discount: 100000,
//         Year: 1996,
//         "Top Speed": 175,
//         Type: "Sedan",
//         Transmission: "CVT",
//         Condition: "Used",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Adrenal incision",
//         Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/2003-2005_Mercury_Grand_Marquis.jpg/1200px-2003-2005_Mercury_Grand_Marquis.jpg",
//     },
//     {
//         id: 12,
//         Model: "Passport",
//         Brand: "Honda",
//         Price: 84078,
//         Discount: 80000,
//         Year: 1997,
//         "Top Speed": 135,
//         Type: "Sedan",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Dx aspirat-ant chamber",
//         Image: "https://www.motortrend.com/uploads/2024/02/2025-Honda-Passport-front-view-render.jpg",
//     },
//     {
//         id: 13,
//         Model: "Z3",
//         Brand: "BMW",
//         Price: 149729,
//         Discount: 135000,
//         Year: 1997,
//         "Top Speed": 180,
//         Type: "Coupe",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Remov other urin device",
//         Image: "https://imgr1.auto-motor-und-sport.de/BMW-Z3-Kaufberatung-169FullWidth-757aa329-1718341.jpg",
//     },
//     {
//         id: 14,
//         Model: "Thunderbird",
//         Brand: "Ford",
//         Price: 56515,
//         Discount: 50000,
//         Year: 1994,
//         "Top Speed": 146,
//         Type: "Sedan",
//         Transmission: "CVT",
//         Condition: "Used",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Excision vaginal lesion",
//         Image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/T-bird.jpg",
//     },
//     {
//         id: 15,
//         Model: "Wrangler",
//         Brand: "Jeep",
//         Price: 130647,
//         Discount: 120000,
//         Year: 2002,
//         "Top Speed": 126,
//         Type: "Convertible",
//         Transmission: "Manual",
//         Condition: "New",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Parasitology-bili/pancr",
//         Image: "https://media.ed.edmunds-media.com/jeep/wrangler/2024/oem/2024_jeep_wrangler_convertible-suv_rubicon-392-final-edition_fq_oem_1_1600.jpg",
//     },
//     {
//         id: 16,
//         Model: "Outback",
//         Brand: "Subaru",
//         Price: 118634,
//         Discount: 105000,
//         Year: 2002,
//         "Top Speed": 159,
//         Type: "Truck",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Electronic",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Other tibia/fibula incis",
//         Image: "https://cdn.motor1.com/images/mgl/EZwPw/s3/2020-subaru-outback.jpg",
//     },
//     {
//         id: 17,
//         Model: "Monza",
//         Brand: "Chevrolet",
//         Price: 126962,
//         Discount: 110000,
//         Year: 1975,
//         "Top Speed": 174,
//         Type: "Convertible",
//         Transmission: "Manual",
//         Condition: "New",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Endosc dilation ampulla",
//         Image: "https://i.ytimg.com/vi/0otzODVGrDY/maxresdefault.jpg",
//     },
//     {
//         id: 18,
//         Model: "Ram Wagon B150",
//         Brand: "Dodge",
//         Price: 107523,
//         Discount: 100000,
//         Year: 1992,
//         "Top Speed": 160,
//         Type: "Sedan",
//         Transmission: "Automatic",
//         Condition: "Used",
//         Fuel: "Petrol",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Temp-inf xtracap lens ex",
//         Image: "https://s.car.info/image_files/1920/0-923662.jpg",
//     },
//     {
//         id: 19,
//         Model: "W201",
//         Brand: "Mercedes-Benz",
//         Price: 99796,
//         Discount: 90000,
//         Year: 1990,
//         "Top Speed": 152,
//         Type: "Hatchback",
//         Transmission: "Automatic",
//         Condition: "New",
//         Fuel: "Diesel",
//         Description:
//             "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//         Image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/1993_190E_2.3.jpg",
//     },
// ];

export const sellOrBuy = [
    {
        id: 0,
        title: "Are You Looking For a Car?",
        description:
            "We are committed to providing our customers with exceptional service.",
        buttonText: "See All Cars",
        icon: buyCarIcon,
        color: "bg-[#CEE1F2]",
        buttonColor: "bg-[#405FF2]",
        path: "/listingcars",
    },
    {
        id: 1,
        title: "Do You Want to Sell a Car ?",
        description:
            "We are committed to providing our customers with exceptional service.",
        buttonText: "Get Started",
        icon: sellCarIcon,
        color: "bg-[#FFE9F3]",
        buttonColor: "bg-[#050B20]",
        path: "/addcar",
    },
];

export const footerData = {
    Company: [
        {
            title: "About Us",
            link: "/aboutus",
        },
        {
            title: "Blog",
            link: "/blog",
        },
        {
            title: "Services",
            link: "/services",
        },
        {
            title: "FAQs",
            link: "/faqs",
        },
        {
            title: "Terms",
            link: "/terms",
        },
        {
            title: "Contact Us",
            link: "/contactus",
        },
    ],
    QuickLinks: [
        {
            title: "Get in Touch",
            link: "/contact",
        },
        {
            title: "Help Center",
            link: "/help",
        },
        {
            title: "Live chat",
            link: "/live-chat",
        },
        {
            title: "How it Works",
            link: "/how-it-works",
        },
    ],
    OurBrands: [
        {
            title: "Toyota",
            link: "/brands/toyota",
        },
        {
            title: "Porsche",
            link: "/brands/porsche",
        },
        {
            title: "Audi",
            link: "/brands/audi",
        },
        {
            title: "BMW",
            link: "/brands/bmw",
        },
        {
            title: "Ford",
            link: "/brands/ford",
        },
        {
            title: "Nissan",
            link: "/brands/nissan",
        },
        {
            title: "Peugeot",
            link: "/brands/peugeot",
        },
        {
            title: "Volkswagen",
            link: "/brands/volkswagen",
        },
    ],
    VehicleTypes: [
        {
            title: "Sedan",
            link: "/listingcars/sedan",
        },
        {
            title: "Hatchback",
            link: "/listingcars/hatchback",
        },
        {
            title: "SUV",
            link: "/listingcars/suv",
        },
        {
            title: "Hybrid",
            link: "/listingcars/hybrid",
        },
        {
            title: "Electric",
            link: "/listingcars/electric",
        },
        {
            title: "Coupe",
            link: "/listingcars/coupe",
        },
        {
            title: "Truck",
            link: "/listingcars/truck",
        },
        {
            title: "Convertible",
            link: "/listingcars/convertible",
        },
    ],
};

export const customers = [
    {
        title: "Great Work",
        description:
            "“Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.",
        img: customers1,
        name: "Leslie Alexander",
        socialMedia: "Facebook",
    },
    {
        title: "Great Awesome Design",
        description:
            "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et. ”",
        img: customers2,
        name: "Jenny Wilson",
        socialMedia: "UI/UX Designer",
    },
    {
        title: "Great Perfect Quality Design",
        description:
            "“At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.”",
        img: customers3,
        name: "Courtney Henry ",
        socialMedia: "Software Developer",
    },
];

export const faq = [
    {
        question:
            "Does BoxCar own the cars I see online or are they owned by other.",
        answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
        question:
            "Does BoxCar own the cars I see online or are they owned by other.",
        answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
        question:
            "Does BoxCar own the cars I see online or are they owned by other.",
        answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
        question:
            "Does BoxCar own the cars I see online or are they owned by other.",
        answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
        question:
            "Does BoxCar own the cars I see online or are they owned by other.",
        answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
];

export const validationData = {
    Model: {
        required: "This field is required",
    },
    Brand: {
        required: "This field is required",
    },
    Price: {
        required: "This field is required",
    },
    "Top Speed": {
        required: "This field is required",
    },
    Year: {
        pattern: {
            value: /^(19[0-9][0-9]|20[0-2][0-9]|202[0-4])$/s,
            message: "Enter a right year between 1900 to current year",
        },
        required: "This field is required",
    },
    Image: {
        required: "This field is required",
        pattern: {
            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/,
        },
    },
    Description: {
        required: "This field is required",
    },
};
