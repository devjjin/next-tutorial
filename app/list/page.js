import { connectDB } from '@/util/database';
import ListItem from './ListItem';

export default async function List() {
  const db = (await connectDB).db('myapp');
  let result = await db.collection('board').find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
