export default function CourseCard({ course }) {
  return (
    <div className="content">
      <div className="image-card">
        <img src={course.image} alt={course.alt} />
      </div>
      <span className="title">{course.title}</span>
      <img className="rate" src={course.rating} alt="rating" />
      <span className="dif-color">Enroll Today -&gt;</span>
    </div>
  );
}
