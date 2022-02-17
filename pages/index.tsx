import Link from 'next/link'
import Layout from '../components/Layout'
import { NavItem } from '../storybook-ui-library/src/components/NavItem'
import { Button } from '../storybook-ui-library/src/components/SimpleButton'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Same here</h1>
      <Button children={'dadl'} variant={'primary'} />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
