import Navbar from "../components/Navbar";
import Section from "../components/Section";

const popularCourse = { id: 1, image: "images/course-img1.gif", title: "دوره Node.js نود جی اس", body: "آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپردازیم" };

const {id, image, title, body} = popularCourse;


const CourseDetailPage = () => {
  return (
    <>
 <Navbar />
    <Section id="course-detail-page">

        <header className="course-detail-page-header">
            <div className="box">
                <img src={image} alt="course" />
                <div className="content">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
            </div>
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
            dasdas <br />
        </header>

    </Section>
    </>
  )
}

export default CourseDetailPage