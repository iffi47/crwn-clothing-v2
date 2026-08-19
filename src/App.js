const categories = [
 {
  id: 1,
  title: "Hats",
 },
 {
  id: 2,
  title: "Jackets",
 },
 {
  id: 3,
  title: "Sneakers",
 },
 {
  id: 4,
  title: "Men",
 },
 {
  id: 5,
  title: "Women",
 },
];
const App = () => {
 return (
  <div className="categories-container">
   {categories.map((cat) => (
    <div
     key={cat.id}
     className="category-container">
     {/* <img /> */}
     <div className="category-body-container">
      <h2>{cat.title}</h2>
      <p>Shop Now</p>
     </div>
    </div>
   ))}
  </div>
 );
};

export default App;
