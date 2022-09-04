import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";

const ProductDetail = () => {
  //URL에서 파라미터 변소(productId) 받아오는 로직
  let { productId } = useParams();

  return (
    <ProductDetailStyled>
      <Navigation />
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;

export default ProductDetail;
