export type CarStyle = {
    id: number;
    title: string;
    src: string;
};

export type CarsInfo = {
    id: number;
    model: string;
    brand: string;
    price: number;
    discountedPrice: number;
    manufactureYear: number;
    topSpeed: number;
    type: string;
    transmission: string;
    condition: string;
    fuel: string;
    description: string;
    image: string;
};

export type BuyOrSell = {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    icon: string;
    color: string;
    buttonColor: string;
    path: string;
};

export type FooterData = [
    Company: string[],
    QuickLinks: string[],
    OurBrands: string[],
    VehicleTypes: string[]
];

export type CarOverviewInfo = {
    icon: string;
    text: string;
    description: number | string | undefined;
};

export type Message = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    message: string;
};

export type LatestCarProps = {
    CarsArray: CarsInfo[];
};

export type Validation = {
    string: { string: string };
};

export type CarsKeyValue = [string, CarsInfo][];

export type Customers = {
    title: string;
    description: string;
    img: string;
    name: string;
    socialMedia: string;
};

export type Faq = {
    question: string;
    answer: string;
};

export type GetInTouchItems = {
    title: string;
    icon: string;
    description: string;
};

export type Office = {
    name: string;
    address: string;
    mapLink: string;
    email: string;
    phone: string;
};
