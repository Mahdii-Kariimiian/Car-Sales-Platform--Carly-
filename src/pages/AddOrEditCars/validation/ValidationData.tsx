const validationData = {
    model: {
        required: "This field is required",
    },
    brand: {
        required: "This field is required",
    },
    price: {
        required: "This field is required",
    },
    topSpeed: {
        required: "This field is required",
    },
    manufactureYear: {
        pattern: {
            value: /^(19[0-9][0-9]|20[0-2][0-9]|202[0-4])$/s,
            message: "Enter a right year between 1900 to current year",
        },
        required: "This field is required",
    },
    image: {
        required: "This field is required",
        pattern: {
            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/,
        },
    },
    description: {
        required: "This field is required",
    },
    discountedPrice: {},
};

export default validationData;
