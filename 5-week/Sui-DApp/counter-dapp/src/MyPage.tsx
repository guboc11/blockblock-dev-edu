import { Counter } from "./Counter";
import { CreateCounter } from "./CreateCounter";

function MyPage() {
  return (
    <>
    <div>Blockblock</div>

    <CreateCounter onCreated={(id)=>{
        console.log("카운가 생성되었습니다.", id);
    }}></CreateCounter>


    {/* <CreateCounter onCreated={()=>{
        console.log("카운터가 생성되었습니다.");
    }}></CreateCounter> */}
    {/* <Counter></Counter> */}
    </>
  )
}

export default MyPage;
