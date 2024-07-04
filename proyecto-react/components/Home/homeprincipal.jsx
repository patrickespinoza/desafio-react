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
  
    return (
      <div className="container">
        <div className="flex text-start text-2xl">
          <h1 className="text-center mb-5 font-bold mr-4">Relevant</h1>
          <h2 className="flex mr-4">Latest</h2>
          <h2 className="flex- mr-4">Top</h2>
        </div>
        <div className="row">
          {posts.length === 0 ? (
            <p>No posts available</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="col-md-12 mb-4 border border-blue-500">
                <div className="card">
                  <div className="card-body">
                    {post.image && <img src={post.image} alt="Post Image" className="mb-4" />}
                    <h2 className="card-title">
                      <Link href={`/${post._id}`}>
                        <span>detail</span>
                      </Link>
                    </h2>
                    <p>{new Date(post.createdate).toLocaleDateString()}</p>
                    <h3 className="card-subtitle mb-2 text-muted font-bold text-2xl">{post.title}</h3>
                    <p className="card-text">{post.body}</p>
                    <p>Author: {post.user?.name || 'Unknown'}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  