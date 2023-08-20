function Tablerow(props: any): HTMLTableRowElement {
  return (
    <tr>
      <td>{props.e.name}</td>
      <td>{props.e.phone_no}</td>
      <td>{props.e.email}</td>
    </tr>
  );
}
export default Tablerow;
