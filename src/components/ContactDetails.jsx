

function ContactDetails({contact}) {
    console.log (contact)

    if ( contact !== null) {
       return <>
        <h1>Contact Details</h1>
        <p>
            {contact.name}
        </p>
        <p>
            {contact.address.street}
        </p>
        <p>
            {contact.email}
        </p>
        <p>
            {contact.name}
        </p>
    </>
    }
}

export default ContactDetails