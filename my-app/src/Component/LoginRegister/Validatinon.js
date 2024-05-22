export default function Validation(values) {
    const error = {}

    const email_pattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-z]+\.[a-z]{2,3}$/;
    const Number_pattern = /^[6-9]\d{1}[0-9]\d{7}$/;

    if (values.FirstName === "") {
        error.FirstName = "First Name is Required";
    }
    if (values.LastName === "") {
        error.LastName = "Last Name is Requires";
    }
    if (values.Email === "") {
        error.Email = "Email is required"
    }
    else if (!email_pattern.test(values.Email)) {
        error.Email = "Email is  in-correct"
    }

    if (values.PhoneNumber === "") {
        error.PhoneNumber = "PhoneNumber is required"
    }
    else if (!Number_pattern.test(values.PhoneNumber)) {
        error.PhoneNumber = "Phone number is  in-correct"

    }
    return error;
}