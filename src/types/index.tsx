export type CarStyle = {
    id: number;
    title: string;
    src: string;
};

export type CarsInfo = {
    id: number;
    createdAt?: string;
    updatedAt?: string;
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

export type message = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    message: string;
};

export type LatestCarProps = {
    firstNumber?: number;
    lastNumber?: number;
    setCarsLength?: React.Dispatch<React.SetStateAction<number>>;
    setParam?: React.Dispatch<React.SetStateAction<string | undefined>>;
    sortedList?: (cars: CarsInfo[] | undefined) => CarsInfo[] | undefined;
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
