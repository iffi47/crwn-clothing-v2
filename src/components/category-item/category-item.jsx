export default function CategoryItem({cat}) {
  return(
    <>
    <div
     key={cat.id}
     className="category-container">
     {/* <img /> */}
     <div
      className="background-image"
      style={{ backgroundImage: `url(${cat.imageUrl})` }}></div>
     <div className="category-body-container">
      <h2>{cat.title}</h2>
      <p>Shop Now</p>
     </div>
    </div>
    </>
  )
}