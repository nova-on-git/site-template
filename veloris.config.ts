export default {
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

    sections: {
        base: {
            switch: true,
            order: 1,
            pages: [
                {
                    name: "home",
                    url: "/admin",
                    icon: "mdi:home-outline",
                },
            ],
        },

        store: {
            switch: true,

            settings: {
                categories: true,
            },

            order: 2,
            pages: [
                {
                    name: "your store front",
                    url: "/admin/store",
                    icon: "material-symbols:storefront-outline",

                    subpages: [
                        {
                            name: "Add Item",
                            url: "/admin/store/products/add-item",
                        },
                    ],
                },

                {
                    name: "orders",
                    url: "/admin/store/orders",
                    icon: "material-symbols:order-approve-outline",
                },
            ],
        },
        blogs: {
            switch: true,
            order: 3,
            pages: [
                {
                    name: "blogs",
                    url: "/admin/blogs",
                    icon: "ph:article-ny-times",
                },
            ],
        },
        settings: {
            switch: true,
            order: 4,
            pages: [
                {
                    name: "site settings",
                    url: "/admin/settings",
                    icon: "material-symbols:settings-outline",
                },
            ],
        },

        galleries: {
            switch: true,
            order: 5,
            pages: [
                {
                    name: "galleries",
                    url: "/admin/galleries",
                    icon: "maki:art-gallery",
                },
            ],
        },
        dev: {
            switch: true,
            order: 15,
            pages: [
                {
                    name: "dev",
                    url: "/admin/dev",
                    icon: "game-icons:bandit",
                },
            ],
        },
        newsletter: {
            switch: true,
            order: 6,
            pages: [
                {
                    name: "newsletter",
                    url: "/admin/newsletter",
                    icon: "ic:outline-newspaper",
                },
            ],
        },
        customerSupport: {
            switch: true,
            order: 7,
            pages: [
                {
                    name: "support",
                    url: "/admin/support",
                    icon: "material-symbols:support-agent",
                },
            ],
        },
    },
} as VelorisConfig
