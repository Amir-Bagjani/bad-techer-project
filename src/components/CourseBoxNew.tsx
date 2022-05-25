interface Data {
  id: number;
  image: string;
  title: string;
  body: string;
}
interface CourseBoxNewProps {
  data: Data;
  h4?: string;
}

const CourseBoxNew = ({ data, h4 }: CourseBoxNewProps) => {
  return (
    <div className={h4 ? "course-box active" : "course-box"}>
      <div className="image">
        <img src={data.image} alt="course" />
      </div>
      <div className="content">
        <div>
          <h3>{data.title}</h3>
          <h4>{h4}</h4>
        </div>
        {h4 && <p>{data.body} </p>}
        {!h4 && <p className="active">{data.body} </p>}
        {!h4 && <button className="content-btn">بیشتر</button>}
      </div>
    </div>
  );
};

export default CourseBoxNew;
