import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
      <img width="341" height="204" src={thumbnail} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDesc>{description}</ProductDesc>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div`
  padding: 43px;
`;
const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
`;

const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
`;
export default ProductCard;
