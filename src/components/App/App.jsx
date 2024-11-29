import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { fetchPhotos } from "../photos-api";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageMogal/ImageMogal";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getAllPhotos() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAllPhotos();
  }, [query, page]);

  const handleSubmitForm = (topic) => {
    if (topic.trim() === "") {
      toast.error("This field can not be empty");
      return;
    }

    setPhotos([]);
    setIsError(false);
    setQuery(topic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImgUrl = (imgUrl) => {
    setOpenModal(true);
    setImgUrl(imgUrl);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={handleSubmitForm} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <ImageGallery photos={photos} onGetUrl={handleImgUrl} />
        {photos.length > 0 && (
          <LoadMoreBtn onLoadMore={handleLoadMore} isLoading={isLoading} />
        )}
        <ImageModal
          isOpen={openModal}
          isClose={handleCloseModal}
          imgUrl={imgUrl}
        />
        <Toaster position="top-right" />
      </div>
    </>
  );
}
