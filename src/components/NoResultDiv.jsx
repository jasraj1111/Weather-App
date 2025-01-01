const NoResultDiv = () => {
  return (
    <div className="no-results">
        <img src="images/icons/no-result.svg" alt= "No result found" className="icon"/>
        <h3 className="title">Something went wrong</h3>
        <p className="message">
            We are unable to retirve the weather details. Ensure you have entered a valid city name. If the issue persists please try again later.
        </p>
    </div>
  )
}

export default NoResultDiv