export type CarStyle = {
    id: number;
    title: string;
    src: string;
};

export type CarsInfo = {
    id: number | string;
    Model: string;
    Brand: string;
    Price: number;
    Discount: number;
    Year: number;
    "Top Speed": number;
    Type: string;
    Transmission: string;
    Condition: string;
    Fuel: string;
    Description: string;
    Image: string;
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
    question: string ;
    answer : string;
}