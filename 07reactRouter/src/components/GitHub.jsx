import { React, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
    const data = useLoaderData()

    /* // No need of useEffect as we are using Loader of react-router
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/Its-sunny69")
            .then((res) => res.json())
            .then((res) => setData(res))
    }, [])
    */

    return (
        <>
            <section class="px-2 py-10 md:px-0">
                <div class="mx-auto max-w-4xl">
                    <div class="md:flex md:items-center md:justify-center md:space-x-14">
                        <div class="relative h-48 w-48 flex-shrink-0">
                            <img
                                class="relative h-48 w-48 rounded-full object-cover"
                                src={data.avatar_url}
                                alt="user-pic"
                            />
                        </div>
                        <div class="mt-10 md:mt-0">
                            <blockquote>
                                <p class="text-xl text-black">
                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                    aliquam repellat laborum minima tempore deserunt explicabo placeat!
                                    Fugit, molestias nesciunt.”
                                </p>
                            </blockquote>
                            <p class="mt-7 text-lg font-semibold text-black">{data.login}</p>
                            <p class="mt-1 text-base text-gray-600"> Followers: {data.followers}</p>
                            <p class="mt-1 text-base text-gray-600"> Created On: {data.created_at}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}