import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.style";

export default function DirectoryItem({ cat }) {
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{ backgroundImage: `url(${cat.imageUrl})` }}
      />
      <Body>
        <h2>{cat.title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}