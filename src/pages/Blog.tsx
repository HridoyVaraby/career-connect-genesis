import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import BlogCategories from "@/components/BlogCategories";

interface BlogPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
        alt_text: string;
      }
    ];
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const fetchPosts = async (pageNum: number) => {
    try {
      setLoading(true);
      // Add category filter if a category is selected
      const categoryParam = selectedCategory ? `&categories=${selectedCategory}` : '';
      const response = await fetch(
        `https://wp.ccidbd.com/wp-json/wp/v2/posts?page=${pageNum}&per_page=9${categoryParam}&_embed=wp:featuredmedia`
      );

      if (!response.ok) {
        if (response.status === 400) {
          setHasMore(false);
          setLoading(false);
          return;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      if (pageNum === 1) {
        setPosts(data);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data]);
      }

      // Check if we have more posts to load
      const totalPages = response.headers.get("X-WP-TotalPages");
      if (totalPages && pageNum >= parseInt(totalPages)) {
        setHasMore(false);
      }
    } catch (err) {
      setError("Failed to fetch blog posts. Please try again later.");
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset to page 1 when category changes
    setPage(1);
    setPosts([]);
    setHasMore(true);
    fetchPosts(1);
  }, [selectedCategory]);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Function to strip HTML tags and trim to specified word count
  const stripHtmlAndTrim = (html: string, wordCount: number = 30) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    const words = text.split(/\s+/);
    return words.slice(0, wordCount).join(" ") + (words.length > wordCount ? "..." : "");
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
         <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Events & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest events, workshops, and program announcements.
            </p>
          </div>
         </div>
        </section>

        {/* Categories */}
        <BlogCategories 
          selectedCategory={selectedCategory} 
          onCategoryChange={(categoryId) => {
            setSelectedCategory(categoryId);
          }} 
        />

        {/* Blog Posts Grid */}
        {error ? (
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <Button 
              onClick={() => {
                setError(null);
                fetchPosts(1);
              }}
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg";
                const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
                const excerpt = stripHtmlAndTrim(post.excerpt.rendered);
                const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Card key={post.id} className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                    
                    <Link to={`/blog/${post.slug}`}>
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={featuredImage}
                          alt={imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>

                    <CardHeader>
                      <div className="text-sm text-gray-500 mb-2">{formattedDate}</div>
                      <CardTitle className="line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="hover:underline">
                          <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600">
                        {excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/blog/${post.slug}`} className="w-full">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                          Read More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              {loading && page === 1 ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : hasMore ? (
                <Button 
                  onClick={loadMore} 
                  disabled={loading}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Load More"
                  )}
                </Button>
              ) : posts.length > 0 ? (
                <p className="text-gray-500">You've reached the end of the blog posts.</p>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;