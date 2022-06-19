import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const ViewDeceased = () => {
  const [deceaseds, setDeceaseds] = useState([]);

  useEffect(() => {
    /* 
      For the v2 graphql api (experimental) you can use:
      axios.post('/api/v2/graphql', { query: airlinesQuery })

      You'll also need to uncomment this line above:
      import airlinesQuery from '../../queries/airlinesQuery'
    */
    axios.get('/api/v1/deceaseds.json')
    .then( resp => setDeceaseds(resp.data.data))
    .catch( data => console.log('error', data))
  }, [])


  const grid = deceaseds.map( (d, index) => {
    const { name, age, description } = d.attributes

    
    return (
      <div>
        <p>{name}, {age}</p>
        <p>{description}</p>
      </div>
    )
  })

  return (
    <Card>
      <Grid>{grid}</Grid>
    </Card>
    
  );
}

export default ViewDeceased
