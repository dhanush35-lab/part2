const Course = ({ course }) => {
    return (
      <div>
        {course.map((courses) => (
          <div key={courses.id}>
            <Header course={courses.name} />
            <Content content={courses.parts} />
            <Total total={courses.parts} />
          </div>
        ))}
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
  }
  
  const Content = ({ content }) => {
    return (
      <div>
        {content.map((part) => (
          <Part key={part.id} excercise={part} />
        ))}
      </div>
    )
  }
  
  const Part = ({ excercise }) => {
    return (
      <div>
        <p>
          {excercise.name} {excercise.exercises}
        </p>
      </div>
    )
  };
  
  const Total = ({ total }) => {
    const total_result = total.reduce((s, p) => s + p.exercises, 0)
    return (
      <div>
        <p><b>total of {total_result} exercises</b></p>
      </div>
    )
  }
  
export default Course