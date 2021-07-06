// our-domain.com/news/something-important
import Link from 'next/link';

function  NewsPage() {
    return <>
        <h1>The News Page</h1>
        <ul>
            <li><Link href='/news/4'>Index</Link></li>
            <li><Link href='/news/2'>News</Link></li>
        </ul>
    </>
  }
  
  export default NewsPage;