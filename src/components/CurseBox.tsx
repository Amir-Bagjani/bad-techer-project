const CurseBox = () => {
  return (
    <div className="box">
      <img src="images/course.jpg" alt="course-image" />
      <div className="box-content">
        <h5>دوره Node.js نود جی اس</h5>
        <p>
          آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و
          پیاده سازی یک نرم افزار تحت وب کامل میپردازیم
        </p>
      </div>
      <div className="box-footer">
        <img src="images/user.svg" alt="user" />
        <span className="author-name">Bad Teacher (Sina)</span>
        <span className="price ">150 $</span>
      </div>
    </div>
  );
};

export default CurseBox;
