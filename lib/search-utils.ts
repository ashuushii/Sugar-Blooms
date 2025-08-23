import { SearchResult } from "./search-data";

export function searchItems(query: string, items: SearchResult[]): SearchResult[] {
  const searchTerms = query.toLowerCase().split(" ");
  
  return items
    .map(item => {
      let score = 0;
      const searchableText = `
        ${item.title.toLowerCase()}
        ${item.description.toLowerCase()}
        ${item.tags?.join(" ").toLowerCase() || ""}
      `;

      // Check each search term
      searchTerms.forEach(term => {
        // Exact matches in title get highest score
        if (item.title.toLowerCase().includes(term)) {
          score += 10;
        }
        
        // Matches in tags get high score
        if (item.tags?.some(tag => tag.toLowerCase().includes(term))) {
          score += 5;
        }
        
        // Matches in description get medium score
        if (item.description.toLowerCase().includes(term)) {
          score += 3;
        }
        
        // Any other matches get low score
        if (searchableText.includes(term)) {
          score += 1;
        }
      });

      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => (b as any).score - (a as any).score)
    .slice(0, 8); // Limit to top 8 results
}
