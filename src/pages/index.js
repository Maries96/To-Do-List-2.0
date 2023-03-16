import { MyToDoList } from "@/components/MyToDoList";
import Link from "next/link";


export default function Home() {
  return (
    <div className="container">
      <h1>My To Do List!</h1>
           <div><Link href="/about">About us</Link></div>
            <div><Link href="/contacts">Contact us!</Link></div>
            <div><Link href="/post">Blog</Link></div>

      <div className="TheList">
      <MyToDoList />
      </div>
    </div>
  );
}

