
const SEOQuoteSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-white/5 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left Side - Quote */}
            <div className="md:w-2/3 text-center md:text-left">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6 backdrop-blur-md shadow-xl md:ml-0 mx-auto transform hover:scale-105 transition-transform duration-300">
                <span className="text-3xl text-white font-serif">"</span>
              </div>
              
              {/* Main Quote - Enhanced Design */}
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-8 h-8 bg-white/10 rounded-full animate-pulse-slow"></div>
                <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-white/10 rounded-full animate-pulse-slow"></div>
                
                <blockquote className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <span className="text-white/90">"Education is the most powerful weapon which you can use to</span>
                  <span className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md mx-1 inline-block shadow-md transform hover:scale-105 transition-transform duration-300 text-white">
                    change the world
                  </span>
                  <span className="text-white/90">- and we're here to be your bridge to that change."</span>
                </blockquote>
              </div>
              
              {/* Attribution - Mobile */}
              <div className="text-white/90 text-base mb-6 md:hidden">
                <span className="font-semibold">Shozib Choudhury</span> - Managing Director, CCID Bangladesh
              </div>
            </div>
            
            {/* Right Side - Director Image */}
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
                
                {/* Image with circular crop */}
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl group-hover:border-white/60 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" 
                    alt="Shozib Choudhury" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full border-2 border-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">✓</span>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -left-2 bg-primary/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  Verified
                </div>
              </div>
              
              {/* Attribution - Desktop */}
              <div className="text-white/90 text-base mt-6 hidden md:block text-center bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-lg">
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
