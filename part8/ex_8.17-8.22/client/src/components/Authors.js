import {useMutation, useQuery} from "@apollo/client";
import {ALL_AUTHORS, UPDATE_AUTHOR} from "../queries/query";
import {useState} from "react";
import Select from 'react-select';



const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS)
  const [updateAuthor] = useMutation(UPDATE_AUTHOR, {
    refetchQueries: [{query: ALL_AUTHORS}]
  })

  const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  if (result.loading) {
    return <div>loading...</div>
  }

  if (!props.show) {
    return null
  }
  const authors = result.data.allAuthors

  const handleSubmit = async (event) => {
    event.preventDefault()

    updateAuthor({  variables: { name, born } })

    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Set birthday</h2>

      <form onSubmit={handleSubmit}>
        <Select
          defaultValue={name}
          onChange={(option) => setName(option.value)}
          options={authors.map(a => ({value: a.name, label: a.name}))}
        />
        <div>
          born:
          <input type="text"
                 value={born}
                 onChange={({target}) => setBorn(Number(target.value))}/>
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default Authors
