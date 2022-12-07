import Detail from "./pages/Detail.vue";
import Shipping from "./pages/Shipping.vue";
import ShippingList from "./pages/ShippingList.vue";

export default[
    {
        path: "/detail",
        component : Detail,
    },
    {
        path: "/shipping",
        component : Shipping,
    },
    {
        path: "/shippingList",
        component: ShippingList,
    },
];