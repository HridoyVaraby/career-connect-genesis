
const SEOQuoteSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Side - Quote */}
            <div className="md:w-2/3 text-center md:text-left">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm shadow-lg md:ml-0 mx-auto">
                <span className="text-3xl text-white font-serif">"</span>
              </div>
              
              {/* Main Quote */}
              <blockquote className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
                "Education is the most powerful weapon which you can use to change the world - and we're here to be your bridge to that change."
              </blockquote>
              
              {/* Attribution - Mobile */}
              <div className="text-white/90 text-base mb-6 md:hidden">
                <span className="font-semibold">Shozib Choudhury</span> - Managing Director, CCID Bangladesh
              </div>
            </div>
            
            {/* Right Side - Director Image */}
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative">
                {/* Image with circular crop */}
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/40 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Shozib Choudhury" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Verified badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              
              {/* Attribution - Desktop */}
              <div className="text-white/90 text-base mt-6 hidden md:block text-center bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/20">
                <div className="font-semibold text-lg">Shozib Choudhury</div>
                <div>Managing Director, CCID Bangladesh</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOQuoteSection;
