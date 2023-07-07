export const myHypergraphFetch = async (query: string, variable?: object) => {
  try{
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${process.env.HYGRAPH_PERMANENTAUTH_TOKEN}`
  }
  const requestBody = {
   query: query,
  }
  if(variable !== undefined ) Object.assign(requestBody, {variables:variable} )

  console.log(requestBody)

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody)
  };

    const urlData = process.env.NEXT_PUBLIC_KEY_GRAPHQL
    if(urlData) {
      const {data} = await ( await fetch(urlData, options )).json()
      return data
    }
  } catch(err) {
    console.log('ERROR DURING FETCH REQUEST', err);
  }
}