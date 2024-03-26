// import React from 'react'
// import Card from './Card';
// const Cards = (props) => {
//     let courses = props.courses;
//     function getCourses() {
//         let allCourses = [];
//         Object.values(courses).forEach ( array => {
//             array.forEach(courseData => {
//                 allCourses.push(courseData);
//             })
//         })
//         return allCourses;

//     }
//   return (
//     <div>{
//         getCourses().map((course) => {
//             <Card key={course.id} course={course}/>
//         })
//     }
//     </div>
//   )
// }
// export default Cards; 




import React from 'react';
import Card from './Card';

const Cards = ({ courses }) => {
  function getCourses() {
    if (!courses) return []; // Ensure courses is not null
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }

  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
