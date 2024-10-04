export default {
    sectionSwitches: {
        base: true,
        store: true,
        blogs: true,
        settings: true,
        galleries: true,
        dev: true,
        newsletter: true,
        customerSupport: true,
    },

    // Define store item data structure //
    itemFormStruct: {
        categories: false,
        quantity: true,

        fields: [
            { name: "name", type: "input" },
            { name: "Description", type: "textarea" },
            {
                name: "price",
                type: "_inline",
                order: 4,
                fields: [
                    { name: "price", type: "input" },
                    { name: "price", type: "input" },
                ],
            },
            {
                name: "size",
                type: "radio",
                values: ["s", "m", "l", "xl", "2xl"],
                order: 3,
                style: "inline-box",
            },
        ],
    },
} as VelorisConfig
