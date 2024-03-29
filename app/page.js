import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("myapp");
  let result = await db.collection("board").find().toArray();
  console.log(result);

  return <div>메인</div>;
}
