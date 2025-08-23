import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all"
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
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform transition-all">
          <div className="relative">
            <div className="flex items-center px-4 py-3 border-b border-pink-100">
              <Search className="w-5 h-5 text-pink-400" />
              <input
                type="text"
                placeholder="Search anything..."
                className="flex-1 px-3 py-1 text-lg text-pink-700 placeholder:text-pink-300 bg-transparent border-none outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 text-pink-400 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4">
              {searchQuery && (
                <div className="space-y-4">
                  {/* Example search results - you can customize these based on your content */}
                  <a
                    href="/cupcakes"
                    className="block p-3 rounded-xl hover:bg-pink-50 transition-colors"
                  >
                    <div className="font-medium text-pink-600 mb-1">Cupcakes</div>
                    <div className="text-sm text-pink-500">
                      Discover our delicious range of handcrafted cupcakes
                    </div>
                  </a>
                  <a
                    href="/recipes"
                    className="block p-3 rounded-xl hover:bg-pink-50 transition-colors"
                  >
                    <div className="font-medium text-pink-600 mb-1">Recipes</div>
                    <div className="text-sm text-pink-500">
                      Browse our collection of sweet recipes
                    </div>
                  </a>
                  <a
                    href="/contact"
                    className="block p-3 rounded-xl hover:bg-pink-50 transition-colors"
                  >
                    <div className="font-medium text-pink-600 mb-1">Contact</div>
                    <div className="text-sm text-pink-500">
                      Get in touch for orders and inquiries
                    </div>
                  </a>
                </div>
              )}
              {!searchQuery && (
                <div className="text-center py-8">
                  <p className="text-pink-400">Start typing to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
