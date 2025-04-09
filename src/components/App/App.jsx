import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";
import LoadMore from "../LoadMore/LoadMore";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Toaster, toast } from "react-hot-toast";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export default function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(null);

  const fetchImages = async (query, pageNum = 1) => {
    // used in handleSubmit and loadMore
    const perPage = 20;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}&page=${pageNum}&per_page=${perPage}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch images");
    const data = await response.json();
    return {
      results: data.results,
      totalPages: data.total_pages,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.elements.input.value.trim();
    // empty search term check
    if (!value) {
      toast.error("Please enter a search term.");
      return;
    }
    //reset states for new search
    setSearch(value);
    setPage(1);
    setLoading(true);
    setError("");
    // handling search by fetching images
    try {
      const { results, totalPages } = await fetchImages(value, 1);
      setImages(results);
      setTotalPages(totalPages);
    } catch {
      setError("Could not fetch images.");
      toast.error("Could not fetch images.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    // resetting loading/error
    setLoading(true);
    setError("");
    // handling load more by fetching images and rendering more
    try {
      const { results } = await fetchImages(search, nextPage);
      setImages((prev) => [...prev, ...results]);
      setPage(nextPage);
    } catch {
      setError("Could not load more images.");
      toast.error("Could not load more images.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {images.length > 0 ? (
        <Gallery images={images} onImageClick={openModal} />
      ) : (
        search && !loading && !error && <p>No images found.</p>
      )}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMore onClick={loadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
}
