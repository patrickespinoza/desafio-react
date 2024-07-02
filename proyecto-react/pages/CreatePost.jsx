import Link from "next/link";
import { useState } from "react";
import { createPost } from "./api/Api";

export default function Createpost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [coverImage, setCoverImage] = useState(''); 
  
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleCoverImageChange = (e) => {
        setCoverImage(e.target.value);
    };
  
    const handlePublish = async () => {
      const postData = {
        title: title,
        body: body,
        image: coverImage
      };
     
      try {
        const result = await createPost(postData);
        console.log(result);
      } catch (error) {
        console.error('Error:', error);
      }
      setTitle('');
      setBody('');
      setCoverImage('')
    };

    return (
        <main className="min-h-screen flex flex-col">
            <div>
                <nav className="flex flex-row items-center justify-between p-4">
                    <h2 className="flex items-initial mr-auto text-2xl font-bold">Create Post</h2>
                    <p className="mr-4 text-2xl font-bold">Edit</p>
                    <p className="mr-4 text-2xl">Preview</p>
                    <Link href="/"> 
                    <button className="mr-4 text-3xl font-bold">X</button>
                    </Link>
                </nav>
            </div>
            <div className="flex items-start px-4 p-5">
                <input className="border border-gray-400 px-12 py-2 text-lg rounded-md"
                placeholder="Add a cover image"
                value={coverImage}
                onChange={handleCoverImageChange}></input>
            </div>
            <div className="px-4">
                <h2 className="text-4xl font-semibold mb-4 ">New post title here...</h2>
                <input type="text" className="w-full mb-6 p-2 text-lg rounded-md border border-gray-400" placeholder="Add up to 4 tags..."
                value={title}
                onChange={handleTitleChange} />
            </div>
            <div className="flex flex-wrap px-4">
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=99514&format=png&color=000000" alt="bold" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=0ON3jVVZ6Nhf&format=png&color=000000" alt="italic" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=85777&format=png&color=000000" alt="link" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=8800&format=png&color=000000" alt="orderlist" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=11266&format=png&color=000000" alt="unordered list" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=111028&format=png&color=000000" alt="heading" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=38970&format=png&color=000000" alt="quote" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=11240&format=png&color=000000" alt="code" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=87276&format=png&color=000000" alt="code block" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=17439&format=png&color=000000" alt="embed" />
               <img className="w-8 h-8 mr-4 mb-4" src="https://img.icons8.com/?size=100&id=53433&format=png&color=000000" alt="image" />
            </div>
            <div className="px-4 mb-8">
                <input type="text" className="w-full h-96 p-4 border border-gray-400 rounded-md" placeholder="Write your post contetnt here..."
                value={body}
                onChange={handleBodyChange} />
            </div>
            <footer className=" mt-auto flex space-x-3 items-center px-4 py-4 border-t border-gray-300">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handlePublish}>Publish</button>
                <div className="flex space-x-4">
                <p className="hover:text-blue-500 cursor-pointer">Save draft</p>
                <img className="h-8 w-8 hover:bg-blue-500" src="https://img.icons8.com/?size=100&id=83214&format=png&color=000000" alt="engranaje"/>
                <p className="hover:text-blue-500 cursor-pointer">Revert new changes</p>
                </div>
            </footer>
        </main>
    )
}