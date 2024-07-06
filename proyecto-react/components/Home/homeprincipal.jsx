import { getPost, getPostById } from '@/pages/api/Api';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function HomePrincipal() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const postget = async () => {
        try {
          const fetchedPosts = await getPost();
          console.log('Fetched posts:', fetchedPosts); 
          if (Array.isArray(fetchedPosts)) {
            setPosts(fetchedPosts);
          } else {
            throw new Error('Expected an array of posts');
          }
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      postget();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

    const formatDate = (dateString) => {
      const options = { month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('es-ES', options);
    };
  
    return (
      <div className="container mx-auto p-4 ">
        <div className="flex text-start text-2xl mb-5">
          <h1 className="font-bold mr-4">Relevant</h1>
          <h2 className="mr-4">Latest</h2>
          <h2 >Top</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {posts.length === 0 ? (
            <p>No posts available</p>
          ) : (
            posts.map((post, index) => (
              <div key={post._id} className="border p-4 rounded-lg flex flex-col justify-between min-h[400px]">
                <div>

                    {index === 0 && post.image && (<img src={post.image} alt="Post Image" className="mb-4 h-70 w-full object-cover rounded-lg" />)}
                    <img src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${post._id}`} alt="post id imagen" className='mb-4 h-8 w-8 object-cover rounded-full'/>

                    <p className='mb-2'>{formatDate(post.createdate)}</p>

                    <h2 className="font-bold text-xl mb-2">
                      <Link href={`/${post._id}`}>
                    <h3 className=" hover:text-blue-700">{post.title}</h3>
                        
                      </Link>
                    </h2>
                  </div>
                    <div className='flex flex-row items-center mt-4'>
                    <p className='mr-2'>&#128588; &#128150; &#129327; &#128293; </p>
                    <p className='mr-2'>10 Reactions</p>
                    <p className='mr-2'> 	&#128172; 4 comment </p>
                    <p> 3 min read</p>

                  </div>
                </div>
            ))
          )}
        </div>
      </div>
    );
  }
  