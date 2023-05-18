import styled from "styled-components"
import PromoComponent from "./containers/PromoComponent"
// import { promos } from "../../utils/promos"
import { useState, useEffect } from "react"

const PromoPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 30px;
  background-color: azure;
`

export default function PromoPage() {

  const [promos2, setPromos2] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/promos')
      .then(res=>res.json())
      .then(data=>setPromos2(data))
  }, []);
  return (
    <PromoPageContainer>
      {
        promos2
        ?
          promos2.map(promo => <PromoComponent key={promo.id} {...promo} />)
        : 
          <h1>Aun no hay promociones</h1>
      }
    </PromoPageContainer>
  )
}
