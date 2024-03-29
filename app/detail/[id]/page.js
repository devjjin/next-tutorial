import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function detail(props) {
  const db = (await connectDB).db('myapp');
  let result = await db
    .collection('board')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <div>상세페이지</div>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
    </div>
  );
}
