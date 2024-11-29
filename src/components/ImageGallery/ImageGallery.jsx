import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ photos, onGetUrl }) {
  return (
    <>
      <div>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
                  <ImageCard photo={photo} onGetUrl={onGetUrl} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
