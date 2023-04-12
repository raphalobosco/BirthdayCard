const List = ({ people }) => {
  return (
    <div className="d-flex align-items-center mb-3 gap-3 text-left p-2">
      <div className="people">
        <img className="img" src={people.image} />
      </div>
      <div>
        <h3>{people.name}</h3>
        <p>{people.age} years old</p>
      </div>
    </div>
  );
};

export default List;
