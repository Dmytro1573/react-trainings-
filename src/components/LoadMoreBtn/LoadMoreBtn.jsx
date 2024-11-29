export default function LoadMoreBtn({ onLoadMore, isLoading }) {
  return (
    <>
      <button type="button" onClick={onLoadMore} disabled={isLoading}>
        Load More
      </button>
    </>
  );
}
