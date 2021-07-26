import Layout from "../component/Layout";
import Post from  "../component/Post"
import {getAllPostData} from "../lib/posts";

const Blog = ({posts}) => {
    return <Layout title="Blog">

        <ul className="m-10">
            {posts && posts.map((post) => <Post key={post.id} post ={post} />)}
        </ul>

    </Layout>
};

export default Blog;


// サーバーサイド実行時に呼び出される
//ビルド時にサーバーサイドで一回だけ呼び出される
export async function getStaticProps(){
    const posts =await  getAllPostData();
    return{
        props:{posts}
    }
}