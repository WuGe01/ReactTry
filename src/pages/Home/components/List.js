import Item from "./Item";
const List = ({ listData, delDate }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            delDate={delDate}
          />
        );
      })}
    </div>
  );
};
export default List;
