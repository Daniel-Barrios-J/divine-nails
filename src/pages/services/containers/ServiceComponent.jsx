import styled from "styled-components";

const ServiceContainer = styled.div`
  width: 100%;
  min-height: 200px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 24px;
  border-radius: 0 60px 12px 0;
  box-shadow: -7px 9px 13px -7px rgba(0,0,0,0.86);
  background-color: #f39d9d;
  .service {
    flex: 2.5;
    text-align: center;
    h2 {
      margin-bottom: 8px;
    }
    img {
      width: 90%;
      border-radius: 8px;
      box-shadow: 0px 1px 15px 1px rgba(0,0,0,0.86);
    }
  }
  .description {
    flex: 3;
  }
  .price {
    flex: 1;
  }
  .contact {
    flex: 1;
  }
  @media all and (max-width: 700px) {
    flex-direction: column;
  }
`

export default function ServiceComponent(service) {
  const {nameService, description, price, imgUrl} = service;
  return (
    <ServiceContainer>
      <div className="service">
        <h2>{nameService}</h2>
        <img src={imgUrl} alt="img-service" />
      </div>
      <div className="description">
        {description}
      </div>
      <div className="price">
        price: {price}
      </div>
      <div className="contact">
        Agendar
      </div>
    </ServiceContainer>
  )
}
