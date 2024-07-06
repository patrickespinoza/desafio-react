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
  
  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <main className="flex justify-center items-center min-h-screen gap-6">
      <article className="p-6 max-w-7xl w-full text-center">
        <div className="relative"> 

        {post.image && (
          <img className="w-full h-auto rounded-lg mb-4" src={post.image} alt="Post Image" />
        )}
         <img src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${post._id}`} alt="post id imagen" className='ml-4 h-8 w-8 object-cover rounded-full'/>
        </div>

         <p className='text-left mb-2'>{formatDate(post.createdate)}</p>
        <p className="flex justify-between mb-2">&#128588; &#128150; &#129327; &#128293; </p>
        <h1 className="font-bold mb-2 text-3xl">{post.title}</h1>
        <p className="text-gray-700 mb-2 p-6 text-2xl">{post.body}</p>
      </article>
    </main>
  );
}
