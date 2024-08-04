const validation = {
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

export default validation;
