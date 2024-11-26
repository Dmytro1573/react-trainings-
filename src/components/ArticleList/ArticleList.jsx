import css from "./ArticleList.module.css";

export default function ArticleList({ articles }) {
  return (
    <>
      <div>
        <ul className={css.list}>
          {articles.map((article) => (
            <li key={article.objectID}>
              <a href={article.url} className={css.link}>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
