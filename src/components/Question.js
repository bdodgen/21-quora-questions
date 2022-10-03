const Question = (props) => {
  return (
    <div>
      <dl>{props.question}</dl>
      <dd>{props.answer}</dd>
    </div>
  )
}

export default Question;