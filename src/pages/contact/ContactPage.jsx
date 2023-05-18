import styled from "styled-components"

const ContactPageContainer = styled.div`
  width: 100%;
  height: 92vh;
  background-color: #cf9b58;
  display: flex;
  flex-wrap: wrap;
  .form-container {
    flex: 1;
    order: 2;
    min-width: 300px;
    background-color: #64e37c;
  }
  .contact-container {
    flex: 2;
    order: 3;
    min-height: 300px;
    min-width: 300px;
    background-color: #386d42;
  }
  @media all and (max-width: 640px) {
    .contact-container {
      order: 1;
    }
  }
`

export default function ContactPage() {
  return (
    <ContactPageContainer>
      <div className="form-container">
        form
      </div>
      <div className="contact-container">
        data contact
      </div>
    </ContactPageContainer>
  )
}
