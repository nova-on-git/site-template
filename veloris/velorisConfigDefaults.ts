export default {
  sectionSwitches: {
    base: true,
    store: true,
    blogs: true,
    settings: true,
    galleries: true,
    dev: true,
    newsletter: false,
    customerSupport: false,
    clients: true,
    projects: true,
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

  sections: {
    subheaders: {
      "main menu": {
        base: {
          order: 1,
          pages: [
            {
              name: "home",
              url: "/admin",
              icon: "material-symbols:dashboard",
            },
          ],
        },

        clients: {
          order: 2,
          pages: [
            {
              name: "Veloris Clients",
              url: "/admin/clients",
              icon: "hugeicons:manager",
            },
          ],
        },

        projects: {
          order: 2,
          pages: [
            {
              name: "My Projects",
              url: "/admin/projects",
              icon: "mdi:hammer-screwdriver",
            },
          ],
        },

        store: {
          settings: {
            categories: true,
          },

          order: 2,
          pages: [
            {
              name: "your store front",
              url: "/admin/store",
              icon: "material-symbols:storefront-outline",
            },

            {
              name: "orders",
              url: "/admin/store/orders",
              icon: "material-symbols:order-approve-outline",
            },
          ],
        },
        blogs: {
          order: 3,
          pages: [
            {
              name: "blogs",
              url: "/admin/blogs",
              icon: "material-symbols:ink-pen",
            },
          ],
        },
        galleries: {
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
          order: 6,
          pages: [
            {
              name: "newsletter",
              url: "/admin/newsletter",
              icon: "ic:outline-newspaper",
            },
          ],
        },
      },
      "help and support": {
        settings: {
          order: 4,
          pages: [
            {
              name: "site settings",
              url: "/admin/settings",
              icon: "material-symbols:settings-outline",
            },
          ],
        },

        customerSupport: {
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
    },
  },
} as VelorisConfig;
