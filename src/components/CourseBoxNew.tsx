interface Item {
  id: number;
  image: string;
  title: string;
  body: string;
}

interface CourseCardProps {
  items: Item[];
}

const CourseBoxNew = ({ items }: CourseCardProps) => {
  return (
    <>
      {items.map((item) => (
        <div className="boxx" key={item.id}>
          <div className="image">
            <img src={item.image} alt="course" />
          </div>
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.body.slice(0, 80)} ...</p>
            <button className="content-btn">بیشتر</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseBoxNew;
