import CourseCard from "./CourseCard.jsx";
import { courses } from "../data/courses.js";

export default function CardsGrid() {
  return (
    <div className="cards-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
