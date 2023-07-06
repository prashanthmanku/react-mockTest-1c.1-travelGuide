import styled from 'styled-components'

export const AppCard = styled.div`
  background-color: #eef4f7;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const WidthCard = styled.div`
  width: 90%;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 25px;
  border-bottom: 3px solid #52bbf0;
  padding-bottom: 4px;
  color: #334155;
  align-self: center;
`

export const TavelList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TavelItem = styled.li`
  width: 100%;
  margin: 0px 20px 20px 0px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const Img = styled.img`
  width: 100%;
`

export const ItemHeading = styled.h1`
  padding: 0px 20px;
  color: #475569;
  font-size: 17px;
  font-weight: 500;
`

export const Description = styled.p`
  padding: 0px 20px;
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
export const Loadercard = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
