function List(props) {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(item => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h2 className="heading">{category}</h2>
      <ul className="listcontent">{listItems}</ul>
    </>
  );
}

export default List;
