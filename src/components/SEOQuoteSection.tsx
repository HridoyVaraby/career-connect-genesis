
const SEOQuoteSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <span className="text-4xl text-white">"</span>
          </div>
          
          {/* Main Quote */}
          <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Education is the most powerful weapon which you can use to 
            <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm mx-2">
              change the world
            </span>
            - and we're here to be your bridge to that change."
          </blockquote>
          
          {/* Attribution */}
          <div className="text-white/90 text-lg mb-8">
            <span className="font-semibold">Shozib Choudhury</span> - Managing Director, CCID Bangladesh
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOQuoteSection;
