import Link from "next/link";
import Article from "./Article";

export default async function Articles() {
  const data = await fetch("http://127.0.0.1:8000/api/boutique/articles/");
  const articles = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <div className="col-span-4 flex flex-row justify-between">
        {articles.next && <Link href={articles.next}>Next</Link>}
        {articles.previous && <Link href={articles.previous}>Previous</Link>}
      </div>
      {articles.results.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
}
