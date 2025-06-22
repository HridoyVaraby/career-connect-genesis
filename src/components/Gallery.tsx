
const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", alt: "Students studying abroad" },
    { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", alt: "International internship" },
    { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5", alt: "University campus" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "Students collaborating" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", alt: "Global networking" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978", alt: "Success celebration" }
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
