const Listitem = (props) => {
  return (
    <>
      {props.stus.map((item) => (
        <tr key={item.id}>
          <td>{item.attributes.name}</td>
          <td>{item.attributes.age}</td>
        </tr>
      ))}
    </>
  );
};

export default Listitem;
