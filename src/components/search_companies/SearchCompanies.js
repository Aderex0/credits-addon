// Components
import Button from '../reusables/Button'
// React
import { useEffect, useState } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getCompaniesRequest } from '../../redux/actions/companies.action'
// Style
import './SearchCompanies.scss'

const SearchCompanies = () => {
  const dispatch = useDispatch()
  // Data fetching list of companies
  const companies = useSelector(state => state.companies.companies)

  useEffect(() => {
    dispatch(getCompaniesRequest())
  }, [])

  // Autocomplete
  const [active, setActive] = useState(0)
  const [filtered, setFiltered] = useState([{}])
  const [isShow, setIsShow] = useState(false)
  const [input, setInput] = useState({
    id: '',
    name: ''
  })

  const onChange = e => {
    const input = e.currentTarget.value
    const newFilteredSuggestions = companies.filter(
      company => company['name'].toLowerCase().indexOf(input.toLowerCase()) > -1
    )

    setActive(0)
    setFiltered(newFilteredSuggestions)
    setIsShow(true)
    setInput({
      id: '',
      name: e.currentTarget.value
    })
  }

  const onClick = (e, suggestion) => {
    setActive(0)
    setFiltered([])
    setIsShow(false)
    setInput({
      id: suggestion.id,
      name: suggestion.name
    })
  }

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className='autocomplete'>
            {filtered.map((suggestion, index) => {
              let className
              if (index === active) {
                className = 'active'
              }
              return (
                <li
                  className={className}
                  key={suggestion.name}
                  onClick={e => onClick(e, suggestion)}
                >
                  {suggestion.name}
                </li>
              )
            })}
          </ul>
        )
      } else {
        return (
          <div className='no-autocomplete'>
            <em>Not found</em>
          </div>
        )
      }
    }
    return <></>
  }

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `/${input.id}`
  }

  return (
    <>
      <form className='search-form' onSubmit={e => handleSubmit(e)}>
        <input type='text' onChange={onChange} value={input.name} />
        <Button text='Search' btnColor='rgb(250, 111, 0)' />
      </form>
      {renderAutocomplete()}
    </>
  )
}

export default SearchCompanies
