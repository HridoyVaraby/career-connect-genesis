import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface BlogPostData {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
        alt_text: string;
      }
    ];
    author?: [
      {
        name: string;
        avatar_urls?: {
          [key: string]: string;
        };
      }
    ];
  };
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://wp.ccidbd.com/wp-json/wp/v2/posts?slug=${slug}&_embed=wp:featuredmedia,author`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="mt-4 text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{error || "Post not found"}</h2>
          <p className="text-gray-600 mb-6">We couldn't find the blog post you're looking for.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const imageAlt = post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || post.title.rendered;
  const author = post._embedded?.author?.[0]?.name;
  const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'];
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Article Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-gray-600">
            {author && (
              <div className="flex items-center">
                {authorAvatar && (
                  <img 
                    src={authorAvatar} 
                    alt={author} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <span>{author}</span>
              </div>
            )}
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="mb-10 rounded-lg overflow-hidden max-h-[500px]">
            <img
              src={featuredImage}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              className="blog-content"
            />
          </article>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;