import React, {useEffect,useState} from "react";
import { useParams } from "react-router";
import ImageUrlBuilder from "@sanity/image-url";
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
const builder = ImageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function SinglePost(){
    const [singlePost,setSinglePost] = useState(null);
    const {slug} = useParams();
    useEffect(()=>{
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name":author -> name,
            "authorImage":author->image
        }`).then((data)=>setSinglePost(data[0]))
        .catch(console.error)
    },[slug]);

    if(!singlePost) return <div>No Posts!</div>;

    return(
        <main className="bg-grey-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-200 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex justify-center text-grey-800">
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 roundef-full" />
                                <p className="cursive flex items-center pl-2 text-2xl">
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title}  className="w-full object-cover rounded-top" style={{height:"400px"}}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-width-full">
                    <BlockContent 
                    blocks={singlePost.body}
                    projectId="vc0ochrt"
                    dataset="production"/>
                </div>
            </article>
        </main>
    );
}