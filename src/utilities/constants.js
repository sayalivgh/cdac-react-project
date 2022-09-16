
export const messages = {
    emailAddressErrorMsg: "Please provide valid email address.",
    passwordErrorMsg: "Please provide valid Password."
}
export const regexPatterns = {
    emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}
export const customerMenuLinks = [
    {
        name: 'customers',
        link: 'customers'
    },
    {
        name: 'customer orders',
        link: 'customer-orders'
    },
    {
        name: 'customer payment',
        link: 'customer-payment'
    },
    {
        name: 'quotation customer',
        link: 'quotation-customer'
    }
]

export const supplierMenuLink = [
    {
        name: 'quotation supplier',
        link: 'quotation-supplier'
    },
    {
        name: 'supplier payment',
        link: 'supplier-payment'
    },
]