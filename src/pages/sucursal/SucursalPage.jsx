import styled from "styled-components"

const SucursalPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
  height: 92vh;
  .slider {
    min-height: 350px;
    min-width: 350px;
    flex: 5;
    background-color: #283743;
  }
  .reviews {
    min-height: 200px;
    min-width: 350px;
    background-color: #00192f;
    flex: 4;
  }

`

export default function SucursalPage() {
  return (
    <SucursalPageContainer>
      <div className="slider">
        Sucursal
      </div>
      <div className="reviews">
        Reviews
      </div>
    </SucursalPageContainer>
  )
}
