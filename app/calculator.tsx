import Link from "next/link";

export default function Calculator() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Baking Calculator
        </h1>
        <p className="text-pink-700 mb-8">
          Convert units for your favorite baking ingredients!
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label
                htmlFor="ingredient"
                className="block text-pink-600 font-medium mb-2"
              >
                Select Ingredient
              </label>
              <select
                id="ingredient"
                className="w-full border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="flour">Flour</option>
                <option value="sugar">Sugar</option>
                <option value="butter">Butter</option>
                <option value="milk">Milk</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="unit1"
                className="block text-pink-600 font-medium mb-2"
              >
                From Unit
              </label>
              <select
                id="unit1"
                className="w-full border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="teaspoon">Teaspoon</option>
                <option value="tablespoon">Tablespoon</option>
                <option value="cup">Cup</option>
                <option value="grams">Grams</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="value"
                className="block text-pink-600 font-medium mb-2"
              >
                Value
              </label>
              <input
                type="number"
                id="value"
                className="w-full border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="unit2"
                className="block text-pink-600 font-medium mb-2"
              >
                To Unit
              </label>
              <select
                id="unit2"
                className="w-full border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="teaspoon">Teaspoon</option>
                <option value="tablespoon">Tablespoon</option>
                <option value="cup">Cup</option>
                <option value="grams">Grams</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-pink-700 transition-all"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
