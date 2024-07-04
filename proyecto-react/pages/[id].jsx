import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getPostById } from "./api/Api";


export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPostById(id);
        setPost(fetchedPost);
      } catch (error) {
        console.error("[getPostById error]", error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-black p-4 text-black">
      <article className="bg-white/70 rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        {post.image && (
          <img className="w-full h-auto rounded-lg mb-4" src={post.image} alt="Post Image" />
        )}
        <p className="text-gray-700 mb-2 p-6">{post.body}</p>
        <p className="text-gray-700 mb-2 text-start p-2">Author: {post.user?.name || "Unknown"}</p>
        <p className="text-gray-700 mb-2 text-start p-2">Created Date: {new Date(post.createdate).toLocaleDateString()}</p>
        <p className="text-gray-700 mb-2 text-start p-2">Updated Date: {new Date(post.updatedate).toLocaleDateString()}</p>
      </article>
    </main>
  );
}
