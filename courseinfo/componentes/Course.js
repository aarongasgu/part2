

const Header = (props) => <h2>{props.courseHeader.name}</h2>

const Total = (props) => {
  const partes = props.courseTotal.parts
  console.log(partes)
  const total = partes.map(ex => ex.exercises)
  return (
    <p><strong>Total de ejercicios: {total.reduce((s, p) => s + p)}</strong></p>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <p>{props.partsC.name}: {props.partsC.exercises}</p>
  )
}

const Content = (props) => {
  const partes = props.courseContent.parts.map(parte => <Part key={parte.id} partsC={parte} />)
  return(<div>{partes}</div>)
}

const Course = (props) => {
  console.log(props)
  return(
    <div>
      <Header courseHeader={props.courseCourse} />
      <Content courseContent={props.courseCourse} />
      <Total courseTotal={props.courseCourse} />
    </div>
  )
}

export default Course