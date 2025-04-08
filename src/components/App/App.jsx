import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import LoadMore from "../LoadMore/LoadMore";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export default function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async (query, pageNum = 1) => {
    const perPage = 10;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}&page=${pageNum}&per_page=${perPage}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch images");
    const data = await response.json();
    return data.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = e.target.elements.input.value.trim();

    if (!value) {
      toast.error("Please enter a search term.");
      return;
    }

    setSearch(value);
    setPage(1);
    setLoading(true);

    try {
      const results = await fetchImages(value, 1);
      setImages(results);
    } catch (err) {
      toast.error("Could not fetch images.");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    try {
      const moreResults = await fetchImages(search, nextPage);
      setImages((prev) => [...prev, ...moreResults]);
      setPage(nextPage);
    } catch (err) {
      toast.error("Could not load more images.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Toaster />
      <h1>Gallery</h1>
      <SearchBar onSubmit={handleSubmit} />
      <Gallery images={images} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMore onClick={loadMore} />}
    </div>
  );
}
