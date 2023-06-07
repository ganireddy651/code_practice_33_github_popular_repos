import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {isActiveTab: false, isloading: true}

  componentDidMount() {
    this.getAllRepos()
  }

  disPlayResults = updatedData => (
    <div>
      {updatedData.map(eachItem => (
        <RepositoryItem eachItem={eachItem} />
      ))}
    </div>
  )

  getAllRepos = async () => {
    const response = await fetch(`https://apis.ccbp.in/popular-repos`)
    const data = await response.json()
    const updatedData = {
      popularRepos: data.popular_repos,
    }
    if (response.ok === true) {
      this.displayResult(updatedData)
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(eachFilteredData => (
            <LanguageFilterItem
              eachFilteredData={eachFilteredData}
              key={eachFilteredData.id}
            />
          ))}
        </ul>
        {/* {this.disPlayResults} */}
      </div>
    )
  }
}

export default GithubPopularRepos
