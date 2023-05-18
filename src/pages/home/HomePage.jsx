import styled from "styled-components"

const HomePageContainer = styled.div`
  display: flex;
  height: 92vh;
  flex-wrap: wrap;
  place-content: center;
  background-color: azure;
  .slider-container {
    flex: 2;
    height: 50%;
    background-color: red;
    min-width: 350px;
    min-height: 220px;
    order: 1;
  }
  .sucursal-container {
    flex: 1;
    min-width: 350px;
    height: 50%;
    min-height: 220px;
    background-color: beige;
    order: 3;
  }
  .main-container {
    width: 100%;
    height: 50%;
    background-color: blue;
    min-height: 300px;
    order: 4;
  }
  @media all and (max-width:700px) {
    height: auto;
    .main-container {
      order: 2;
    }
  }
`

export default function HomePage() {
  return (
    <HomePageContainer>
      <div className="slider-container">
        slider
      </div>
      <div className="sucursal-container">
        sucursal
      </div>
      <div className="main-container">
        main
      </div>
    </HomePageContainer>
  )
}
