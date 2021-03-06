import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../components'
import { Result } from 'antd'

const NotFound = () => {
  const history = useHistory()
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={() => history.goBack()}>
          Back Home
        </Button>
      }
    />
  )
}

export default NotFound
