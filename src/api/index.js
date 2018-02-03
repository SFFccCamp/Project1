const API_ROOT = ''

function fetchData() {
  return fetch(`${API_ROOT}/data`)
    .then(res => res.json())
    .then(json => jsona.data)
}

export default fetchData
