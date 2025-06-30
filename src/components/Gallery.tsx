
const Gallery = () => {
  const images = [
    { src: "/image 5.webp", alt: "Students studying abroad" },
    { src: "/image 6.webp", alt: "International internship" },
    { src: "/image 1.webp", alt: "University campus" },
    { src: "/image 2.webp", alt: "Students collaborating" },
    { src: "/image 3.webp", alt: "Global networking" },
    { src: "/image 13.webp", alt: "Success celebration" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our students in action across various international programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
