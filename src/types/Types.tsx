export type CarStyle = {
    id: number;
    title: string;
    src: string;
};

export type CarsInfo = {
    id: number;
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
