import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'
import {
  ItemsContainer,
  ItemsList,
  ItemText,
  IconContainer,
} from './styledComponents'
import SavedContext from '../../Context'
import './index.css'

class ItemSection extends Component {
  state = {activeSection: []}

  changeItem = id => {
    this.setState({activeSection: id})
  }

  render() {
    const {activeSection} = this.state
    console.log(activeSection)

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <ItemsContainer>
              <Link className="link" to="/">
                <ItemsList
                  onClick={() => this.changeItem('0')}
                  isActive={activeSection === '0'}
                  key="0"
                  id="0"
                  isDark={isDark}
                >
                  <IconContainer
                    isDark={isDark}
                    isActive={activeSection === '0'}
                  >
                    <AiFillHome />
                  </IconContainer>
                  <ItemText isDark={isDark}>Home</ItemText>
                </ItemsList>
              </Link>
              <Link className="link" to="/trending">
                <ItemsList
                  onClick={() => this.changeItem('1')}
                  isActive={activeSection === '1'}
                  key="1"
                  id="1"
                  isDark={isDark}
                >
                  <IconContainer
                    isDark={isDark}
                    isActive={activeSection === '1'}
                  >
                    <HiFire />
                  </IconContainer>
                  <ItemText isDark={isDark}>Trending</ItemText>
                </ItemsList>
              </Link>
              <Link className="link" to="/gaming">
                <ItemsList
                  onClick={() => this.changeItem('2')}
                  isActive={activeSection === '2'}
                  key="2"
                  id="2"
                  isDark={isDark}
                >
                  <IconContainer
                    isDark={isDark}
                    isActive={activeSection === '2'}
                  >
                    <FaGamepad />
                  </IconContainer>
                  <ItemText isDark={isDark}>Gaming</ItemText>
                </ItemsList>
              </Link>
              <Link className="link" to="/savedVideos">
                <ItemsList
                  onClick={() => this.changeItem('3')}
                  isActive={activeSection === '3'}
                  key="3"
                  id="3"
                  isDark={isDark}
                >
                  <IconContainer
                    isDark={isDark}
                    isActive={activeSection === '3'}
                  >
                    <BiListPlus />
                  </IconContainer>
                  <ItemText isDark={isDark}>Saved Videos</ItemText>
                </ItemsList>
              </Link>
            </ItemsContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default ItemSection
