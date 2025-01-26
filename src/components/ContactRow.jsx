function ContactRow(props) { 
   

return <>
 <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phone}</td>
    </tr>
</>
}

export default ContactRow 