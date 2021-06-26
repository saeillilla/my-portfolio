import React from "react";
import image from "../background.jpg"
export default function Home(){
    return (
    <main>
        <img src={image} alt="background-images" className="absolute object-cover w-full h-full" />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-6xl text-green-800 font-bold cursive leading-none lg:leading-snug home-name">Aloha.I'm Saeil Lilla M Y</h1>
        </section>
    </main>
        )
}