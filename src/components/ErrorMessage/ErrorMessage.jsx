import './ErrorMessage.scss'

/**
 * Component for generate the default error message.
 * @component
 * @return { HTMLElement }
 */
function ErrorMessage() {
  return (
    <div className="error-message">
      <p>Une erreur est survenue lors du chargement des données !</p>
    </div>
  )
}

export default ErrorMessage
