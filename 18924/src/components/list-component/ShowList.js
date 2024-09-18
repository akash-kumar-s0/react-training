import { ActionButton } from "./ActionButtons";

export const ShowList = ({ data }) => {
  return (
    <>
      {data.posts.map((post) => {
        return (
            <div
              key={post.id}
              className="max-w-sm max-h-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>

              <a
                href="#"
                className="inline-flex items-center m-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <p>likes : {post.reactions.likes}</p>
              </a>
              <a
                href="#"
                className="inline-flex items-center m-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <p>dislikes : {post.reactions.dislikes}</p>
              </a>
              {post.userId === 123 && <ActionButton />}
            </div>
          
        );
      })}
    </>
  );
};
