import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const convertedData = {
    name: eachItem.name,
    id: eachItem.id,
    issueCount: eachItem.issues_count,
    avatarUrl: eachItem.avatar_url,
    forkCount: eachItem.forks_count,
    starsCount: eachItem.stars_count,
  }
  const {name, id, issueCount, avatarUrl, forkCount, starsCount} = convertedData
  console.log(avatarUrl)

  return (
    <div className="container">
      <div className="card">
        <img src={avatarUrl} alt={name} />
      </div>
    </div>
  )
}

export default RepositoryItem
