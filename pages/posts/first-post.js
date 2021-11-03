import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Alert type={false}>dfd</Alert>
      <Head>
        <title>First Smile</title>
      </Head>
      <Image
        src="/images/smile.jpg" // Route of the image file
        height={300} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="smile"
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
