export interface Pattern {
    value: RegExp;
    message?: string;
}

export interface FieldValidation {
    required?: string;
    pattern?: Pattern;
}

export type ValidationType = {
    model: FieldValidation;
    brand: FieldValidation;
    price: FieldValidation;
    topSpeed: FieldValidation;
    manufactureYear: FieldValidation;
    image: FieldValidation;
    description: FieldValidation;
    discountedPrice: FieldValidation;
};
