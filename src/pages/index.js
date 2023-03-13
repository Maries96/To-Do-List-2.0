import { MyToDoList } from "@/components/MyToDoList";


export default function Home() {
  return (
    <div className="container">
      <h1>My To Do List!</h1>
      <div className="TheList">
      <MyToDoList />
      </div>
    </div>
  );
}

