import "./directory-item.style.scss";

export default function DirectoryItem({ cat }) {
  return (
    <>
      <div
        key={cat.id}
        className="directory-item-container">
        {/* <img /> */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${cat.imageUrl})` }}></div>
        <div className="directory-item-body">
          <h2>{cat.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  )
}