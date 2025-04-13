const stepperConfig = [
    {
        name: "Customer Info",
        Component: () => <div>Provide your contact details.</div>,
    },
    {
        name: "Shipping Info",
        Component: () => <div>Enter your shipping address.</div>,
    },
    {
        name: "Payment",
        Component: () => <div>Complete payment for your order.</div>,
    },
    {
        name: "Delivered",
        Component: () => <div>your order has been delivered.</div>,
    },
];

export default stepperConfig;
