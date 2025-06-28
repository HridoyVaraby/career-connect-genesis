import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

interface BlogCategoriesProps {
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

const BlogCategories = ({ selectedCategory, onCategoryChange }: BlogCategoriesProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://wp.ccidbd.com/wp-json/wp/v2/categories?per_page=100"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Filter out categories with no posts
        const categoriesWithPosts = data.filter((cat: Category) => cat.count > 0);
        setCategories(categoriesWithPosts);
      } catch (err) {
        setError("Failed to load categories");
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
      </div>
    );
  }

  if (error || categories.length === 0) {
    return null; // Don't show anything if there's an error or no categories
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "secondary" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(null)}
          className={selectedCategory === null ? "" : "border-gray-300 text-gray-700"}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "secondary" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={selectedCategory === category.id ? "" : "border-gray-300 text-gray-700"}
          >
            {category.name} ({category.count})
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;