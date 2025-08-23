import { Search, X, Cookie, FileText, Phone, HelpCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { searchData } from "@/lib/search-data";
import { searchItems } from "@/lib/search-utils";
import { useDebounce } from "@/hooks/use-debounce";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const debouncedQuery = useDebounce(searchQuery, 200);
  const searchResults = searchItems(debouncedQuery, searchData);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [debouncedQuery]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            Math.min(prev + 1, searchResults.length - 1)
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            window.location.href = searchResults[selectedIndex].url;
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, searchResults, selectedIndex]);

  // Scroll selected item into view
  useEffect(() => {
    const container = containerRef.current;
    const selectedElement = container?.querySelector('[data-selected="true"]');
    if (container && selectedElement) {
      selectedElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "product":
        return <Cookie className="w-5 h-5 text-pink-400" />;
      case "recipe":
        return <FileText className="w-5 h-5 text-pink-400" />;
      case "faq":
        return <HelpCircle className="w-5 h-5 text-pink-400" />;
      default:
        return <FileText className="w-5 h-5 text-pink-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="flex min-h-screen items-start justify-center px-4 pt-16 md:pt-32"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform transition-all duration-200">
          <div className="relative">
            <div className="flex items-center px-6 py-4 border-b border-pink-100">
              <div className="flex items-center flex-1 space-x-4">
                <Search className="w-5 h-5 text-pink-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-0 py-1.5 text-lg text-pink-700 placeholder:text-pink-300 bg-transparent border-none outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="p-2 text-pink-400 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {searchQuery ? (
                <div ref={containerRef}>
                  {searchResults.length > 0 ? (
                    <div className="space-y-2 divide-y divide-pink-100/30">
                      {searchResults.map((result, index) => (
                        <a
                          key={result.url}
                          href={result.url}
                          className={`block p-4 rounded-xl transition-all duration-200 ${
                            index === selectedIndex
                              ? "bg-gradient-to-r from-pink-50 to-pink-50/30 shadow-sm"
                              : "hover:bg-pink-50/30"
                          }`}
                          data-selected={index === selectedIndex}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-2xl transform transition-transform duration-300 group-hover:scale-110">
                              {getCategoryIcon(result.category)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="font-medium text-pink-600 truncate">
                                  {result.title}
                                </div>
                                <span className="hidden md:inline-flex px-2 py-0.5 text-xs font-medium text-pink-500 bg-pink-50 rounded-full">
                                  {result.category}
                                </span>
                              </div>
                              <div className="text-sm text-pink-500 line-clamp-2">
                                {result.description}
                              </div>
                              {result.tags && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {result.tags.slice(0, 3).map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-xs text-pink-400 bg-pink-50/50 rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div
                              className={`hidden md:flex items-center text-pink-400 transition-opacity duration-200 ${
                                index === selectedIndex
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            >
                              <kbd className="px-2 py-1 text-xs font-sans font-semibold bg-pink-50 rounded-lg">
                                ↵
                              </kbd>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="w-12 h-12 mx-auto text-pink-200 mb-4" />
                      <p className="text-pink-400 font-medium mb-2">
                        No results found
                      </p>
                      <p className="text-sm text-pink-300">
                        Try different keywords or check our{" "}
                        <a
                          href="/faq"
                          className="underline hover:text-pink-400 transition-colors"
                        >
                          FAQ page
                        </a>
                      </p>
                      <div className="mt-6 flex justify-center gap-2">
                        <span className="text-pink-300 text-sm">
                          Popular searches:
                        </span>
                        {["cupcakes", "delivery", "allergens"].map((term) => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-3 py-1 text-sm text-pink-500 bg-pink-50/50 rounded-full hover:bg-pink-50 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center py-6">
                    <p className="text-pink-400">Start typing to search...</p>
                  </div>
                  <div className="border-t border-pink-100/50 pt-6">
                    <div className="text-sm font-medium text-pink-400 mb-4 px-1">
                      Quick Links
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="/cupcakes"
                        className="group p-3 rounded-xl bg-gradient-to-br from-pink-50/50 to-transparent hover:from-pink-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <Cookie className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <span className="text-pink-600 font-medium">
                              Our Cupcakes
                            </span>
                            <p className="text-pink-400 text-sm mt-0.5">
                              Browse our delicious treats
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/recipes"
                        className="group p-3 rounded-xl bg-gradient-to-br from-pink-50/50 to-transparent hover:from-pink-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <span className="text-pink-600 font-medium">
                              Recipes
                            </span>
                            <p className="text-pink-400 text-sm mt-0.5">
                              Learn to bake with us
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/contact"
                        className="group p-3 rounded-xl bg-gradient-to-br from-pink-50/50 to-transparent hover:from-pink-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <Phone className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <span className="text-pink-600 font-medium">
                              Contact
                            </span>
                            <p className="text-pink-400 text-sm mt-0.5">
                              Get in touch with us
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/faq"
                        className="group p-3 rounded-xl bg-gradient-to-br from-pink-50/50 to-transparent hover:from-pink-100/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                          <div>
                            <span className="text-pink-600 font-medium">
                              FAQs
                            </span>
                            <p className="text-pink-400 text-sm mt-0.5">
                              Find quick answers
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
