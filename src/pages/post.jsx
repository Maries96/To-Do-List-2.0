import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter();
    return(
        <div>
            <h1>Here is a random picture!{router.query.id}</h1>
            <p>
            <img src="https://picsum.photos/200"></img>
            </p>
        </div>
    );
};
export default Post;