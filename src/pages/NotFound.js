import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Halaman Tidak Ditemukan";
  }, []);

  return (
    <section className="mt-10 flex justify-center">
      <span className="text-3xl font-semibold">Halaman Tidak Ditemukan</span>
    </section>
  );
};

export default NotFound;
