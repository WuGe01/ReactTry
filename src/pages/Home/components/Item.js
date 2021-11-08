const Item = ({ note, date, time,delDate,id }) => {
  function delItem() {
    window.alert("刪除成功");
    delDate(function (prev) {
      return prev.filter(item => item.id !==id )
    })
  };
  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={delItem} className="remove">刪除</button>
    </div>
  );
};
export default Item;
