import { useState } from "react";

export default function Reader({ articles }) {
  const [articlesIdx, setArticlesIdx] = useState(0);

  const handelPrev = () => {
    setArticlesIdx(articlesIdx - 1);
  };

  const handleNext = () => {
    setArticlesIdx(articlesIdx + 1);
  };

  const currentArticle = articles[articlesIdx];
  const isFirst = articlesIdx === 0;
  const isLast = articlesIdx === articles.length - 1;

  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div>
        <div>
          <h3>Controllers</h3>
          <div>
            <button onClick={handelPrev} disabled={isFirst}>
              Prev
            </button>
            <button onClick={handleNext} disabled={isLast}>
              Next
            </button>
          </div>
          <div>
            <p>
              {articlesIdx + 1}/{articles.length}
            </p>
            <h3>Progress</h3>
            <div>
              <h2>{currentArticle.topic}</h2>
              <p>{currentArticle.text}</p>
            </div>
          </div>
        </div>

        <button onClick={handleIsVisible}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
            quasi quo! Ab harum perspiciatis nobis totam possimus quia pariatur,
            quidem eum numquam, sapiente ipsum, necessitatibus molestiae ipsam
            minima ipsa odio.
          </p>
        )}
      </div>
    </>
  );
}
