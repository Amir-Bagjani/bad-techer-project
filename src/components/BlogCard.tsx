
interface Blog {
    blog: {
        id: number;
        img: string;
        title: string;
        body: string;
    }
}

const BlogCard: React.FC<Blog> = ({blog}) => {
  return (
    <div className="box">
        <img src={blog.img} alt="blog" />
        <div className="content">
            <div className="icons">
            <a href="#"><i className="fas fa-user"></i> by user</a>
            <a href="#"><i className="fas fa-calendr"></i> 1st may, 2020</a>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <a href="#" className="btn">ادامه مطلب</a>
        </div>
    </div>
  )
}

export default BlogCard