export default function ImageCard({ photo, onGetUrl }) {
  const handleGetPhotoUrl = () => {
    onGetUrl(photo.urls.small);
    console.log(photo);
  };

  return (
    <>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={handleGetPhotoUrl}
      />
    </>
  );
}
