function ContactRow(props) { 

function handleClick () {
props.setContact (props.contact) 
}

return <>
 <tr onClick={handleClick}>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phone}</td>
    </tr>
</>
}

export default ContactRow 

