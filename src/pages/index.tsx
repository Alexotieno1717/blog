import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
} from "react";

export default function Home({ articles }: any) {
  console.log(articles.articles);
  return (
    <main className="min-h-screen">
      <section className="px-6 py-8">
        <nav className="md:flex md:justify-between md:items-center">
            <div>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16" />
                </Link>
            </div>

            <div className="mt-8 md:mt-0">
                <Link href="/" className="text-xs font-bold uppercase">Home Page</Link>

                <Link href="#" className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                    Subscribe for Updates
                </Link>
            </div>
        </nav>

        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest <span className="text-blue-500">Laravel From Scratch</span> News
            </h1>

            <h2 className="inline-flex mt-2">By Lary Laracore <img src="/images/lary-head.svg"
                                                               alt="Head of Lary the mascot" /></h2>

            <p className="text-sm mt-14">
                Another year. Another update. We are refreshing the popular Laravel series with new content.
                I am going to keep you guys up to speed with what is going on!
            </p>

            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-8">
               {/* Category  */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold">
                        <option value="category" disabled selected>Category
                        </option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>

                    <svg className="transform -rotate-90 absolute pointer-events-none"
                         height="22" viewBox="0 0 22 22">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path fill="#222"
                                  d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"></path>
                        </g>
                    </svg>
                </div>

                 {/* Other Filters */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold">
                        <option value="category" disabled selected>Other Filters
                        </option>
                        <option value="foo">Foo
                        </option>
                        <option value="bar">Bar
                        </option>
                    </select>

                    <svg className="transform -rotate-90 absolute pointer-events-none"
                         height="22" viewBox="0 0 22 22">
                        <g fill="none" fill-rule="evenodd">
                            <path stroke="#000" stroke-opacity=".012" stroke-width=".5" d="M21 1v20.16H.84V1z">
                            </path>
                            <path fill="#222"
                                  d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"></path>
                        </g>
                    </svg>
                </div>

                 {/* Search */}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
                    <form method="GET" action="#">
                        <input type="text" name="search" placeholder="Find something"
                               className="bg-transparent placeholder-black font-semibold text-sm" />
                    </form>
                </div>
            </div>
        </header>

        <main className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
            <article
                className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                <div className="py-6 px-5 lg:flex">
                    <div className="flex-1 lg:mr-8">
                        <img src="/images/illustration-1.png" alt="Blog Post illustration" className="rounded-xl" />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        <header className="mt-8 lg:mt-0">
                            <div className="space-x-2">
                                <a href="#"
                                   className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                   >Techniques</a>

                                <a href="#"
                                   className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                   >Updates</a>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-3xl">
                                    This is a big title and it will look great on two or even three lines. Wooohoo!
                                </h1>

                                <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                            </div>
                        </header>

                        <div className="text-sm mt-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <p className="mt-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>

                        <footer className="flex justify-between items-center mt-8">
                            <div className="flex items-center text-sm">
                                <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                <div className="ml-3">
                                    <h5 className="font-bold">Lary Laracore</h5>
                                    <h6>Mascot at Laracasts</h6>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <a href="#"
                                   className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                >Read More</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>

            <div className="lg:grid lg:grid-cols-2">
                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5">
                        <div>
                            <img src="/images/illustration-1.png" alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="mt-8 flex flex-col justify-between">
                            <header>
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                      >Techniques</a>

                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                    >Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                    <div className="ml-3">
                                        <h5 className="font-bold">Lary Laracore</h5>
                                        <h6>Mascot at Laracasts</h6>
                                    </div>
                                </div>

                                <div>
                                    <a href="#"
                                       className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>

                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5">
                        <div>
                            <img src="/images/illustration-2.png" alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="mt-8 flex flex-col justify-between">
                            <header>
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                       >Techniques</a>

                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                      >Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                    <div className="ml-3">
                                        <h5 className="font-bold">Lary Laracore</h5>
                                        <h6>Mascot at Laracasts</h6>
                                    </div>
                                </div>

                                <div>
                                    <a href="#"
                                       className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>
            </div>

            <div className="lg:grid lg:grid-cols-3">
                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5">
                        <div>
                            <img src="/images/illustration-3.png" alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="mt-8 flex flex-col justify-between">
                            <header>
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                      >Techniques</a>
                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                      >Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                    <div className="ml-3">
                                        <h5 className="font-bold">Lary Laracore</h5>
                                        <h6>Mascot at Laracasts</h6>
                                    </div>
                                </div>

                                <div>
                                    <a href="#"
                                       className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >Read More</a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>

                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5">
                        <div>
                            <img src="/images/illustration-4.png" alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="mt-8 flex flex-col justify-between">
                            <header>
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                    >Techniques</a>

                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                    >Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                    <div className="ml-3">
                                        <h5 className="font-bold">Lary Laracore</h5>
                                        <h6>Mascot at Laracasts</h6>
                                    </div>
                                </div>

                                <div>
                                    <a href="#"
                                       className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>

                <article
                    className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div className="py-6 px-5">
                        <div>
                            <img src="/images/illustration-5.png" alt="Blog Post illustration" className="rounded-xl" />
                        </div>

                        <div className="mt-8 flex flex-col justify-between">
                            <header>
                                <div className="space-x-2">
                                    <a href="#"
                                       className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                    >Techniques</a>
                                    <a href="#"
                                       className="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                    >Updates</a>
                                </div>

                                <div className="mt-4">
                                    <h1 className="text-3xl">
                                        This is a big title and it will look great on two or even three lines. Wooohoo!
                                    </h1>

                                    <span className="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>

                            <div className="text-sm mt-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <footer className="flex justify-between items-center mt-8">
                                <div className="flex items-center text-sm">
                                    <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                                    <div className="ml-3">
                                        <h5 className="font-bold">Lary Laracore</h5>
                                        <h6>Mascot at Laracasts</h6>
                                    </div>
                                </div>

                                <div>
                                    <a href="#"
                                       className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </div>
                </article>
            </div>
        </main>

        <footer className="bg-gray-100 border border-black border-opacity-5 rounded-xl text-center py-16 px-10 mt-16">
            <img src="/images/lary-newsletter-icon.svg" alt="" className="mx-auto -mb-6" style={{"width": 145}} />
            <h5 className="text-3xl">Stay in touch with the latest posts</h5>
            <p className="text-sm mt-3">Promise to keep the inbox clean. No bugs.</p>

            <div className="mt-10">
                <div className="relative inline-block mx-auto lg:bg-gray-200 rounded-full">

                    <form method="POST" action="#" className="lg:flex text-sm">
                        <div className="lg:py-3 lg:px-5 flex items-center">
                            <label htmlFor="email" className="hidden lg:inline-block">
                                <img src="/images/mailbox-icon.svg" alt="mailbox letter" />
                            </label>

                            <input id="email" type="text" placeholder="Your email address"
                                   className="lg:bg-transparent py-2 lg:py-0 pl-4 focus-within:outline-none" />
                        </div>

                        <button type="submit"
                                className="transition-colors duration-300 bg-blue-500 hover:bg-blue-600 mt-4 lg:mt-0 lg:ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-8"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    </section>
      <div>
        {articles.articles.data.map(
          (
            article: {
              tags: any[];
              image: string | undefined;
              description: ReactNode;
              title: string;
            },
            index: Key | null | undefined
          ) => (
            <div key={index} className="pb-4">

              <div className="flex space-x-2">
                {article.tags.map((tag: any) => (
                  <div
                    key={tag.id}
                    className="text-sm font-normal border border-white p-1 rounded-xl"
                  >
                    <p> {tag.name}</p>
                  </div>
                ))}
              </div>

              {/* <img src={article.image} alt={article.title} /> */}
              <h1 className="text-xl font-bold">{article.title}</h1>
              <p className="text-sm font-normal">{article.description}</p>
              <div className="flex space-x-14 pt-8">
                <p>Likes</p>
                <p>Dislikes</p>
                <p>Comment</p>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const response: AxiosResponse = await axios.get(
    "http://127.0.0.1:8000/api/articles",
    {
      headers: {
        Authorization:
          "Bearer 1|r7h3VPV5YWzC7vcXUrSgi0yIM9fugHVzWOi05VIEc6865cda",
      },
    }
  );
  const articles = await response.data;

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
