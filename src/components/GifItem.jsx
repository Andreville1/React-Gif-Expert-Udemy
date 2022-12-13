import PropTypes from 'prop-types'

// Props tendría odo los atributos que se manden del padre
export const GifItem = ({title, url}) => { // Solo se saca de image el titulo y url 
  return (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}