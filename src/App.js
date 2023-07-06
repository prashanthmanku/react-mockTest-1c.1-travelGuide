import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './App.css'

import {
  AppCard,
  WidthCard,
  Heading,
  TavelList,
  TavelItem,
  Img,
  ItemHeading,
  Description,
  Loadercard,
} from './styledComponent'

class App extends Component {
  state = {travelList: [], isLoading: true}

  componentDidMount() {
    this.getTavelData()
  }

  getTavelData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()

    const updatedData = data.packages.map(each => ({
      description: each.description,
      id: each.id,
      imageUrl: each.image_url,
      name: each.name,
    }))
    this.setState({travelList: updatedData, isLoading: false})
  }

  render() {
    const {travelList, isLoading} = this.state

    return (
      <AppCard>
        <WidthCard>
          <Heading>Travel Guide</Heading>
          {isLoading ? (
            <Loadercard data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </Loadercard>
          ) : (
            <TavelList>
              {travelList.map(each => (
                <TavelItem key={each.id}>
                  <Img src={each.imageUrl} alt={each.name} />
                  <ItemHeading>{each.name}</ItemHeading>
                  <Description>{each.description}</Description>
                </TavelItem>
              ))}
            </TavelList>
          )}
        </WidthCard>
      </AppCard>
    )
  }
}

export default App
