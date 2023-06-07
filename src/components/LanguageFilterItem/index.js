import './index.css'

const LanguageFilterItem = props => {
  const {id, eachFilteredData} = props
  const {language} = eachFilteredData

  return (
    <div>
      <li>
        <button className="tabs" type="button">
          {language}
        </button>
      </li>
    </div>
  )
}

export default LanguageFilterItem
