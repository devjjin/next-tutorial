export default function ListItem(props) {

  const { result } = props;
  
  return (
    result?.map((el, i) => (
      <div className="list-item" key={i}>
        <h4>{el.title}</h4>
        <p>1월 1일</p>
      </div>
   ))
  )
}