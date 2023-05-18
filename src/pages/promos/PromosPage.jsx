import styled from "styled-components"
import PromoComponent from "./containers/PromoComponent"
import { promos } from "../../utils/promos"

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
  return (
    <PromoPageContainer>
      {
        promos.map(promo => <PromoComponent key={promo.name} {...promo} />)
      }
    </PromoPageContainer>
  )
}
