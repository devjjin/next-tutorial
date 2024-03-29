import Link from 'next/link';

export default function ListItem(props) {
  const { result } = props;

  return (
    <div className="list-bg">
      {result?.map((item, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
