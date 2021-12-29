import { NextPage } from 'next'
import { useEffect } from 'react'

const RulesPage: NextPage = () => {
  useEffect(() => {
    localStorage.setItem('readRules', 'true');
  }, [])

  return (
    <h1>ルールのページ</h1>
  )
}

export default RulesPage
