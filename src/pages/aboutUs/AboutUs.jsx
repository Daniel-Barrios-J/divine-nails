import styled from "styled-components"

const AboutPageContainer = styled.div`
  width: 100%;
  background-color: aqua;
  height: 92vh;
  .about-us-container {
    min-height: 250px;
    height: 70%;
    background-color: #0e375b;
  }
  .services {
    min-height: 150px;
    height: 30%;
    background-color: #5b6c7c;
  }
`

export default function AboutUs() {
  return (
    <AboutPageContainer>
      <div className="about-us-container">
        sobre nosotros
      </div>
      <div className="services">
        servicios
      </div>
    </AboutPageContainer>
  )
}
