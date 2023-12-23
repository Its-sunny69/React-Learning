import React from "react";

export default function Home() {
    return (
        <div class="relative w-full bg-white">
            <div class="mx-auto flex max-w-7xl lg:px-8">
                <div class="flex items-center justify-center rounded-lg p-4">
                    <img class="aspect-auto w-full object-cover" src="https://img.freepik.com/free-vector/telework-concept-illustration_114360-5389.jpg?w=740&t=st=1703329791~exp=1703330391~hmac=bb3e2ad3c86951e3e647148a36b7abdf8ae74899b8644f44e968658d9372e684" alt="image" />
                </div>
                <div class="flex flex-col justify-center px-4 py-10 lg:px-6">
                    <h1 class="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">People who really cares about your business</h1>
                    <p class="mt-8 max-w-3xl text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?</p>
                    <div class="mt-8">
                        <button type="button" class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center rounded-lg p-4">
                <img class="aspect-auto w-2/4 object-cover" src="https://img.freepik.com/free-vector/partnership-concept-illustration_114360-5994.jpg?w=740&t=st=1703330390~exp=1703330990~hmac=9f46a0fec5814e1c234d186edf6ab4942674422beab218a295304ebbe42b5c2e" alt="image" />
            </div>
        </div>

    )
}